const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] // Replace with your actual domain
    : ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Google Sheets API setup
let auth;
if (process.env.GOOGLE_SHEETS_PRIVATE_KEY) {
  // Use environment variables for service account
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n');
  auth = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    privateKey,
    ['https://www.googleapis.com/auth/spreadsheets']
  );
} else {
  // Fallback to credentials file
  auth = new google.auth.GoogleAuth({
    keyFile: './credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

const sheets = google.sheets({ version: 'v4', auth });

// Validation middleware
const validateVolunteerForm = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('address').trim().isLength({ min: 5, max: 200 }).withMessage('Address must be between 5 and 200 characters'),
  body('town').trim().isLength({ min: 2, max: 100 }).withMessage('Town must be between 2 and 100 characters'),
  body('zip').trim().isLength({ min: 5, max: 10 }).withMessage('ZIP code must be between 5 and 10 characters'),
  body('phone').trim().isLength({ min: 10, max: 20 }).withMessage('Phone number must be between 10 and 20 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Must be a valid email address'),
  body('tshirtSize').trim().isIn(['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']).withMessage('Invalid T-shirt size'),
  body('highSchoolYear').optional().trim().isIn(['Freshman', 'Sophomore', 'Junior', 'Senior']).withMessage('Invalid high school year'),
  body('highSchoolName').optional().trim().isLength({ max: 100 }).withMessage('High school name must be less than 100 characters'),
  body('yearsVolunteered').optional().isInt({ min: 0, max: 50 }).withMessage('Years volunteered must be a number between 0 and 50'),
];

const validateAthleteForm = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Athlete name must be between 2 and 100 characters'),
  body('age').isInt({ min: 5, max: 25 }).withMessage('Age must be between 5 and 25'),
  body('parentName').trim().isLength({ min: 2, max: 100 }).withMessage('Parent name must be between 2 and 100 characters'),
  body('parentPhone').trim().isLength({ min: 10, max: 20 }).withMessage('Parent phone must be between 10 and 20 characters'),
  body('parentEmail').isEmail().normalizeEmail().withMessage('Must be a valid email address'),
  body('specialNeeds').optional().trim().isLength({ max: 500 }).withMessage('Special needs description must be less than 500 characters'),
  body('experience').optional().trim().isLength({ max: 500 }).withMessage('Experience description must be less than 500 characters'),
  body('emergencyContact').trim().isLength({ min: 2, max: 100 }).withMessage('Emergency contact name must be between 2 and 100 characters'),
  body('emergencyPhone').trim().isLength({ min: 10, max: 20 }).withMessage('Emergency contact phone must be between 10 and 20 characters'),
];

// Helper function to append data to Google Sheets
async function appendToSheet(sheetName, data) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    if (!spreadsheetId) {
      throw new Error('Google Sheets spreadsheet ID not configured');
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [data],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw new Error('Failed to save data to spreadsheet');
  }
}

// Helper function to get current timestamp
function getCurrentTimestamp() {
  return new Date().toISOString();
}

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Project Lovematch API Server',
    status: 'running',
    endpoints: [
      '/api/health',
      '/api/volunteer-signup',
      '/api/athlete-signup'
    ],
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Volunteer signup endpoint
app.post('/api/volunteer-signup', validateVolunteerForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const {
      name, address, town, zip, phone, tshirtSize, email,
      highSchoolYear, highSchoolName, yearsVolunteered
    } = req.body;

    // Prepare data for Google Sheets
    const rowData = [
      getCurrentTimestamp(), // Timestamp
      'Volunteer', // Type
      name,
      address,
      town,
      zip,
      phone,
      tshirtSize,
      email,
      highSchoolYear || '',
      highSchoolName || '',
      yearsVolunteered || '',
      req.ip, // IP address for security
      req.get('User-Agent') || '', // User agent
    ];

    // Append to Google Sheets
    await appendToSheet('Volunteers', rowData);

    // Log successful submission (without sensitive data)
    console.log(`Volunteer signup received from ${req.ip} for ${name}`);

    res.json({
      success: true,
      message: 'Volunteer application submitted successfully',
    });

  } catch (error) {
    console.error('Volunteer signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
});

// Athlete signup endpoint
app.post('/api/athlete-signup', validateAthleteForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const {
      name, age, parentName, parentPhone, parentEmail,
      specialNeeds, experience, emergencyContact, emergencyPhone
    } = req.body;

    // Prepare data for Google Sheets
    const rowData = [
      getCurrentTimestamp(), // Timestamp
      'Athlete', // Type
      name,
      age,
      parentName,
      parentPhone,
      parentEmail,
      specialNeeds || '',
      experience || '',
      emergencyContact,
      emergencyPhone,
      req.ip, // IP address for security
      req.get('User-Agent') || '', // User agent
    ];

    // Append to Google Sheets
    await appendToSheet('Athletes', rowData);

    // Log successful submission (without sensitive data)
    console.log(`Athlete registration received from ${req.ip} for ${name}`);

    res.json({
      success: true,
      message: 'Athlete registration submitted successfully',
    });

  } catch (error) {
    console.error('Athlete signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  
  if (!process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
    console.warn('Warning: GOOGLE_SHEETS_SPREADSHEET_ID not set. Form submissions will fail.');
  }
  
  if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY && !process.env.GOOGLE_SHEETS_CLIENT_EMAIL) {
    console.warn('Warning: Google Sheets credentials not configured. Form submissions will fail.');
  }
});

module.exports = app; 