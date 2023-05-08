import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

// import img01 from "../../public/images/img-01.jpg";
// import img02 from "../../public/images/img-02.jpg";
// import img03 from "../../public/images/img-03.jpg";
// import img04 from "../../public/images/hero.jpg";

import classes from "../../styles/about.module.css";
import StartDiv from "./StartDiv";
import EndDiv from "./EndDiv";
import Qualification from "./Qualification";

const About = () => {
  const myself = "// About myself";
  const moreDetails = "// Keep reading for more details... ⬇️";
  const Seeitinaction = "// See it in action";
  return (
    <section id="about">
      <Container>
        <StartDiv title="About" type="section" />
        <Row>
          {/* <Col lg="6" className={`${classes.about__content}`}> */}
          {/* <SectionSubtitle subtitle="About me" /> */}
          <h5 className="mb-4" style={{ color: "#808dad" }}>
            {myself}
          </h5>
          {/* <h3 className="mt-4">I&apos;m here</h3>
          <h3 className="mb-4">to help your next project</h3> */}
          <h5 className={`${classes.about__self}`}>
            Recent computer science and engineering graduate from American
            International University Bangladesh (AIUB) with good academic
            standing and strong professional experience. I have developed my
            abilities in software testing and web development throughout the
            Computer Science program. I have the ability to prioritize tasks and
            manage projects expertly. I am a capable and reliable
            problem-solver.
          </h5>
          <h5 className="mb-4" style={{ color: "#808dad" }}>
            {moreDetails}
          </h5>
          <Qualification
            institute="American International University - Bangladesh (AIUB)"
            degree="Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)"
            year="2017 - 2021"
            des=" CGPA 3.71 out of 4.00 and "
          />
          <Qualification
            institute="Govt. Azizul Haque College Bogura"
            degree="Higher Secondary Certificate (HSC)"
            year="2013 - 2015"
            des="GPA: 4.00 out of 5.00"
          />
          <Qualification
            institute="Sariakandi Govt. High School"
            degree="Secondary School Certificate (SSC)"
            year="2008-2013"
            des="GPA: 5.00 out of 5.00"
          />
          {/* <div className="mt-5">
            <button className="primary__btn">
              <Link href="/#portfolio" scroll={false}>
                My Portfolio
              </Link>
            </button>
          </div> */}
        </Row>
        {/* <EndDiv type="section" /> */}
      </Container>
    </section>
  );
};

export default About;
