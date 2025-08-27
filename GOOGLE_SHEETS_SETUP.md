# Google Sheets Setup Guide for Project Lovematch

This guide will walk you through setting up Google Sheets integration for the Project Lovematch website forms.

## Prerequisites

- A Google account
- Basic familiarity with Google Cloud Console

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" at the top of the page
3. Click "New Project"
4. Enter a project name (e.g., "Project Lovematch Website")
5. Click "Create"

## Step 2: Enable the Google Sheets API

1. In your new project, go to the [APIs & Services > Library](https://console.cloud.google.com/apis/library)
2. Search for "Google Sheets API"
3. Click on "Google Sheets API"
4. Click "Enable"

## Step 3: Create a Service Account

1. Go to [IAM & Admin > Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Click "Create Service Account"
3. Enter a service account name (e.g., "project-lovematch-api")
4. Enter a description (e.g., "Service account for Project Lovematch website forms")
5. Click "Create and Continue"
6. For roles, select "Editor" (this gives access to read/write Google Sheets)
7. Click "Continue"
8. Click "Done"

## Step 4: Generate Service Account Key

1. Click on your newly created service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Click "Create"
6. The JSON file will download automatically - keep this safe!

## Step 5: Set Up Google Sheets

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Project Lovematch Registrations" (or similar)
4. Create two sheets:
   - **Volunteers** (for volunteer applications)
   - **Athletes** (for athlete registrations)

### Volunteers Sheet Headers
Set up the first row with these headers:
```
A: Timestamp | B: Type | C: Name | D: Address | E: Town | F: ZIP | G: Phone | H: T-Shirt Size | I: Email | J: High School Year | K: High School Name | L: Years Volunteered | M: IP Address | N: User Agent
```

### Athletes Sheet Headers
Set up the first row with these headers:
```
A: Timestamp | B: Type | C: Name | D: Age | E: Parent Name | F: Parent Phone | G: Parent Email | H: Special Needs | I: Experience | J: Emergency Contact | K: Emergency Phone | L: IP Address | M: User Agent
```

## Step 6: Share the Spreadsheet

1. In your Google Sheets document, click "Share" (top right)
2. Add your service account email (found in the JSON file under `client_email`)
3. Give it "Editor" permissions
4. Uncheck "Notify people" (optional)
5. Click "Share"

## Step 7: Get the Spreadsheet ID

1. Look at your Google Sheets URL
2. It will look like: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
3. The spreadsheet ID is the long string between `/d/` and `/edit`
4. In this example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Step 8: Configure Your Environment

### Option A: Environment Variables (Recommended)

1. Copy your `.env` file or create one from `env.example`
2. Add your credentials:

```bash
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-here
```

**Important**: For the private key:
- Copy the entire private key from your JSON file
- Replace actual newlines with `\n`
- Keep the quotes around the entire key

### Option B: Credentials File (Development Only)

1. Place your downloaded JSON file in the `server/` directory
2. Rename it to `credentials.json`
3. Make sure it's in your `.gitignore` file

## Step 9: Test the Integration

1. Start your server: `npm run server`
2. Start your client: `npm run client` (in another terminal)
3. Go to the signup page and submit a test form
4. Check your Google Sheets to see if the data appears

## Troubleshooting

### Common Issues

**"Invalid private key" error:**
- Make sure you've replaced actual newlines with `\n`
- Verify the key starts with `-----BEGIN PRIVATE KEY-----`
- Check that the entire key is enclosed in quotes

**"Access denied" error:**
- Verify the service account email has Editor access to the spreadsheet
- Check that the spreadsheet ID is correct
- Ensure the Google Sheets API is enabled

**"Spreadsheet not found" error:**
- Double-check the spreadsheet ID from the URL
- Verify the spreadsheet exists and is accessible
- Make sure you're using the correct Google account

**"Quota exceeded" error:**
- Google Sheets API has quotas for free accounts
- Consider upgrading to a paid Google Workspace account for higher limits
- Monitor your usage in Google Cloud Console

### Testing the API

You can test the API endpoints directly:

```bash
# Test volunteer signup
curl -X POST http://localhost:5000/api/volunteer-signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "address": "123 Test St",
    "town": "Test Town",
    "zip": "12345",
    "phone": "123-456-7890",
    "tshirtSize": "M",
    "email": "test@example.com"
  }'

# Test athlete signup
curl -X POST http://localhost:5000/api/athlete-signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Athlete",
    "age": "12",
    "parentName": "Test Parent",
    "parentPhone": "123-456-7890",
    "parentEmail": "parent@example.com",
    "emergencyContact": "Test Emergency",
    "emergencyPhone": "123-456-7890"
  }'
```

## Security Best Practices

1. **Never commit credentials to version control**
2. **Use environment variables in production**
3. **Regularly rotate service account keys**
4. **Limit service account permissions to only what's needed**
5. **Monitor API usage and set up alerts**
6. **Use HTTPS in production**

## Production Considerations

1. **Set up proper logging and monitoring**
2. **Configure CORS for your production domain**
3. **Set up rate limiting appropriate for your traffic**
4. **Use a production Google Cloud project**
5. **Consider setting up backup/archival for old data**

## Support

If you encounter issues:
1. Check the server logs for detailed error messages
2. Verify all configuration steps were completed
3. Test with the curl commands above
4. Check Google Cloud Console for API usage and errors
5. Refer to the main README and server README for additional help 