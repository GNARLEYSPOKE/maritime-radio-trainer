import './globals.css';

export const metadata = {
  title: 'Maritime Radio Trainer - ROC(M) Certification Study Guide',
  description: 'Comprehensive study guide and quiz platform for Canadian Maritime Radio Course (ROC(M) certification). Practice exams, phonetic trainer, and distress call procedures.',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
