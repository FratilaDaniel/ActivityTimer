
function Table({tableHead, tableData, ...cellProps}){
    return (
        <div {...cellProps}>
            <table>
                <thead>
                    <tr>
                        {tableHead.map( (element, index) =>{
                            return <th key={index}>{element}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => {
                        return (
                            <tr key={index}>
                                {Object.keys(row).map(key => {
                                    return <td key={key}>{row[key]}</td>
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
