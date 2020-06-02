import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";

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
  </>
);

export default HomepageLayout;
