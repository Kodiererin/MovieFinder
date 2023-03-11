import React from "react";
import { useEffect } from "react";
// http://www.omdbapi.com/?i=tt3896198&apikey=383193b6
// const key = http://www.omdbapi.com/?i=tt3896198&apikey=
const key = '383193b6';
const apiURL = 'http://www.omdbapi.con?apikey='+key;

const App = () =>{
    const searchMovies = async(title)=>{
        const response = await fetch(`${apiURL}&s=${title}`)
        const data = await response.json();
        console.log(data);
    }
    useEffect(()=>{
        searchMovies('Ironman');
    })


    return(
        <h1>Hello World</h1>
    )
}

export default App;