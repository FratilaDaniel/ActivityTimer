import SmartActivityInput from "./ActivityInput/SmartActivityInput";
import SmartSchedule from "./Table/SmartSchedule";
import SmartStatistics from "./Table/SmartStatistics";
import SmartChart from "./Chart/SmartChart";
import PopupBox from "./PopupBox/PopupBox";

function ContentGrid() {
    return (
        <div className="content-container">
            <PopupBox/>
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
