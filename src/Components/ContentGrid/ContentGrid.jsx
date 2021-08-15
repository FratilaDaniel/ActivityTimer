import React, {Suspense} from 'react';
import SmartActivityInput from "./views/ActivityInput/SmartActivityInput";
const SmartSchedule = React.lazy(() => import("./views/Table/SmartSchedule"));
const SmartChart = React.lazy(() => import("./views/Chart/SmartChart"));
const SmartStatistics = React.lazy(() => import("./views/Table/SmartStatistics"));

function ContentGrid() {
    return (
        <div className="content-container">
            <div className="top-flex">
                <SmartActivityInput/>
                <Suspense fallback={<div>Loading...</div>}>
                    <SmartChart/>
                </Suspense>
            </div>
            <div className="bot-flex">
                <Suspense fallback={<div>Loading...</div>}>
                    <SmartSchedule/>
                    <SmartStatistics/>
                </Suspense>
            </div>   
        </div>
    );
}

export default ContentGrid;
