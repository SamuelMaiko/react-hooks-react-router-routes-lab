import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map(eachActor=>{
          return (
            <div key={eachActor.name}>
              <p>{eachActor.name}</p>
              <ul>
                {
                  eachActor.movies.map(eachMovie=>{
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

export default Actors;
