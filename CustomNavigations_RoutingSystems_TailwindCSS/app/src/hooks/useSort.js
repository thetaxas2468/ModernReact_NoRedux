import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";


function useSort({ data, config }) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

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

    return {
        sortOrder,
        sortBy,
        sortedData,
        sortByNameAndOrder:handleClick
    }

}


export default useSort;


export function getIcons(label, sortBy, sortOrder) {
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