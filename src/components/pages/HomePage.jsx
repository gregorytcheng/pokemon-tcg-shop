import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

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
              src="https://lh3.googleusercontent.com/kKJS7ZFYr-2xTsW0xRrKqR5AopRR8Xg0Nfb3Z_9eBI4B4gqLUXuKmGlu3rQxjWAwhk4ZDD3D80L-fncC6_RVHc_R7WQqWlAGPRMoHPXVa2FSOAwF6tFNx8egQsFtHB3V9DApC_7hyJ40EH9aBltu9B0P3bMC3dfk8zrZRF-YvAmpdlXCaAEKvoMlo4fDmqQIRXMYOAUJR5pNXYC6xtxygu2UuTKAJ30oCvThuELH0YYftYStFr0IWY21Qb-o6i0H5WCYXHV6R65UP2GRcTlFcBFV5PM5BDyDt84bVPYVfAaod5DLiD7ThZsWjCXR-M3-oqublp2FBV1nsh7DOzCaAyQPKq3NlTXnbGhvcVSbbELFLfr790OQrOaFqOPSkYxvTj5VstWifbptxR1EBGaEIb5Glzr9-FISOfk7NDzqy_fHMJxpDEcOnOw1GIr9dMB-_lLntbbg3VCodrFu9zg8nxUZ5BzVzE57SmIHhGNawmVdlp72s4jUFbUcJn1V67T3wvieL5S_ItzwgYlesG0jHoSCYiAKKCilRa5GBEDqanHyeLfNpeWD_p9tEAwOBIinoOxaWcT41rBmvsJ1Uj2q8xIIp2lV_L9r2Bj3TlDRrGEEoXBQbHMUbvXVm2Y7-btUC3Y5JMlNEbhcELMfmOUmCLmp2lS3BKDIitcwxO1g_6kMM-6pFwo6BQ2UlxIoQZs=w245-h342-no?authuser=0"
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
