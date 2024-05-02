import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import image1 from "./Images/Image1.jpg";

export default function card() {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={image1}
            alt="Business"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              News About science news science news.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              June 01, 2023 6:51 pm Joshi is a PhD in Mechanical Engineering
              from Clemson University, the US, and had joined the facility in
              August 2000.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" disableElevation>
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
