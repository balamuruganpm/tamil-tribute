"use client"

import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import TamilScene from "@/3d/TamilScene"

export default function Hero() {
  const tamilWords = [
    { word: "வணக்கம்", meaning: "Hello" },
    { word: "அன்பு", meaning: "Love" },
    { word: "அறிவு", meaning: "Knowledge" },
    { word: "வாழ்க", meaning: "Live long" },
  ]

  return (
    <section id="home" className="position-relative">
      <div className="hero-canvas">
        <TamilScene />
      </div>
      <Container fluid className="hero-content">
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="display-1 fw-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="gradient-text">தமிழ்</span>
              </h1>
              <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: "var(--font-subheading)" }}>
                <span className="text-white">5000 Years of Heritage</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
              <p className="lead text-white-50 mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Discover the world's oldest living language with a rich literary tradition dating back thousands of
                years. A language that has withstood the test of time.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                {tamilWords.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="card-custom py-2 px-3"
                    style={{ minWidth: "120px" }}
                  >
                    <div
                      className={`gradient-text-${(index % 3) + 1} fw-bold tamil-text`}
                      style={{ fontSize: "1.2rem" }}
                    >
                      {item.word}
                    </div>
                    <div className="text-white-50 small">{item.meaning}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <a href="#history" className="btn btn-lg px-5 py-3 btn-gradient">
                Explore Tamil Heritage
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

