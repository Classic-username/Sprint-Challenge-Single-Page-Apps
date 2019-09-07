import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from 'styled-components';

export default function CharacterList() {
  
  const [ char, setChar ] = useState([]);

  useEffect(() => {
    Axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results)
        setChar(res.data.results)
      })
      .catch(deny => {
        console.log(deny)
      })
  }, [])

  const CharSection = styled.section`
    
  `;

  /* width: 100%;
    display: flex;
    flex-wrap: wrap;*/ 

  const InDivId = styled.div`
    width: 40%; 
    margin: 4%;
  `;

  
    
  // useEffect(() => {
  //   // TODO: Add AJAX/API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);



  return (
    <CharSection className="character-list grid-view">
      {char.map(cv => {
        return(
          <InDivId>
            <img src={cv.image}/>
            <h3>{cv.name}</h3>
            <h4>{cv.species} {cv.status}</h4>
            <p>Location: {cv.location.name}</p>
            <p>Origin: {cv.origin.name}</p>
            <a> Episodes</a>
          </InDivId>
          
        )
      })}
    </CharSection>
  );
}
