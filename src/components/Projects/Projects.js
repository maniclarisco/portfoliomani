import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vbitcake from "../../Assets/vbitcake.png";
import vbitstake from "../../Assets/vastake.png";
import salespad from "../../Assets/salespad.png";
import proplex from "../../Assets/proplex.png";
import swap from "../../Assets/dswap.png";
import lottery from "../../Assets/lottery.png";

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
              description="This is a direct exchange of one token for another on a blockchain. This can occur on decentralized exchanges (DEXs) like Uniswap, where users provide liquidity and can trade tokens directly from their wallets."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vbitcake}
              isBlog={false}
              title="vbitcake"
              description="Multi-Level Marketing (MLM) is a business model where individuals earn commissions not only for selling products but also for recruiting new members into the business."
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lottery}
              isBlog={false}
              title="lottery"
              description="Similar to traditional lotteries, participants buy tickets, often using cryptocurrencies, for a chance to win various prizes. The drawing can be conducted through smart contracts, ensuring transparency and fairness."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vbitstake}
              isBlog={false}
              title="vbitstake"
              description="Staking using crypto tokens involves locking up your tokens in a blockchain network.Staking rewards are typically distributed at regular intervals (daily, weekly, etc.) based on the amount staked and the network’s rules."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salespad}
              isBlog={false}
              title="salespad"
              description="A crypto bridge enables interoperability between different blockchain networks, allowing users to move assets seamlessly from one chain to another. This can include transferring tokens, NFTs, or other assets."
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proplex}
              isBlog={false}
              title="propelx"
              description="This is another method of mlm based smart contract applications like forsage.io"             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;