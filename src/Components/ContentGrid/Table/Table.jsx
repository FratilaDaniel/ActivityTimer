
function Table({tableHead, role, ...cellProps}){
    return (
        <div {...cellProps}>
            <h1>{role}</h1>
            <table>
                <thead>
                {tableHead.map( (element) =>{
                    return <th>{element}</th>
                })}
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
