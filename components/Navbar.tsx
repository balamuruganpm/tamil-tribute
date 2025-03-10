"use client"

import { useState, useEffect } from "react"
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? "py-2" : "py-3"}`}
      variant="dark"
      style={{
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 5px 15px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="d-flex align-items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="gradient-text fw-bold fs-4">தமிழ்</span>
            <span className="ms-2 text-white">Tamil Tribute</span>
          </motion.div>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["home", "history", "features", "culture", "gallery"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Nav.Link href={`#${item}`} className="mx-2 text-white">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

