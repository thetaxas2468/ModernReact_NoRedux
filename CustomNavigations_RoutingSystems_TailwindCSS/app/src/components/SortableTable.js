import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder("asc");
            setSortBy(label);
            return;
        }
        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        }
        else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        }
        else if (sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(null);
        }

    }




    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }
        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => { handleClick(column.label) }}>
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    })

    let sortedData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valA = sortValue(a);
            const valB = sortValue(b);
            const revOrder = sortOrder === "asc" ? 1 : -1;
            if (typeof valA === "string") {
                return valA.localeCompare(valB) * revOrder;
            }
            else {
                return (valA - valB) * revOrder
            }
        })
    }


    // Sort when both not null
    // Make a copy of data (To avoid updaing the main data and also to avoid updaing a prop)


    return <Table {...props} config={updatedConfig} data={sortedData}></Table>
}


function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }
    else if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }
    else if (sortOrder === "asc") {
        return <div>
            <GoArrowSmallUp />
        </div>
    }
    else if (sortOrder === "desc") {
        return <div>
            <GoArrowSmallDown />
        </div>
    }
}


export default SortableTable;