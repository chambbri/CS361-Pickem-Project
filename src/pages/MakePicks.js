import React from 'react';
import Gamelist from '../components/Gamelist';


function MakePicks(){

    return(
        <>
        <div id="makepicks">
            <h1>Make Your Picks</h1>
            <select id="date-select">
                <option value="">Select date</option>
            </select>
            <Gamelist></Gamelist>
            <button>Save Picks</button>
        </div>
        </>
    );
}

export default MakePicks;