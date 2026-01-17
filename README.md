# Project Lovematch Website

Official website for Project Lovematch, a nonprofit organization that provides tennis sessions for children with developmental challenges.

## About Project Lovematch

Project Lovematch is a nonprofit program that runs each winter from January through March at the Franklin Lakes Racquet Club, where it holds weekly one-hour tennis sessions (4:00–5:00 PM) for ten weeks. The program pairs volunteers with children with developmental challenges—including those with autism, Down syndrome, and other developmental disabilities—to give them the opportunity to learn and enjoy tennis in a supportive, encouraging environment.

The program has been operating for over 30 years, with some athletes participating the entire time.

## Features

- **Home/Landing Page**: Introduction to Project Lovematch with photos and program highlights
- **Calendar Page**: Interactive calendar showing Sunday tennis sessions from January through March
- **About Page**: Mission, history, and leadership team information
- **Volunteer Sign Up**: External Google Forms link for volunteer registration
- **Responsive Design**: Modern, professional interface that works on all devices

## Tech Stack

- **Frontend**: React.js with modern CSS
- **Deployment**: Static site hosting (Render, Netlify, Vercel, etc.)

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd client
   npm install
   ```

2. **Run Development Server**
   ```bash
   cd client
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   cd client
   npm run build
   ```
   This creates an optimized production build in the `client/build` directory.

## Project Structure

```
PLM-Website/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/              # Source code
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   └── assets/       # Images and other assets
│   └── package.json      # Frontend dependencies
├── package.json          # Root package file
└── README.md            # This file
```

## Deployment

This is a static React application that can be deployed to any static hosting service:

- **Render**: Connect your GitHub repository and set the build command to `cd client && npm run build`
- **Netlify**: Connect your repository and set the build directory to `client/build`
- **Vercel**: Connect your repository and it will auto-detect the React app

## Contact

For questions about Project Lovematch:
- **Email**: projectlovematch@gmail.com
- **Phone**: (201) 669-9436
- **Location**: Franklin Lakes Racquet Club

## License

MIT License
