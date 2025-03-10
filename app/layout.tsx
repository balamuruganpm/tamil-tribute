import type React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"
import { Poppins, Montserrat, Raleway, Roboto_Slab } from "next/font/google"

// Define multiple fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-montserrat",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
})

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-slab",
})

export const metadata = {
  title: "தமிழ் Tribute - 5000 Years of Heritage",
  description:
    "A vibrant 3D tribute to Tamil, one of the world's oldest languages with over 5000 years of rich history and culture.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${raleway.variable} ${roboto_slab.variable}`}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}

