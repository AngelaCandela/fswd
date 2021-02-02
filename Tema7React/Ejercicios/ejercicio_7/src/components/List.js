import { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function List() {

    const API_KEY = "699cc01ec9149da5de63090873fbcc5a";    
    /* const PAGE_SIZE = 20;
    let currentPage = 1; */

    const [API_URL, setAPI_URL] = useState(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    let myArray = [];
    
    useEffect(() => {
        getAllMovies(API_URL)
    }, [])

    function getAllMovies(URL) {
        fetch(URL)
            .then(response => {
                if(!response.ok)
                    throw new Error(`Algo ha ido mal: ${response.statusText}`);
                return response.json();
            })
            .then(json => {
                myArray = myArray.concat(json.results);
    
                if(json.page < json.total_pages) {
                    getAllMovies(`${URL}&page=${json.page+1}`);
                }
                setMovies(myArray);
                setTotalPages(json.total_pages);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="container">
                <ul className="list-group">
                    {
                    movies.map((movie, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                <img src={movie.backdrop_path} alt="img"/>
                                <h1>{index+1}: {movie.title}</h1>
                                <p>Overview: {movie.overview}</p>
                                <span>Release Date : {movie.release_date}</span>
                                <button className="btn btn-info">More info</button>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <Pagination setAPI_URL={setAPI_URL} totalPages={totalPages}/>
        </>
    )
}
