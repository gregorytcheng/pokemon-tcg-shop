import React from "react";
import { Grid, Header, Image, Segment, Container } from "semantic-ui-react";

const HomepageLayout = () => (
  <>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Your resource for the Pokémon Trading Card Game (TCG)
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Find your favorite Pokémon cards and have them delivered to your
              doorstep.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Discuss your findings
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Find the best cards by trading opinions with other users.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              rounded
              size="medium"
              src="https://i.ibb.co/jbv3zB3/XY12-EN-11.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center"></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
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
                with React. This was built and deployed using Firebase
                (firestore and OAuth), Semantic UI React, and Heroku.
                Inspiration for this project was taken from my brother, who
                placed 2nd in the
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

export default HomepageLayout;
