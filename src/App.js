import React from "react";
import { useEffect , useState } from "react";
import MovieCard from "./movieCard";


import SearchIcon from "./search.svg"
// http://www.omdbapi.com/?i=tt3896198&apikey=383193b6
// const key = http://www.omdbapi.com/?i=tt3896198&apikey=
const key = '383193b6';
const apiURL = 'http://www.omdbapi.com?apikey='+key;




const App = () =>{
    const [movies,setMovies] = useState([]);
    const [searchMovie,setSearchMovie] = useState("");

    const searchMovies = async(title)=>{
        const response = await fetch(`${apiURL}&s=${title}`)
        const data = await response.json();
        console.log(data.Search);


        setMovies(data.Search);
    }
    // useEffect(()=>{
    //     searchMovies();
    // })


    return(
        <div className="app">
            <h1>Movies</h1>
            <div className="search">
                <input 
                    placeholder="Search For Movies"
                    value={searchMovie}
                    onChange={(event)=>{
                        setSearchMovie(event.target.value)
                    }}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{
                        searchMovies(searchMovie)
                    }}
                />
            </div>
            {
                movies?.length>0 ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                )
                :
                (
                    <div className="empty">
                        <h1>No Movies Found</h1>
                    </div>
                )
            }
            
        </div>
    )
}

export default App;