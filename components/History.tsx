"use client"

import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function History() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineEvents = [
    {
      year: "300 BCE",
      title: "சங்க இலக்கியம் (Sangam Literature)",
      description:
        "The earliest Tamil literature, known as Sangam literature, dates back to this period, showcasing a sophisticated literary tradition.",
    },
    {
      year: "200 BCE",
      title: "தொல்காப்பியம் (Tolkāppiyam)",
      description: "The oldest extant Tamil grammar text, establishing linguistic rules and poetic conventions.",
    },
    {
      year: "1st-5th Century CE",
      title: "திருக்குறள் (Tirukkural)",
      description:
        "Composed by Thiruvalluvar, this ethical masterpiece contains 1,330 couplets covering virtue, wealth, and love.",
    },
    {
      year: "6th-9th Century CE",
      title: "பக்தி இயக்கம் (Bhakti Movement)",
      description: "Tamil devotional poetry flourished with works like Tevaram and Divya Prabandham.",
    },
    {
      year: "12th Century CE",
      title: "கம்பராமாயணம் (Kambaramayanam)",
      description: "Kambar's Tamil adaptation of the Ramayana epic, showcasing the language's literary flexibility.",
    },
  ]

  const tamilQuotes = [
    {
      tamil: "யாதும் ஊரே யாவரும் கேளிர்",
      english: "Every place is our hometown, everyone is our kin",
      source: "Purananuru (poem 192)",
    },
    {
      tamil: "கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக",
      english: "Learn thoroughly whatever you learn, and let your conduct be worthy of your learning",
      source: "Thirukkural (391)",
    },
  ]

  return (
    <section
      id="history"
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
                <span className="gradient-text">Ancient Origins</span>
              </h2>
              <p className="text-center mb-5 text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                Tamil is one of the longest-surviving classical languages in the world, with a literary tradition
                spanning over two millennia.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="card-custom card-custom-1 h-100">
                <h3 className="mb-4 gradient-text" style={{ fontFamily: "var(--font-subheading)" }}>
                  5000 Years of Evolution
                </h3>
                <p style={{ fontFamily: "var(--font-body)" }}>
                  Tamil belongs to the Dravidian language family and is primarily spoken in Tamil Nadu, India, and Sri
                  Lanka. Archaeological evidence, including inscriptions on pottery, dates Tamil writing back to at
                  least the 5th century BCE.
                </p>
                <p className="mt-3" style={{ fontFamily: "var(--font-body)" }}>
                  The language has been described as{" "}
                  <span className="gradient-text-2">
                    "the only language of contemporary India which is recognizably continuous with a classical past"
                  </span>
                  and has a continuous literary tradition spanning over 2000 years.
                </p>

                {tamilQuotes.map((quote, index) => (
                  <div key={index} className="tamil-quote mt-4">
                    <p className="mb-1 tamil-text fw-bold gradient-text-3" style={{ fontSize: "1.2rem" }}>
                      {quote.tamil}
                    </p>
                    <p className="fst-italic text-white-50">"{quote.english}"</p>
                    <p className="small text-end text-white-50">— {quote.source}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <div>
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <h4 className="gradient-text" style={{ fontFamily: "var(--font-special)" }}>
                    {event.year}
                  </h4>
                  <h5 className="tamil-text">{event.title}</h5>
                  <p className="text-white-50" style={{ fontFamily: "var(--font-body)" }}>
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

