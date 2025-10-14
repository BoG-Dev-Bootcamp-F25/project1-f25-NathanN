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
export default function Train({ trainData }: {trainData: TrainData}) {
    let status: string = "";
    if (trainData.DELAY === "T0S") {
        status = "On Time";
    } else {
        status = "Delayed";
    }

    return (
        <div id = "Train Badge">
            <h3> {trainData.STATION} --{'>'} {trainData.DESTINATION} </h3>
            <div id = "details">
                <span> {trainData.LINE} </span>
                <span> {status} </span>
                <span> {trainData.WAITING_TIME} </span>
            </div>
        </div>
    );
}