"use client"

import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Ancient Tamil inscription",
      caption: "பழைய தமிழ் கல்வெட்டு (Ancient Tamil inscription from the 5th century)",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Traditional Tamil manuscript",
      caption: "ஓலைச்சுவடி (Palm leaf manuscript containing Tamil poetry)",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Modern Tamil typography",
      caption: "நவீன தமிழ் எழுத்துரு (Modern Tamil typography and calligraphy)",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Tamil Nadu temple",
      caption: "மீனாட்சி அம்மன் கோயில் (Meenakshi Temple in Madurai, Tamil Nadu)",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Tamil classical dance",
      caption: "பரதநாட்டியம் (Bharatanatyam dancer performing a traditional piece)",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Tamil festival",
      caption: "பொங்கல் விழா (Pongal celebration, an important Tamil harvest festival)",
    },
  ]

  return (
    <section id="gallery" className="section-padding">
      <Container>
        <Row className="mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              ref={ref}
            >
              <h2 className="section-title text-center" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="gradient-text">Visual Journey</span>
              </h2>
              <p className="text-center mb-5 text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                Explore the visual elements of Tamil culture and heritage through these images.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {galleryImages.map((image, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="gallery-item"
              >
                <div className="position-relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-3"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                    }}
                  >
                    <p className="mb-0 small tamil-text">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#"
                className="btn btn-lg px-5 py-3 btn-gradient"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                மேலும் காண்க (Explore More)
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

