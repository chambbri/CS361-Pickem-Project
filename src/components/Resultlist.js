import React from 'react';

function Gamelist(  ){
    return(
        <table id="gamelist">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Date 1</th>
                    <th>Date 2</th>
                    <th>Date 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>User 1</td>
                    <td>8</td>
                    <td>5</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>User 2</td>
                    <td>7</td>
                    <td>7</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>User 3</td>
                    <td>9</td>
                    <td>11</td>
                    <td>8</td>
                </tr>
            </tbody>
        </table>
    );    
};

export default Gamelist;