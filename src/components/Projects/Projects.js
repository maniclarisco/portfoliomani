import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vbitcake from "../../Assets/vbitcake.png";
import vbitstake from "../../Assets/vastake.png";
import salespad from "../../Assets/salespad.png";
import proplex from "../../Assets/proplex.png";
import swap from "../../Assets/dswap.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swap}
              isBlog={false}
              title="swap"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vbitcake}
              isBlog={false}
              title="vbitcake"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vbitstake}
              isBlog={false}
              title="vbitstake"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salespad}
              isBlog={false}
              title="salespad"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proplex}
              isBlog={false}
              title="propelx"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
