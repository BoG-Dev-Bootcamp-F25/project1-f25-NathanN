import '../App.css'
import { useState } from 'react';   


/* 
    This will contain an exportable navbar display component, which we can import into LinesPage.tsx. 
    The navbar component will be displayed with the props for their specific lines.

*/

type NavbarProps = {
    STATION: string;
}


export default function Navbar({STATION} : (NavbarProps)) {
    // const [currColor, setCurrColor] = useState(null);

    const [stationFilter, setStationFilter] = useState(null);
    return (
        <div>
            <button>All Stations</button>
            { // gold
                <>
                    <button>Doraville</button>
                    <button>Chamblee</button>
                    <button>Lenox</button>
                    <button>Lindbergh Center</button>
                    <button>Arts Center</button>
                    <button>Midtown</button>
                    <button>North Avenue</button>
                    <button>Civic Center</button>
                    <button>Peachtree Center</button>
                    <button>Five Points</button>
                    <button>Garnett</button>
                    <button>West End</button>
                    <button>Oakland City</button>
                    <button>Lakewood</button>
                    <button>East Point</button>
                    <button>College Park</button>
                    <button>Airport</button>
                </>
            }
            { // red
                <> 
                    <button>North Springs</button>
                    <button>Sandy Springs</button>
                    <button>Dunwoody</button>
                    <button>Medical Center</button>
                    <button>Buckhead</button>
                    <button>Lindbergh Center</button>
                    <button>Arts Center</button>
                    <button>Midtown</button>
                    <button>North Avenue</button>
                    <button>Civic Center</button>
                    <button>Peachtree Center</button>
                    <button>Five Points</button>
                    <button>Garnett</button>
                    <button>West End</button>
                    <button>Oakland City</button>
                    <button>Lakewood</button>
                    <button>East Point</button>
                    <button>College Park</button>
                    <button>Airport</button>
                </>
            }
            { // blue
                <>
                    <button>Hamilton E. Holmes</button>
                    <button>West Lake</button>
                    <button>Ashby</button>
                    <button>Vine City</button>
                    <button>GWCC/CNN Center</button>
                    <button>Five Points</button>
                    <button>Georgia State</button>
                    <button>King Memorial</button>
                    <button>Inman Park</button>
                    <button>Edgewood</button>
                    <button>East Lake</button>
                    <button>Decatur</button>
                    <button>Avondale</button>
                    <button>Kensington</button>
                    <button>Indian Creek</button>
                </>
            }
            { // green
                <>
                    <button>Bankhead</button>
                    <button>Ashby</button>
                    <button>Vine City</button>
                    <button>GWCC/CNN Center</button>
                    <button>Five Points</button>
                    <button>Georgia State</button>
                    <button>King Memorial</button>
                    <button>Inman Park</button>
                    <button>Edgewood</button>
                    <button>Avondale</button>
                </>
            }

        </div>
    )

}