import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RainCard = (data) => {
  const { MinParser } = require("../util/index");
  // console.log(data.daily.weather[0].main);

  return (
      
    <div className="cardDiv">
        
      <Card sx={{ width: 100 }}>
      
        <CardContent> 
          <Typography  component="p" sx={{color:"white"}}>
          {MinParser(data.minutely.dt)}
          </Typography>

          <Typography component="p">
          {data.minutely.precipitation} % 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RainCard;