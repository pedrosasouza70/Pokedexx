import { Box, Container } from "@mui/system"
import React,  { useEffect, useState } from "react";

import { Grid } from "@mui/material"
import Navibar from "../components/Navibar"
import PokeCard from "../components/PokeCard"
import axios from "axios";

export const Home = () => {
    
    useEffect(() => {

    var endpoints = [];
    for(var i = 1; i< 30; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    });
    const [pokemons, setPokemons] = useState([]);
    return (
        <div><Navibar/>
        <Container maxWidth ="lg">
        <Grid container>
        {pokemons.map((pokemon) => 
        (<Grid item key={pokemon.name}>
        <PokeCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
        </Grid> ))}
        
        </Grid>
        </Container>
        </div>
    )
}
