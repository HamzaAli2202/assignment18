import React, { useState } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Calc = () => {
  const [value, setValue] = useState("");
  return (
    <Grid
      sx={{ backgroundColor: "blue", height: "100vh" }}
      container
      spacing={2}
    >
      <Grid item xs={4.5}></Grid>
      <Grid item xs={3}>
        <Card sx={{ marginTop: 10 }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    height: 55,
                    textAlign: "right",
                    fontSize: 25,
                    fontWeight: "bold",
                  }}
                >
                  <CardContent>{value}</CardContent>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue("")}
                  variant="contained"
                  fullWidth
                >
                  AC
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value.slice(0, -1))}
                  variant="contained"
                  fullWidth
                >
                  DE
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + ".")}
                  variant="contained"
                  fullWidth
                >
                  .
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "/")}
                  variant="contained"
                  fullWidth
                >
                  /
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "7")}
                  variant="contained"
                  fullWidth
                >
                  7
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "8")}
                  variant="contained"
                  fullWidth
                >
                  8
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "9")}
                  variant="contained"
                  fullWidth
                >
                  9
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "*")}
                  variant="contained"
                  fullWidth
                >
                  *
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "4")}
                  variant="contained"
                  fullWidth
                >
                  4
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "5")}
                  variant="contained"
                  fullWidth
                >
                  5
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "6")}
                  variant="contained"
                  fullWidth
                >
                  6
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "+")}
                  variant="contained"
                  fullWidth
                >
                  +
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "1")}
                  variant="contained"
                  fullWidth
                >
                  1
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "2")}
                  variant="contained"
                  fullWidth
                >
                  2
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "3")}
                  variant="contained"
                  fullWidth
                >
                  3
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "-")}
                  variant="contained"
                  fullWidth
                >
                  -
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "0")}
                  variant="contained"
                  fullWidth
                >
                  0
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={(e) => setValue(value + "00")}
                  variant="contained"
                  fullWidth
                >
                  00
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={(e) => setValue(eval(value))}
                  variant="contained"
                  fullWidth
                >
                  =
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4.5}></Grid>
    </Grid>
  );
};
