"use client"

import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      title: "ஒலியியல் (Phonology)",
      description:
        "Tamil has a rich phonological system with 12 vowels, 18 consonants, and unique sounds not found in Indo-European languages.",
      icon: "🔊",
      color: 1,
    },
    {
      title: "ஒட்டுநிலை (Agglutinative Structure)",
      description:
        "Words are formed by adding suffixes to express complex ideas, allowing for precise and nuanced expression.",
      icon: "🔗",
      color: 2,
    },
    {
      title: "இருமொழி நிலை (Diglossia)",
      description:
        "Tamil has two distinct forms: literary (செந்தமிழ்) and colloquial (கொடுந்தமிழ்), each with specific contexts of use.",
      icon: "📝",
      color: 3,
    },
    {
      title: "எழுத்து (Script)",
      description:
        "The Tamil script evolved from the Brahmi script and has 12 vowels, 18 consonants, and one special character.",
      icon: "✍️",
      color: 4,
    },
    {
      title: "சொற்களஞ்சியம் (Vocabulary)",
      description:
        "Tamil has preserved many ancient Dravidian words and has developed new terminology through various linguistic processes.",
      icon: "📚",
      color: 5,
    },
    {
      title: "இலக்கியம் (Literature)",
      description:
        "Tamil boasts one of the world's richest literary traditions, with works spanning various genres and time periods.",
      icon: "📜",
      color: 6,
    },
  ]

  return (
    <section id="features" className="section-padding">
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
                <span className="gradient-text-2">Unique Features</span>
              </h2>
              <p className="text-center mb-5 text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                Tamil has several distinctive linguistic characteristics that set it apart from other languages.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {features.map((feature, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`card-custom card-custom-${feature.color} h-100`}
              >
                <div className="d-flex align-items-center mb-4">
                  <div className="feature-icon me-3 fs-2">{feature.icon}</div>
                  <h4 className="mb-0 tamil-text" style={{ fontFamily: "var(--font-subheading)" }}>
                    {feature.title}
                  </h4>
                </div>
                <p className="text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                  {feature.description}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="card-custom py-4 px-4 floating-element">
                <h3 className="gradient-text-3 mb-3" style={{ fontFamily: "var(--font-special)" }}>
                  தமிழ் மொழியின் சிறப்பு
                </h3>
                <p className="text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                  "Tamil is not just a language; it's a living heritage that has evolved over millennia while preserving
                  its classical roots. Its unique features make it one of the most fascinating linguistic systems in the
                  world."
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

