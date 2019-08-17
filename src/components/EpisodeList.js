import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from 'styled-components';

export default function EpisodeList() {
    const [ epis, setEpis ] = useState([]);

    useEffect(() => {
        Axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(res => {
                setEpis(res.data.results)
            })
            .catch(deny => {
                console.log(deny)
            })
    }, [])

    const EpiDiv = styled.div`
        width: 100%;
    `;
    const ThisDiv = styled.div`
        width: 40%;
        margin: 4%;  
        border: 1px dashed black;
        border-radius: 10px;
        background: whitesmoke;
    `;

    return (
        <EpiDiv className='grid-view'>
            {epis.map(cv => {
                return(
                    <ThisDiv key={cv.id}>
                        <h3>Title: {cv.name}</h3>
                        <h4>S E syntax: {cv.episode}</h4>
                        <h5>Aired: {cv.air_date}</h5>
                        <a href={cv.url}>See episode api documentation</a>
                    </ThisDiv>  
                )
                
            })}
        </EpiDiv>
    )
}