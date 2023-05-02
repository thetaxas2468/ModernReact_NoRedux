import { Fragment } from "react";

function Table({ data, config }) {

    const renderHeaders = config.map(column => {
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th key={column.label}>{column.label}</th>
    })

    const renderRows = data.map((row)=>{
        const renderCells = config.map((con)=>{
            return <td className="p-2" key={con.label}>{con.render(row)}</td>
        })
        return <tr className="border-b" key={row.name}>{renderCells}</tr>;
    })

    return <table className="table-auto border-spacing-2">
        <thead><tr className="border-b-2">{renderHeaders}</tr></thead>
        <tbody>{renderRows}</tbody>
    </table>
}

export default Table;