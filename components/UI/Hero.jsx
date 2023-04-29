import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              {/* <SectionSubtitle subtitle="Hello" /> */}
              <h3 className="mt-3 mb-3">Hi, 👋</h3>
              <h2 className="mt-3 mb-3">I&apos;m Shakil Ahmed</h2>
              <h5 className="mb-4">
                {/* I&apos;m a Full Stack Software Engineer & Die Hard Gamer. */}
                Full Stack Developer | Building WEB 3.0 App | Ethereum | NodeJS
                | Smart Contract Auditor
              </h5>
              <p></p>
              <div className="mt-5">
                {/* <Link
                  href="https://drive.google.com/file/d/13ouRQsGso47TsXsWJZdrEuQ3RxB_QJ5-/view?usp=share_link"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#01d293",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  {"Resume 📃"}
                </Link> */}
                <a
                  // className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                  style={{
                    textDecoration: "none",
                    color: "#01d293",
                    fontSize: "25px",
                    fontWeight: "500",
                  }}
                  href="./file/CV_of_Shakil_Ahmed.pdf"
                  download
                >
                  Resume 📃
                </a>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
