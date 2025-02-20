import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import EndDiv from "./EndDiv";
import StartDiv from "./StartDiv";

const Tools = () => {
  const tools = "// i like to use these favorite tools right now...";
  const tool =
    "⚡ Building responsive web front-end using React.\n" +
    "⚡ Creating application back-end in Node.js.";

  return (
    <section id="tools">
      <Container>
        <StartDiv title="Tools" type="section" />
        <Row>
          <h5
            className="mb-4"
            style={{ color: "#808dad", paddingBottom: "40px" }}
          >
            {tool}
          </h5>

          <Col lg="4" md="4" className={`${classes.testimonial__back}`}>
            <h4 className="mb-4" style={{ color: "#01d293" }}>
              Back-End
            </h4>
            <h5 className="mb-4" style={{ color: "White" }}>
              NodeJS
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              ExpressJS
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              .Net
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              MongoDB
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Microsoft SQL Server
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              MySQL/MariaDB
            </h5>
          </Col>
          <Col lg="4" md="4" className={`${classes.testimonial__font}`}>
            <h4 className="mb-4" style={{ color: "#01d293" }}>
              Front-End
            </h4>
            <h5 className="mb-4" style={{ color: "White" }}>
              ReactJS
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              NextJS
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Redux
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Bootstrap
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              CSS
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Tailwind
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              HTML
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Material UI{" "}
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Ant Design
            </h5>
          </Col>

          <Col lg="4" md="4" className={`${classes.testimonial__other}`}>
            <h4 className="mb-4" style={{ color: "#01d293" }}>
              Others
            </h4>
            <h5 className="mb-4" style={{ color: "White" }}>
              TypeScripts
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              IPFS
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Open Zeppelin
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Alchemy
            </h5>
            <h5 className="mb-4" style={{ color: "White" }}>
              Postman
            </h5>
          </Col>
        </Row>

        {/* <EndDiv type="section" /> */}
      </Container>
    </section>
  );
};

export default Tools;
