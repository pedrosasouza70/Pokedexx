import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ name, image, type,number }) {
  const formNumber = (number) => {
    return number.toString().padStart(4, "0");
  };
  const pokeType = () => {
    
  
    if (type[1]) {
     return <Button variant="contained" style={{ backgroundColor: 
     getTypeColor(type[1].type.name), 
     borderRadius: '5px',
     fontSize:'0.75rem',
     padding: '2px',
     marginLeft: '5px'
     }}>
      {type[1].type.name}
      </Button>
    }
  };
  const getTypeColor = (type) => {
    switch (type) {
      case "grass":
        return "green" ; 
      case "fire":
        return "orange"; 
      case "poison":
        return "purple";
      case "water":
        return "blue";
      case "bug":
        return "green" ; 
      default:
        return "#000"; 
    }
  }
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
        sx = {{backgroundColor: "#F5F3F3", height:"auto"}}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "left" }}>
        {name}
        <Typography variant="body2" color="#A49F9F" sx={{ textAlign: "left" }}>
          <b>Nº{formNumber(number)}</b>
        </Typography>
        </Typography>
        <Typography variant="body2" color="black" >
        <Button variant="contained" style={{ backgroundColor: 
     getTypeColor(type[0].type.name), 
     borderRadius: '5px',
     fontSize:'0.75rem',
     padding: '2px'}}>        
     {type[0].type.name}
     </Button>
     {pokeType()}
          
        </Typography>
      </CardContent>
      <CardActions >
        
      </CardActions>
    </Card>
  );
}
