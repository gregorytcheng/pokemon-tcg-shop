import React from "react";
import DesktopContainer from "./DesktopContainer";
import PropTypes from "prop-types";
import MobileContainer from "./MobileContainer";
import { Container, Grid, Header, Segment } from "semantic-ui-react";

const ResponsiveContainer = ({ children }, props) => (
  <>
    <DesktopContainer {...props}>{children}</DesktopContainer>
    <MobileContainer {...props}>{children}</MobileContainer>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                About this project
              </Header>
              <p>
                This is a mock website created in order to showcase my abilities
                with React. Inspiration for this project was taken from my
                brother, who placed 2nd in the
                <a
                  href="https://bulbapedia.bulbagarden.net/wiki/2015_World_Championships#Senior_Division"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  2015 TCG World Championship
                </a>
                . Feel free to learn more about me and my work experience at my
                <a
                  href="https://gregorytcheng.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  website
                </a>
                .
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
