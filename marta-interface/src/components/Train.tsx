//  In this file you can create the design for an exportable Train component that takes in the data for one train and returns the display for it. 
//  To display whether or not a train is On Time or Delayed check if DELAY === "T0S" (if the equality is true, it is on time, and if not, we consider it delayed). 
//  Display each of the train components for the specified line (first make sure to import the Train component into the file).


import React from "react";

type TrainData = {
    DESTINATION: string;
    DIRECTION: string; 
    STATUS: string;
};
export default function Train({ trainData }: {trainData: TrainData}) {

    return (
        <div>
        </div>
    );
}