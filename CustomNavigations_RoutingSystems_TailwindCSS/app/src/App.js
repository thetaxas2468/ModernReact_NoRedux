import { useState } from "react";
import Dropdown from "./components/Dropdown";


function App() {
    const [selection, setSelection] = useState(null);


    const handleSelect = (option) => {
        setSelection(option);
    }


    const options = [
        {
            label: "Red", value: "red",
        },
        {
            label: "Green", value: "green"
        },
        {
            label: "Blue", value: "blue"
        }
    ]

    return <div className="flex">
        <Dropdown options={options} selection={selection} onSelect={handleSelect} />
        <Dropdown options={options} selection={selection} onSelect={handleSelect} />
    </div>
}


export default App;