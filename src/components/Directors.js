import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
        {
          directors.map(eachDirector=>{
            return(
              <div key={eachDirector.name}>
                <p>{eachDirector.name}</p>
                <ul>
                  {
                    eachDirector.movies.map( eachMovie=>{
                      return <li key={eachMovie}>{eachMovie}</li>
                    })
                  }
                </ul>
              </div>
            )
          })
        }
    </div>
  )
}

export default Directors;
