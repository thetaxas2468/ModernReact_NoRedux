import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);


    const handeClick = (index) => {
        console.log("Stale version of exapnded index",expandedIndex);
        // this type of setState will get the most recent value of the state we are using
        setExpandedIndex((current) => {
            console.log("Stale version of exapnded index",current);
            return current === index ? -1 : index;
        })
    }


    const renderItems = items.map((e, index) => {
        const isExapnded = index === expandedIndex;

        const icon = <span className="text-2xl">
            {isExapnded ? <GoChevronDown></GoChevronDown> : <GoChevronLeft />}
        </span>

        return <div key={e.id}>
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handeClick(index)}>
                {e.label}
                {icon}
            </div>
            {isExapnded && <div className="border-b p-5">
                {e.content}
            </div>}
        </div>
    })

    return <div className="border-x border-t rounded">{renderItems}</div>
}

export default Accordion;