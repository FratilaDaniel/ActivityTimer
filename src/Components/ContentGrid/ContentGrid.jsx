import ActivityInput from "./ActivityInput";
import Table from "./Table";
import Graph from "./Graph";

function ContentGrid(props){
    return (
        <div className="grid-container">
            <ActivityInput/>
            <Table role="schedule"/>
            <Table role="statistics"/>
            <Graph/>
        </div>
    );
}

export default ContentGrid;
