import React from 'react';
import "semantic-ui-css/semantic.min.css"
import { Grid, Button } from "semantic-ui-react";

function App() {
  return (
    <div>
      
      <Grid container columns={3}>
        <Grid.Column>
          <Button primary>Sign Up</Button>
          <Button secondary>Sign In</Button>
          <Button basic color="green">Forgot Password</Button>
        </Grid.Column>
        <Grid.Column>2</Grid.Column>
        <Grid.Column>3</Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
