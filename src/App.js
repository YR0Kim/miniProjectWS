import './App.css';
import React from 'react';
import QnaRead from "./product/QnaRead";

import { Grid, Box } from "@material-ui/core";
import ProductList from "./product/ProductList";


function App() {
<<<<<<< Updated upstream
  return (
      <div className="App">
        <Grid container spacing={1} direction="row">
          <Grid item xs={12}>
            <Box bgcolor="skyblue" color="info.contrastText" p={2}>
              <QnaRead></QnaRead>
            </Box>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Box bgcolor="pink" paddingLeft={1.8} paddingTop={1} paddingBottom={3}>
              <ProductList></ProductList>
            </Box>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </div>
  );
=======
    return (
        <div className="App">
            <Grid container spacing={1} direction="row">
                <Grid item xs={12}>
                    <Box bgcolor="skyblue" color="info.contrastText" p={2}>
                        <QnaRead></QnaRead>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <Box bgcolor="pink" paddingLeft={1.8} paddingTop={1} paddingBottom={3}>
                        <ProductList></ProductList>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    );
>>>>>>> Stashed changes
}



export default App;
