import Train, { type TrainData} from "./Train";
import '../App.css';



// Within the TrainList.tsx component, the data should be filtered to only return info for trains that are part of the specific line. 
// For example, for the gold line we only want an array of gold trains.

// 4 colors: GOLD, RED, BLUE, GREEN
// filtering, recieve data from linespage via props
// render list of trains using Train component
type TrainListProps = {
    Trains: TrainData[];
}

export default function TrainList ({Trains}: TrainListProps) {
    if (!Trains || Trains.length === 0) {
        return <div>No Trains Currently</div>
    }
    return (
        <div>
            {Trains.map((train, i) => (
                <Train key = {i} trainData = {train} />
            ))}
        </div>
    )
}