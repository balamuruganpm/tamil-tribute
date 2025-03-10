"use client"

import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Culture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const culturalAspects = [
    {
      title: "பரதநாட்டியம் (Classical Dance)",
      description:
        "Bharatanatyam, one of the oldest classical dance forms, originated in Tamil Nadu and tells stories through precise movements and expressions.",
      image: "/placeholder.svg?height=300&width=400",
      color: "gradient-text",
    },
    {
      title: "கோயில் கட்டிடக்கலை (Temple Architecture)",
      description:
        "Tamil temples showcase distinctive Dravidian architecture with towering gopurams (gateways) and intricate stone carvings.",
      image: "/placeholder.svg?height=300&width=400",
      color: "gradient-text-2",
    },
    {
      title: "கர்நாடக இசை (Music Tradition)",
      description: "Carnatic music, with its complex ragas and talas, has flourished in Tamil culture for centuries.",
      image: "/placeholder.svg?height=300&width=400",
      color: "gradient-text-3",
    },
  ]

  const tamilFestivals = [
    { name: "பொங்கல் (Pongal)", description: "Harvest festival celebrating the sun, earth, and cattle" },
    { name: "தீபாவளி (Diwali)", description: "Festival of lights celebrating the triumph of light over darkness" },
    { name: "நவராத்திரி (Navaratri)", description: "Nine-night festival honoring the divine feminine" },
  ]

  return (
    <section
      id="culture"
      className="section-padding"
      style={{ background: "linear-gradient(to bottom, #0d0d0d, #151515)" }}
    >
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
                <span className="gradient-text-3">Cultural Heritage</span>
              </h2>
              <p className="text-center mb-5 text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                Tamil language is inseparable from its rich cultural traditions that have evolved over millennia.
              </p>
            </motion.div>
          </Col>
        </Row>

        {culturalAspects.map((aspect, index) => (
          <Row key={index} className={`align-items-center mb-5 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="position-relative" style={{ borderRadius: "15px", overflow: "hidden" }}>
                  <Image
                    src={aspect.image || "/placeholder.svg"}
                    alt={aspect.title}
                    width={600}
                    height={400}
                    className="w-100"
                    style={{ objectFit: "cover", borderRadius: "15px" }}
                  />
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className={`card-custom card-custom-${index + 1}`}>
                  <h3 className={`${aspect.color} mb-4 tamil-text`} style={{ fontFamily: "var(--font-subheading)" }}>
                    {aspect.title}
                  </h3>
                  <p className="text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                    {aspect.description}
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        ))}

        <Row className="mt-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="card-custom text-center">
                <h3 className="gradient-text mb-4" style={{ fontFamily: "var(--font-special)" }}>
                  Tamil Festivals
                </h3>
                <Row className="justify-content-center">
                  {tamilFestivals.map((festival, index) => (
                    <Col md={4} key={index} className="mb-3">
                      <div className={`card-custom card-custom-${index + 1} h-100`}>
                        <h5 className="tamil-text mb-2">{festival.name}</h5>
                        <p className="text-white-50 small">{festival.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
                <div className="mt-4">
                  <h4 className="gradient-text-2 mb-3" style={{ fontFamily: "var(--font-subheading)" }}>
                    Global Tamil Community
                  </h4>
                  <p className="text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                    Today, over 75 million people speak Tamil worldwide, with significant diaspora communities in
                    Malaysia, Singapore, South Africa, Mauritius, and Western countries. These communities continue to
                    preserve and celebrate Tamil language and culture through festivals, arts, and educational
                    initiatives.
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

