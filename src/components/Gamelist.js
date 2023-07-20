import React from 'react';
import Game from './Game';

function Gamelist(  ){
    return(
        <table id="gamelist">
            <thead>
                <tr>
                    <th>Away Team</th>
                    <th>Home Team</th>
                    <th>Status</th>
                    <th>Weather</th>
                </tr>
            </thead>
            <tbody>
                <Game></Game>
            </tbody>
        </table>
    );    
};

export default Gamelist;