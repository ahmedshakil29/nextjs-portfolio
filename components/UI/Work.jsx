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
              des="Obtained the BSc degree with CGPA 3.60 out of 4.00 and 
            Completed my thesis with the topic “Smart Virtual Assistant for Student Portal (Machine Learning)” 
            under the supervision of Dr. Abdullah – Al-Zubair, Assistant Professor."
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
