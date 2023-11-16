import React, { useState } from "react";
import { Grid, Card, CardContent, TextField } from "@mui/material";

export const Asgn18 = () => {
  const [fname, setFname] = useState("First Name");
  const [lname, setLname] = useState("Last Name");
  const [mobile, setMobile] = useState("Mobile");
  const [city, setCity] = useState("City");
  const [address, setAddress] = useState("Address");

  return (
    <Grid sx={{ bgcolor: "gray", height: "75vh" }} container spacing={2}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }}>Assignment 18</h1>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ textAlign: "center" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2>Fill Employee Details</h2>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setFname(e.target.value)}
                  variant="outlined"
                  label="First Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setLname(e.target.value)}
                  variant="outlined"
                  label="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setMobile(e.target.value)}
                  variant="outlined"
                  label="Mobile Number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setCity(e.target.value)}
                  variant="outlined"
                  label="City"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setAddress(e.target.value)}
                  variant="outlined"
                  label="Address"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ textAlign: "center" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2>Show Employee Details</h2>
              </Grid>
              <Grid item xs={6}>
                <h3>{fname}</h3>
              </Grid>
              <Grid item xs={6}>
                <h3>{lname}</h3>
              </Grid>
              <Grid item xs={6}>
                <h3>{mobile}</h3>
              </Grid>
              <Grid item xs={6}>
                <h3>{city}</h3>
              </Grid>
              <Grid item xs={12}>
                <h3>{address}</h3>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
