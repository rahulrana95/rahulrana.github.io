import React, { Component } from "react";
import styled from "styled-components";
import { BlockTextEle } from "../widgets/styleComponents";
import Timeline from "./Timeline";

const Container = styled.div`
  width: 100%;
  text-align: left;

  .main-title {
    line-height: 1;
    margin-bottom: 15px;
    color: #555;
    font-weight: 400;
  }

  .red {
    color: #cb3e3e;
  }

  ul {
    padding-left: 20px;
  }

  .job li::before {
    content: " ";
    display: inline-block;
    width: 5px;
    height: 5px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: #d56060;
    margin-right: 10px;
    align-self: baseline;
    margin-top: 6px;
  }
`;

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <header>
          <h1 className="main-title">PORTFOLIO</h1>
          <p>
            See my works below. Unless stated otherwise in their description,
            all the Front-end parts were completely done by me.
          </p>
        </header>
        <ul>
          <Timeline time="Mar'19 - Now">
            <BlockTextEle>
              <strong>
                <i>Application Engineer - Flock (Directi), Bengaluru </i>
              </strong>
            </BlockTextEle>
            <BlockTextEle>
              I am working on the{" "}
              <span className="red">Flockmail Product </span> as a Frontend
              Engineer. We are building the next generation mail system for
              domain enterprises.
            </BlockTextEle>
          </Timeline>
          <Timeline time="Dec '18 - Mar '19">
            <BlockTextEle>
              <strong>
                <i>Software Engineer - I (Frontend) - Rivigo, Gurgaon </i>
              </strong>
            </BlockTextEle>
            <BlockTextEle>
              <ul className="job">
                <li>
                  Develop the Freight Goal Dashboard from scratch for the
                  business people that is used by the 50+ people across teams to
                  manage 1000+ people in Rivigo.
                </li>
                <li>
                  Worked on Google Maps APIs (developing polygons on maps and
                  handling multiple polygons at client side).
                </li>
                <li> Worked on Webpack4, Styled Components, Gatsby.</li>
              </ul>
            </BlockTextEle>
          </Timeline>
          <Timeline time="Dec '18 - Mar '19">
            <BlockTextEle>
              <strong>
                <i>Software Engineer (SDE - I Frontend) - HelpShift, Pune </i>
              </strong>
            </BlockTextEle>
            <BlockTextEle>
              <ul className="job">
                <li> Developed the new features.</li>
                <li>
                  Migrated and Refactored the old feature from YUI to React.
                </li>
                <li>Handle on-call responsibility.</li>
                <li> Worked on SASS, React</li>
                <li>Followed Agile process and follow sprints.</li>
                <li>Completed Tasks of sprints on time.</li>
              </ul>
            </BlockTextEle>
          </Timeline>
          <Timeline time="Dec '17 - Jan '18">
            <BlockTextEle>
              <strong>
                <i>Software Engineer Intern - MindTickle, Pune </i>
              </strong>
            </BlockTextEle>
            <BlockTextEle>
              <ul className="job">
                <li>
                  Integration of a video chat feature from one dashboard to
                  other.
                </li>
                <li>
                  Unnderstanding the new dashboards as i need to fit both
                  backend API's and frontend UI too.
                </li>
                <li>
                  Successfully Inntegrated the feature and gave it to testing
                  team.
                </li>
              </ul>
            </BlockTextEle>
          </Timeline>
          <Timeline time="May '17 - July '17">
            <BlockTextEle>
              <strong>
                <i>
                  Software Engineer Intern - Classplus (Formerly XPrep), Noida
                </i>
              </strong>
            </BlockTextEle>
            <BlockTextEle>
              <ul className="job">
                <li>Developed the Dashboard for internal team.</li>
                <li>
                  {" "}
                  Develop the dashboard from scratch for the internal team which
                  has profiles of all the people (students, tutors and parents).
                </li>
                <li> Worked on React, Redux, Nodejs, MYSQL.</li>
              </ul>
            </BlockTextEle>
          </Timeline>
        </ul>
      </Container>
    );
  }
}

export default Portfolio;
