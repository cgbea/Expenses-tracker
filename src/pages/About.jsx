import React from "react";
import graph from "../assets/graph-up.png";
import wallet from "../assets/wallet.png";
import "./About.css";
import github from "../assets/github-mark.png";
import linkedin from "../assets/LinkedIn_icon.png";

function About() {
  return (
    <div className="container">
      <h1>About</h1>
      <div className="row">
        <div className="col-md-9 about-text">
          <div className="px-1" style={{ textAlign: "left" }}>
            <h2>Our Story</h2>
            <p>
              <b>SpendSense</b> was born out of a desire to empower users to
              take charge of their spending. The app encourages users to spend
              consciously and record their expenses against their income. Users
              can break their balance down by outgoing and incoming payments,
              and track their balance over time.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <img
            id="graph"
            src={graph}
            alt="upwards graph"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-3">
          <img id="wallet" src={wallet} alt="wallet" className="img-fluid" />
        </div>
        <div className="col-md-9">
          <div className="px-1" style={{ textAlign: "left" }}>
            <h2>Who we are</h2>
            <p>
              <b>SpendSense</b> was created by a passionate team of developers,
              from a mix of people-centric, project-oriented and techinical
              backgrounds. We wanted to create a simple, easy-to-use front-end
              app, that would bring a practical difference to people's lives.
            </p>
          </div>
        </div>
        <div className="row py-3" id="socials">
          <div className="col-sm-12">
            <h2>Meet the team</h2>
          </div>
          <div className="col-sm px-1">
            <div
              className="card w-100 fw-bolder"
              style={{ padding: "0", textAlign: "center" }}
            >
              <div>Oleksandr Khomych</div>
              <div id="icons">
                <a
                  className="p-2"
                  href="https://github.com/Khomych1004"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <a
                  className="p-2"
                  href="https://www.linkedin.com/in/o-khomych/"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm px-1">
            <div
              className="card w-100 fw-bolder"
              style={{ padding: "0", textAlign: "center" }}
            >
              <div>Julio Cesar Marcondes
              </div>
              <div id="icons">
                <a
                  className="p-2"
                  href="https://github.com/jcesarmarcondes"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <a
                  className="p-2"
                  href="https://www.linkedin.com/in/jcesarmarcondes/"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm px-1">
            <div
              className="card w-100 fw-bolder"
              style={{ padding: "0", textAlign: "center" }}
            >
              <div>Emily Kent
              </div>
              <div id="icons">
                <a
                  className="p-2"
                  href="https://github.com/Embow24"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <a
                  className="p-2"
                  href="https://www.linkedin.com/in/emily-kent-30b3912a3/"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm px-1 fw-bolder">
            <div
              className="card w-100"
              style={{ padding: "0", textAlign: "center" }}
            >
              <div>Joy Onugha
              </div>
              <div id="icons">
                <a
                  className="p-2"
                  href="https://github.com/Joyonugha"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <a
                  className="p-2"
                  href="https://www.linkedin.com/in/joy-onugha-807892271/"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm px-1 fw-bolder">
            <div
              className="card w-100"
              style={{ padding: "0", textAlign: "center" }}
            >
              <div>Catherine Beagent{" "}
              </div>
              <div id="icons">
                <a
                  className="p-2"
                  href="https://github.com/cgbea"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <a
                  className="p-2"
                  href="https://www.linkedin.com/in/catherine-beagent/"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row testimonials-row py-4"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        <div className="col">
          <div
            className="testimonials-container"
            style={{ display: "inline-block" }}
          >
            <div
              className="testimonial-card"
              style={{
                maxWidth: "450px",
                height: "auto",
                wordWrap: "break-word",
                display: "inline-block",
                marginRight: "10px",
                backgroundColor: "#f0f0f0",
                padding: "20px",
              }}
            >
              <p>
                "I've never felt more in control of my finances!<br></br> Thanks
                to this app, I can now save for my dream holiday."
              </p>
              <p style={{ textAlign: "right", fontStyle: "italic" }}>
                - B. Thrifty, London{" "}
              </p>
            </div>
            <div
              className="testimonial-card"
              style={{
                maxWidth: "450px",
                height: "auto",
                wordWrap: "break-word",
                display: "inline-block",
                marginRight: "10px",
                backgroundColor: "#f0f0f0",
                padding: "20px",
              }}
            >
              <p>
                "It's changed my spending habits so much.<br></br>I didn't
                realise how much I was wasting on small things!"
              </p>
              <p style={{ textAlign: "right", fontStyle: "italic" }}>
                - Penny Pincher, Manchester
              </p>
            </div>
            <div
              className="testimonial-card"
              style={{
                maxWidth: "450px",
                height: "auto",
                wordWrap: "break-word",
                display: "inline-block",
                marginRight: "10px",
                backgroundColor: "#f0f0f0",
                padding: "20px",
              }}
            >
              <p>
                "I've recommended it to all my friends.<br></br>I feel much more
                conscious about saving money now."
              </p>
              <p style={{ textAlign: "right", fontStyle: "italic" }}>
                Bill Payer, Hull
              </p>
            </div>
            <div
              className="testimonial-card"
              style={{
                width: "450px",
                display: "inline-block",
                marginRight: "10px",
                backgroundColor: "#f0f0f0",
                padding: "20px",
              }}
            >
              <p>
                "It's great to keep track of business expenses.<br></br>My
                end-of-month accounts are so much easier now."
              </p>
              <p style={{ textAlign: "right", fontStyle: "italic" }}>
                Stella Sterling, Birmingham
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
