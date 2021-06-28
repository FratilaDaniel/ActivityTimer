import SmartActivityInput from "./ActivityInput/SmartActivityInput";
import SmartSchedule from "./Table/SmartSchedule";
import SmartStatistics from "./Table/SmartStatistics";
import SmartChart from "./Chart/SmartChart";

function ContentGrid() {
    return (
        <div className="grid-container">
            <SmartActivityInput/>
            <SmartSchedule/>
            <SmartStatistics/>
            <SmartChart/>
        </div>
    );
}

export default ContentGrid;
