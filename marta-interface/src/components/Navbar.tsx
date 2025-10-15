import '../App.css' 


/* 
    This will contain an exportable navbar display component, which we can import into LinesPage.tsx. 
    The navbar component will be displayed with the props for their specific lines.

*/

type NavbarProps = {
    STATIONS: string[];
    onStationClk: (stationLoc: string | null) => void;
    selectStation: string | null;
}


export default function Navbar({ STATIONS, onStationClk, selectStation } : NavbarProps) {
    // console.log(STATIONS);
    // console.log(STATIONS);
    return (
        <nav className = 'flex flex-col bg-gray-800 p-4 text-white w-96'>
            <h2 className='text-gray-400 mb-4'>Select your starting station</h2>
            <div className='text-xl'>
                <button onClick = {() => onStationClk(null)} className={`ml-10 hover:cursor-pointer ${selectStation === null ? 'text-green-400 font-bold': ''}`}>All Stations</button>
                <hr className='w-11/12 border-t border-2 mx-auto mt-1 mb-4'></hr>
                {STATIONS.map((stationLoc, index) => (
                    <div>
                        <button key={`${stationLoc}-${index}`} onClick={() => onStationClk(stationLoc)} className={`ml-10 hover:cursor-pointer ${selectStation === stationLoc ? 'text-green-400 font-bold': ''}`}> {stationLoc} </button>  
                        <hr className='w-11/12 border-t border-2 mx-auto mt-1 mb-4'></hr>
                    </div>
                ))}
            </div>
        </nav>
    )

}









            // { // gold
            //     <>
            //         <button>Doraville</button>
            //         <button>Chamblee</button>
            //         <button>Lenox</button>
            //         <button>Lindbergh Center</button>
            //         <button>Arts Center</button>
            //         <button>Midtown</button>
            //         <button>North Avenue</button>
            //         <button>Civic Center</button>
            //         <button>Peachtree Center</button>
            //         <button>Five Points</button>
            //         <button>Garnett</button>
            //         <button>West End</button>
            //         <button>Oakland City</button>
            //         <button>Lakewood</button>
            //         <button>East Point</button>
            //         <button>College Park</button>
            //         <button>Airport</button>
            //     </>
            // }
            // { // red
            //     <> 
            //         <button>North Springs</button>
            //         <button>Sandy Springs</button>
            //         <button>Dunwoody</button>
            //         <button>Medical Center</button>
            //         <button>Buckhead</button>
            //         <button>Lindbergh Center</button>
            //         <button>Arts Center</button>
            //         <button>Midtown</button>
            //         <button>North Avenue</button>
            //         <button>Civic Center</button>
            //         <button>Peachtree Center</button>
            //         <button>Five Points</button>
            //         <button>Garnett</button>
            //         <button>West End</button>
            //         <button>Oakland City</button>
            //         <button>Lakewood</button>
            //         <button>East Point</button>
            //         <button>College Park</button>
            //         <button>Airport</button>
            //     </>
            // }
            // { // blue
            //     <>
            //         <button>Hamilton E. Holmes</button>
            //         <button>West Lake</button>
            //         <button>Ashby</button>
            //         <button>Vine City</button>
            //         <button>GWCC/CNN Center</button>
            //         <button>Five Points</button>
            //         <button>Georgia State</button>
            //         <button>King Memorial</button>
            //         <button>Inman Park</button>
            //         <button>Edgewood</button>
            //         <button>East Lake</button>
            //         <button>Decatur</button>
            //         <button>Avondale</button>
            //         <button>Kensington</button>
            //         <button>Indian Creek</button>
            //     </>
            // }
            // { // green
            //     <>
            //         <button>Bankhead</button>
            //         <button>Ashby</button>
            //         <button>Vine City</button>
            //         <button>GWCC/CNN Center</button>
            //         <button>Five Points</button>
            //         <button>Georgia State</button>
            //         <button>King Memorial</button>
            //         <button>Inman Park</button>
            //         <button>Edgewood</button>
            //         <button>Avondale</button>
            //     </>
            // }