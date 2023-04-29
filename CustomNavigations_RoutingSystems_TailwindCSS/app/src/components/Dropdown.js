import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";


function Dropdown({ options, onSelect, selection }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(e.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        }
    }, [])

    const handleClick = () => {
        setIsOpen(current => {
            return !current
        })
    }
    const handleOptionClick = (event, option) => {
        setIsOpen(false);
        onSelect(option);

    }
    const icon = <span className="text-2xl">
        {isOpen ? <GoChevronDown></GoChevronDown> : <GoChevronLeft />}
    </span>

    const renderOptions = options.map((e) => {
        return <div key={e.value} onClick={(event) => handleOptionClick(event, e)}>
            <div className="p-3 bg-blue-50 border-x items-center cursor-pointer hover:bg-sky-100 shadow w-full">
                {e.label}
            </div>
        </div>
    })

    console.log(options)
    // useRef hook is a hook to have a reference to our main root element
    //in here we asign it to the root div of the component by using ref={divEl}
    return <div ref={divEl} className="w-48 relative">
        <Panel onClick={handleClick} className="flex justify-between top-full rounded  p-3 bg-gray-50 border-b items-center cursor-pointer">
            {selection?.label || "Select..."}
            {icon}
        </Panel>
        {isOpen && <Panel>
            {renderOptions}
        </Panel>}
    </div>
}



export default Dropdown;