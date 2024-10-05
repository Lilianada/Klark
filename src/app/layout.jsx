import { getEvents } from '@/data'
import '@/styles/tailwind.css'

import { ApplicationLayout } from './application-layout'

export const metadata = {
  title: {
    template: 'Klark',
    default: 'Klark',
  },
  description: 'Klark for small businesses is a modern business management platform for companies of small sizes.',
}

export default async function RootLayout({ children }) {
  let events = await getEvents()

  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

     
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Moderustic:wght@300..800&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />

      </head>
      <body>
        <ApplicationLayout events={events}>{children}</ApplicationLayout>
      </body>
    </html>
  )
}
