
function Table({tableHead, tableData, ...cellProps}){
    return (
        <div {...cellProps}>
            <table>
                <thead>
                {tableHead.map( (element) =>{
                    return <th>{element}</th>
                })}
                </thead>
                <tbody>
                {tableData.map(row => {
                    return (
                        <tr>
                            {Object.keys(row).map(key => {
                                return <td>{row[key]}</td>
                            })
                            }
                        </tr>)
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
