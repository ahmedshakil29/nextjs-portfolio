import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";
import StartDiv from "./StartDiv";
import Qualification from "./Qualification";
import Link from "next/link";

const Work = () => {
  const intro = "// intro..";
  const Better1 = "// Better Coder";
  const Better2 = "// Better Learner";
  const Seeitinaction = "// See it in action";

  return (
    <section id="work">
      <Container>
        {/* <Row> */}
        <StartDiv title="Work" type="section" />
        <Col lg="8" md="8">
          <div className={`${classes.services__container}`}>
            <Qualification
              institute=" Bangochain Labs "
              degree="Full Stack Software Developer "
              year="Jan 2023 – Present"
              des="Contributed as a Full-Stack Software Developer for ARTnBUD, a
            decentralized platform focused on art investments and digital art
            displays. Developed both front-end interfaces and back-end systems,
            ensuring responsive design, efficient server-side logic, and robust
            database management. Prioritized performance optimization,
            scalability, and secure handling of user data to deliver a
            high-quality user experience."
            />
            <br></br>
            <Qualification
              institute="  American International University - Bangladesh (AIUB) "
              degree="Teaching Assistant "
              year="2021"
              des="My work is to Assist the students with their lab tasks and Assist the course teacher in preparing course materials."
            />
            <br></br>
            <Qualification
              institute="American International University - Bangladesh (AIUB)"
              degree="Thesis Research "
              year="2021"
              des="As a BSc degree in CSE, I am proud to have completed a thesis paper on Smart Virtual Assistant for Student Portal(Machine Learning) under the supervision of Dr. Abdullah–Al-Zubair, Assistant Professor & Director, Computer Science (AIUB). 
              My research aimed to using a specific voice command, this system will help the user to get the required information or to access a page in a very short time without memorizing any route. 
              I am excited to share my findings with the wider community. 
          "
            />
            <Link
              style={{ textDecoration: "none" }}
              // className={`${classes.about__link}`}
              href="https://drive.google.com/file/d/1c6GrAfrnMsSTgXtESszRmzy5lIff1JWr/view?usp=share_link"
              target="_blank"
            >
              <h5 className="mb-4 ri-link"> See the paper..</h5>
            </Link>
          </div>
        </Col>

        {/* </Row> */}
      </Container>
    </section>
  );
};

export default Work;
