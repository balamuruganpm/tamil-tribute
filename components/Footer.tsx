"use client"

import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="gradient-text mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                தமிழ் <span className="text-white">Tamil Tribute</span>
              </h3>
              <p className="text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                Celebrating 5000 years of Tamil language, literature, and culture. A tribute to one of the world's
                oldest and richest linguistic traditions.
              </p>
              <p className="tamil-text mt-3 gradient-text-2">"யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்"</p>
              <p className="text-white-50 small fst-italic">
                "Among all the languages we know, we have not seen any as sweet as Tamil"
              </p>
            </motion.div>
          </Col>
          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="text-white mb-4" style={{ fontFamily: "var(--font-subheading)" }}>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                {[
                  { en: "Home", ta: "முகப்பு" },
                  { en: "History", ta: "வரலாறு" },
                  { en: "Features", ta: "சிறப்பியல்புகள்" },
                  { en: "Culture", ta: "கலாச்சாரம்" },
                  { en: "Gallery", ta: "காட்சியகம்" },
                ].map((item, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={`#${item.en.toLowerCase()}`}
                      className="text-white-50 text-decoration-none hover-opacity-75"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="tamil-text">{item.ta}</span> - {item.en}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h5 className="text-white mb-4" style={{ fontFamily: "var(--font-subheading)" }}>
                Connect With Us
              </h5>
              <div className="d-flex gap-3 mb-4">
                {["facebook", "twitter", "instagram", "youtube"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white-50 fs-5 text-decoration-none hover-opacity-75"
                    aria-label={social}
                  >
                    <i className={`bi bi-${social}`}></i>
                  </a>
                ))}
              </div>
              <p className="text-white-50 mb-1" style={{ fontFamily: "var(--font-body)" }}>
                <i className="bi bi-envelope me-2"></i> contact@tamiltribute.com
              </p>
              <p className="text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                <i className="bi bi-geo-alt me-2"></i> Chennai, Tamil Nadu, India
              </p>
            </motion.div>
          </Col>
        </Row>
        <Row className="mt-5 pt-4 border-top border-secondary">
          <Col className="text-center">
            <p className="text-white-50 mb-0" style={{ fontFamily: "var(--font-body)" }}>
              &copy; {new Date().getFullYear()} Tamil Tribute. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

