#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🎾 Project Lovematch Website Setup');
console.log('==================================\n');

// Check if Node.js is installed
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
  console.log(`✅ Node.js ${nodeVersion} detected`);
} catch (error) {
  console.error('❌ Node.js is not installed. Please install Node.js 16+ and try again.');
  process.exit(1);
}

// Check if npm is installed
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
  console.log(`✅ npm ${npmVersion} detected`);
} catch (error) {
  console.error('❌ npm is not installed. Please install npm and try again.');
  process.exit(1);
}

console.log('\n📦 Installing dependencies...');

try {
  // Install root dependencies
  console.log('Installing root dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Install client dependencies
  console.log('Installing client dependencies...');
  execSync('cd client && npm install', { stdio: 'inherit' });
  
  console.log('✅ All dependencies installed successfully!');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.log('\n🔧 Creating environment configuration file...');
  
  const envContent = `# Project Lovematch Website Environment Configuration

# Server Configuration
PORT=5000
NODE_ENV=development

# Google Sheets API Configuration
# You'll need to create a Google Cloud Project and enable the Google Sheets API
# Then create a service account and download the credentials

# Option 1: Use environment variables (recommended for production)
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nYour private key here\\n-----END PRIVATE KEY-----"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-here

# Option 2: Use credentials file (for development)
# Place your credentials.json file in the server/ directory
# This file should contain your service account credentials

# CORS Configuration (for production)
# Replace with your actual domain
# ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Security Configuration
# Rate limiting (requests per 15 minutes per IP)
RATE_LIMIT_MAX=100

# Logging
LOG_LEVEL=info
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file');
  console.log('⚠️  Please configure your Google Sheets API credentials in the .env file');
}

console.log('\n🎯 Setup Complete!');
console.log('\nNext steps:');
console.log('1. Configure your Google Sheets API credentials in the .env file');
console.log('2. Create a Google Sheets document and share it with your service account');
console.log('3. Run "npm run dev" to start both frontend and backend');
console.log('\nFor detailed setup instructions, see:');
console.log('- README.md (main project)');
console.log('- server/README.md (backend setup)');
console.log('- env.example (environment configuration)');

console.log('\n🚀 To start development:');
console.log('npm run dev'); 