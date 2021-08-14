import SmartActivityInput from "./views/ActivityInput/SmartActivityInput";
import SmartSchedule from "./views/Table/SmartSchedule";
import SmartStatistics from "./views/Table/SmartStatistics";
import SmartChart from "./views/Chart/SmartChart";

function ContentGrid() {
    return (
        <div className="content-container">
            <div className="top-flex">
                <SmartActivityInput/>
                <SmartChart/>
            </div>
            <div className="bot-flex">
                <SmartSchedule/>
                <SmartStatistics/>
            </div>   
        </div>
    );
}

export default ContentGrid;
