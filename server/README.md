# Project Lovematch Backend Server

This is the Node.js backend server for the Project Lovematch website, handling form submissions and data storage.

## Features

- **Secure Form Processing**: Input validation and sanitization
- **Google Sheets Integration**: Automatic data storage to spreadsheets
- **Security Middleware**: Helmet, CORS, rate limiting
- **API Endpoints**: RESTful API for volunteer and athlete signups
- **Error Handling**: Comprehensive error handling and logging

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy the `env.example` file to `.env` and configure your environment variables:

```bash
cp ../env.example .env
```

Required environment variables:

- `GOOGLE_SHEETS_SPREADSHEET_ID`: Your Google Sheets spreadsheet ID
- `GOOGLE_SHEETS_PRIVATE_KEY`: Service account private key
- `GOOGLE_SHEETS_CLIENT_EMAIL`: Service account email

### 3. Google Sheets Setup

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable the Google Sheets API

2. **Create a Service Account**:
   - Go to IAM & Admin > Service Accounts
   - Create a new service account
   - Download the JSON credentials file

3. **Set up Google Sheets**:
   - Create a new Google Sheets document
   - Share it with your service account email (with Editor permissions)
   - Note the spreadsheet ID from the URL

4. **Configure Environment Variables**:
   - Copy the private key and client email from your credentials file
   - Set them in your `.env` file

### 4. Run the Server

**Development mode:**
```bash
npm run server
```

**Production mode:**
```bash
npm start
```

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and timestamp.

### Volunteer Signup
```
POST /api/volunteer-signup
```

**Request Body:**
```json
{
  "name": "John Doe",
  "address": "123 Main St",
  "town": "Franklin Lakes",
  "zip": "07417",
  "phone": "201-555-0123",
  "tshirtSize": "L",
  "email": "john@example.com",
  "highSchoolYear": "Senior",
  "highSchoolName": "Franklin Lakes High School",
  "yearsVolunteered": "2"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Volunteer application submitted successfully"
}
```

### Athlete Registration
```
POST /api/athlete-signup
```

**Request Body:**
```json
{
  "name": "Jane Smith",
  "age": "12",
  "parentName": "Mary Smith",
  "parentPhone": "201-555-0124",
  "parentEmail": "mary@example.com",
  "specialNeeds": "Autism spectrum disorder",
  "experience": "Beginner tennis player",
  "emergencyContact": "John Smith",
  "emergencyPhone": "201-555-0125"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Athlete registration submitted successfully"
}
```

## Security Features

### Input Validation
- All form inputs are validated using express-validator
- Email format validation
- Phone number format validation
- Length and type restrictions

### Rate Limiting
- 100 requests per 15 minutes per IP address
- Configurable via environment variables

### CORS Protection
- Restricted to specified origins
- Configurable for production environments

### Helmet Security
- Content Security Policy
- XSS protection
- Frame protection
- Other security headers

## Data Storage

All form submissions are automatically stored in Google Sheets with the following structure:

### Volunteers Sheet
- Timestamp
- Type (Volunteer)
- Name
- Address
- Town
- ZIP
- Phone
- T-shirt Size
- Email
- High School Year
- High School Name
- Years Volunteered
- IP Address
- User Agent

### Athletes Sheet
- Timestamp
- Type (Athlete)
- Name
- Age
- Parent Name
- Parent Phone
- Parent Email
- Special Needs
- Experience
- Emergency Contact
- Emergency Phone
- IP Address
- User Agent

## Error Handling

The server includes comprehensive error handling:

- **Validation Errors**: Returns 400 with detailed error messages
- **Server Errors**: Returns 500 with generic error messages
- **Rate Limiting**: Returns 429 when limit exceeded
- **Not Found**: Returns 404 for unknown endpoints

## Logging

Server logs include:
- Successful form submissions (with IP and name)
- Validation errors
- Server errors
- Startup warnings for missing configuration

## Production Deployment

### Environment Variables
Set `NODE_ENV=production` and configure:
- Production CORS origins
- Production Google Sheets credentials
- Production port

### Security Considerations
- Use HTTPS in production
- Regularly rotate service account keys
- Monitor rate limiting and adjust as needed
- Set up proper logging and monitoring

## Troubleshooting

### Common Issues

1. **Google Sheets API Errors**:
   - Verify service account has access to spreadsheet
   - Check API is enabled in Google Cloud Console
   - Verify credentials format

2. **CORS Errors**:
   - Check CORS configuration in production
   - Verify frontend origin matches allowed origins

3. **Rate Limiting**:
   - Adjust rate limit settings if needed
   - Monitor for legitimate high-volume usage

### Debug Mode
Set `LOG_LEVEL=debug` for detailed logging.

## Support

For technical support, contact the development team or refer to the main project README. 