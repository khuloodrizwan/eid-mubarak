// app/layout.js
// Yeh poore website ka wrapper hai — fonts, title, metadata sab yahan set hota hai

import { Cinzel, Poppins } from 'next/font/google'
import './globals.css'

// Cinzel font — headings ke liye (Islamic/royal feel)
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cinzel',
})

// Poppins font — body text ke liye (clean & modern)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

// Website ka metadata — tab mein jo title aur description dikhta hai
export const metadata = {
  title: 'Eid Mubarak 🌙 | From Khulood',
  description: 'Wishing you unlimited biryani and maximum Eidi this Eid!',
  openGraph: {
    title: 'Eid Mubarak 🌙',
    description: 'May your biryani be unlimited and your Eidi be maximum!',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${poppins.variable}`}>
      <body className="bg-[#0a0a1a] text-white overflow-x-hidden">
        {/* children matlab jo bhi page yahan render hoga */}
        {children}
      </body>
    </html>
  )
}