import type { Metadata } from 'next'

import '../styles/index.scss';

export const metadata: Metadata = {
  title: 'Aymane Taoufyq - Web Developer Portfolio',
  description: 'Explore the web development work of Aymane Taoufyq, a passionate developer with a focus on front-end and back-end technologies. Discover a showcase of projects, skills, and expertise.',
  keywords: 'web development, portfolio, front-end, back-end, JavaScript, React, Node.js, projects',
  authors: [{ name: 'Aymane Taoufyq' ,url: 'aymane-portfolio.me'}],
  applicationName: 'Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
