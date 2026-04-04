# Maritime Radio Trainer - ROC(M) Certification Study Guide

A comprehensive Next.js 14 (App Router) training website for the Canadian Maritime Radio Course (ROC(M) certification).

## Features

- **9 Comprehensive Study Sections** covering all exam topics
- **92 Practice Quiz Questions** with detailed explanations
- **Phonetic Alphabet & Numbers Trainer** for communication protocol
- **Progress Tracking** using browser localStorage
- **Responsive Design** optimized for all devices
- **Clean, Accessible UI** using Tailwind CSS

## Project Structure

```
maritime-radio-trainer/
├── app/
│   ├── globals.css          # Global styles with maritime theme
│   ├── layout.js            # Root layout with Tailwind CDN
│   └── page.js              # Main SPA component
├── lib/
│   └── quizData.js          # All quiz questions and study content
├── public/                  # Static assets (if needed)
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
├── jsconfig.json            # Path aliases
└── .gitignore              # Git exclusions
```

## Study Sections

1. Maritime Mobile Service
2. Procedures
3. GMDSS Overview
4. DSC Radios
5. Routine Communications
6. Distress Communications
7. Urgency Communications
8. Safety Communications
9. Other GMDSS Equipment

## Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click - no configuration needed!

The project is optimized for Vercel deployment with:
- Zero configuration required
- Automatic builds on push
- Edge functions support
- Environment variables support

## Features Implemented

### Study Guide
- Browse all 9 exam sections with detailed study material
- Each section organized by key topics and concepts
- Clear formatting with consistent styling

### Quiz Mode
- Practice questions with multiple choice answers
- Immediate feedback with explanations
- Progress tracking with score history
- Navigate between questions freely

### Phonetic Trainer
- Complete phonetic alphabet (A-Z)
- Number pronunciation (0-9)
- Interactive translation tools
- Essential for radio communication protocols

### Progress Dashboard
- Track quiz scores across all sections
- Visual progress bars
- Persistent storage using localStorage
- Review weak areas

## Technical Stack

- **Framework:** Next.js 14 with App Router
- **React:** 18.3.1 with hooks
- **Styling:** Tailwind CSS (via CDN)
- **Storage:** Browser localStorage API
- **Architecture:** Single-Page Application (SPA) with client-side routing

## Data Structure

All quiz data, study content, and reference materials are stored in `/lib/quizData.js`:
- 92 questions across 9 sections
- Study content blocks per section
- Phonetic alphabet reference
- Distress call procedures
- Numbers pronunciation guide

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized bundle size (~15.4 kB page)
- Fast initial load (~103 kB First Load JS)
- Client-side state management (no backend required)
- Smooth animations and transitions

## License

Educational material for ROC(M) certification study.

## Support

For issues or questions about the application, please refer to the official ROC(M) certification guidelines from the Canadian Radio-television and Telecommunications Commission (CRTC).
