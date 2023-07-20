import React from 'react';

function Game() {
    return(
        <>
            <tr>
                <td>
                    <label><input type="radio" name="pickwinner1"></input></label>
                    Away Team 1
                </td>
                <td>
                    <label><input type="radio" name="pickwinner1"></input></label>
                    Home Team 1
                </td>
                <td>7/20/2023 5:00PM</td>
                <td>Rainy</td>
            </tr>
            <tr>
                <td>
                    <label><input type="radio" name="pickwinner2"></input></label>
                    Away Team 2
                </td>
                <td>
                    <label><input type="radio" name="pickwinner2"></input></label>
                    Home Team 2
                </td>
                <td>7/20/2023 6:00PM</td>
                <td>Sunny</td>
            </tr>
            <tr>Additional games listed...</tr>
        </>
    );
}

export default Game