import '../App.css';


//  In this file you can create the design for an exportable Train component that takes in the data for one train and returns the display for it. 
//  To display whether or not a train is On Time or Delayed check if DELAY === "T0S" (if the equality is true, it is on time, and if not, we consider it delayed). 
//  Display each of the train components for the specified line (first make sure to import the Train component into the file).

export type TrainData = {
    DESTINATION: string; // to location 
    DIRECTION: string; // Cardinial directions
    LINE: string; // color
    DELAY: string; // T0S is on time, if not (T24S or something) then it is delayed
    WAITING_TIME: string; // waiting time in minutes (ex: "4 min")
    STATION: string; // from location
};
const lineStyle = (color: string) => {
    switch(color.toUpperCase()) {
        case "GOLD":   
            return 'bg-yellow-400'
        case "RED":   
            return 'bg-red-500'
        case "BLUE":   
            return 'bg-blue-500'
        case "GREEN":   
            return 'bg-green-400'
        
    }
}
const statusStyle = (status: string) => {
    switch(status.toUpperCase()) {
        case "T0S":   
            return 'text-green-500'
        default:   
            return 'text-red-500'
    }
}
export default function Train({ trainData }: {trainData: TrainData}) {
    let status: string = "";
    if (trainData.DELAY === "T0S") {
        status = "On Time";
    } else {
        status = "Delayed";
    }

    return (
        <div id = "Train Badge" className ='flex flex-row gap-10 p-2 border-b-2 border-r-2 w-full '>
            <div>
                <h1 className='font-bold text-5xl'>M</h1>
            </div>
            <div>
                <h3 className=''> {trainData.STATION} --{'>'} {trainData.DESTINATION} </h3>
                <div id = "details" className=''>
                    <span className={`p-1 text-white text-center rounded-xl ${lineStyle(trainData.LINE)} mr-8`}> {trainData.LINE} </span>
                    <span className={`${statusStyle(trainData.DELAY)}`}> {status} </span>
                    <span className='text-green-500 ml-50'> {trainData.WAITING_TIME} </span>
                    {/* <hr className='absolute left-0 w-full border-t border-2 m-2.5'></hr> */}
                </div>
            </div>
        </div>
    );
}