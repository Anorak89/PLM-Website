# Project Lovematch Website

Official website for Project Lovematch, a nonprofit organization that provides tennis sessions for mentally challenged children.

## About Project Lovematch

Project Lovematch is a nonprofit program that runs each winter from January through March at the Franklin Lakes Racquet Club, where it holds weekly one-hour tennis sessions (4:00–5:00 pm) for ten weeks. The program pairs volunteers with mentally challenged children—including those with autism, Down syndrome, and other developmental challenges—to give them the opportunity to learn and enjoy tennis in a supportive, encouraging environment.

## Features

- **Home/Landing Page**: Introduction to Project Lovematch with photos
- **Calendar Page**: Interactive calendar showing sessions and events
- **About Page**: History and leadership team information
- **Sign Up Forms**: Secure forms for volunteers and athletes
- **Responsive Design**: Modern, professional interface

## Tech Stack

- **Frontend**: React.js with modern CSS
- **Backend**: Node.js with Express
- **Data Storage**: Google Sheets API integration
- **Security**: Helmet, rate limiting, input validation

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm run install-all
   ```

2. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your Google Sheets API credentials:
     ```
     GOOGLE_SHEETS_PRIVATE_KEY=your_private_key
     GOOGLE_SHEETS_CLIENT_EMAIL=your_client_email
     GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
     ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
PLM-Website/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── public/                 # Static assets
├── package.json           # Main package file
└── README.md             # This file
```

## Contact

For questions about Project Lovematch:
- **Joe Castaneda, Program Director**
- Email: projectlovematch@yahoo.com
- Phone: (201) 669-9436

## License

MIT License 