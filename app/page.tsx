"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import History from "@/components/History"
import Features from "@/components/Features"
import Culture from "@/components/Culture"
import Gallery from "@/components/Gallery"
import Footer from "@/components/Footer"

export default function Home() {
  useEffect(() => {
    // Load Bootstrap JS
    import("bootstrap/dist/js/bootstrap")
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <History />
      <Features />
      <Culture />
      <Gallery />
      <Footer />
    </main>
  )
}

