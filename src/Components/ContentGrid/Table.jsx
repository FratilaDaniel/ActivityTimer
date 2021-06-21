
function Table(props){
    let className = "grid-cell-container " + props.role;
    return (
        <div className={className}>
            this is a table for {props.role}
        </div>
    );
}

export default Table;
