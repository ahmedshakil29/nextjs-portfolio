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
              <h3 className="mt-3 mb-3">Hello, 👋</h3>
              <h2 className="mt-3 mb-3">I&apos;m Taraqul Islam Rony</h2>
              <h5 className="mb-4">I&apos;m a Full Stack Software Engineer & Die Hard Gamer.</h5>
              {/* <h5 className="mb-4">Full Stack Software Engineer</h5> */}
              <p>
              
              </p>
              <div className="mt-5">
                {/* <button className="primary__btn"> */}
                  <Link href="https://drive.google.com/file/d/13ouRQsGso47TsXsWJZdrEuQ3RxB_QJ5-/view?usp=share_link" target="_blank" style={{textDecoration:"none", color:"#01d293", fontSize:"24px", fontWeight:"500"}}>{"Resume( ) 📃"}</Link>
                {/* </button> */}

                {/* <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button> */}
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              {/* <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div> */}

              {/* <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
