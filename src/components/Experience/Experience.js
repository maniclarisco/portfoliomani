import React, { useState, useEffect } from "react"; 
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
    return(
      <Container fluid className="experience-section">
        <Particle />
          <hr style={{color:"white",height:"600px auto",width:"2px",position:"fixed"}}/>
    
          <div style={{color:"white" }} className="experiencehead">
          <p>
              Clarisco Solutions - Blockchain, AI & IoT Software Development Company
          </p>
              <p>Madurai – Blockchain Developer</p>
              <p>Feb 2022 - Current</p>
              <p>
              Description:
              </p>
              <p className="me-lg-3">
                  1 – Worked to create a pancakeswap lottery based smart contract .
              </p>
              <p>
                  2 – Vbit is a decentralized mlm platform. In this project we develop a Staking based smart
                contract such as Time lock and MLM based Time Lock.
              </p>
              <p>
                  3 - Bnbmoon is a decentralized platform. This project is based on MLM .
              </p>
              <p>
                  4 - Wyzth is a decentralized exchange platform Where users can swap tokens on wyzth
              chain and bridge their tokens on Wyth-usdt to tron-usdt.
              </p>
              
              <p> Role: Blockchain Developer</p>
              <p>Language: Solidity, React JS, Express js, Node js, MongoDB</p>
              <p>Tools: web3 JS , Javascript, Bootstrap 5, HTML 5, CSS</p>
              <p>Development/IDE Tools : REMIX IDE</p>
          </div>
          <div style={{  color:"white" }} className="experiencehead">
            <p>Clarisco Solutions - Blockchain, AI & IoT Software Development Company</p>
            <p>Madurai – MEAN Stack Developer</p>
            <p>Feb 2021 – Feb 2022</p>
            <p>Description:</p>
            <p>1- As I worked Angular developer in Fibit Pro Admin panel to add or change the crypto tokens.</p>
            <p>2- As I worked Angular developer in BitPro Admin panel and this application is a centralized
            platform like binance.</p>
            <p>Role: MEAN Stack Developer</p>
            <p>Language: Angular 14, Express js, Node js, MongoDB</p>
            <p>Tools: web3 JS , Javascript, Typescript, Bootstrap 5, HTML 5</p>
            <p>Development/IDE Tools: VS CODE</p>
          </div>
      </Container>
    );
}

export default Experience;