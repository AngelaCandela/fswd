import { useState } from "react";

export default function Pagination({ setAPI_URL, totalPages }) {

    const API_KEY = "699cc01ec9149da5de63090873fbcc5a"

    function changePage(e) {
        setAPI_URL(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${e.targte.id}`);
    }
    let myArray = [];

    function pagination() {
        for (let i=1; i<= totalPages; i++) {
            myArray.push(i);
        return (
            myArray
        )
    }}

    return (
        <div>
            <nav>
                <ul class="pagination">
                    {
                    myArray.map(i => {
                        return (
                        <li class="page-item" id={i}>{i}</li>
                        )
                    })
                    }                  
                </ul>
            </nav>
        </div>
    )
}
