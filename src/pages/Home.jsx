import { Box, Container } from "@mui/system"
import React,  { useEffect, useState } from "react";

import { Grid } from "@mui/material"
import Navibar from "../components/Navibar"
import PokeCard from "../components/PokeCard"
import axios from "axios";

export const Home = () => {
    useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    .then((res) => console.log(res));
    });
    const [pokemons, setPokemons] = useState([]);
    return (
        <div><Navibar/>
        <Container maxWidth ="lg">
            
        <Grid container>
        {pokemons.map((pokemon) => 
        (<Grid item xs={3}>
        <PokeCard/>
        </Grid> ))}
        
        </Grid>
        </Container>
        </div>
    )
}
