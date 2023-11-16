import React, { useState } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
export const Asgn19 = () => {
  const [data, setData] = useState("pink");

  return (
    <Card sx={{ bgcolor: data, height: "75vh" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center", marginTop: 100 }}>
              Assignment 19
            </h1>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => setData("red")}
              variant="contained"
              fullWidth
            >
              red
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => setData("yellow")}
              variant="contained"
              fullWidth
            >
              yellow
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => setData("green")}
              variant="contained"
              fullWidth
            >
              Green
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => setData("blue")}
              variant="contained"
              fullWidth
            >
              Blue
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
