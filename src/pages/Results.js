import React from 'react';
import Resultlist from '../components/Resultlist'

function Results(){

    return(
        <>
        <h1>Pick Results</h1>
         <select id="date-select">
                <option value="">Select date</option>
        </select>
        <Resultlist></Resultlist>
        </>
    );
}

export default Results;