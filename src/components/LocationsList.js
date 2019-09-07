import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from 'styled-components';

export default function LocationsList() {
    const [ loc, setLoc ] = useState([])

    const LocDiv = styled.div``;
    const InLocDiv = styled.div`
        width: 40%;
        margin: 4%;
        border: 2px solid black;

    `;

    useEffect(() => {
        Axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                setLoc(res.data.results);

            })
            .catch(deny => {
                console.log(deny)
            })
    }, [])

    return(
        <LocDiv className='grid-view'>
            ${loc.map(cv => {
                return(
                    <InLocDiv key={cv.id}>
                        <h2>{cv.name}</h2>
                        <p>{cv.type} - {cv.dimension}</p>
                        <div>{cv.residents.length} Residents</div>
                    </InLocDiv>
                )
            })}
        </LocDiv>
    )
    
    
    
}
