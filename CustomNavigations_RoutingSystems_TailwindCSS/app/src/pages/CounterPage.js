import { useEffect, useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel"
// import useCounter from "../hooks/useCounter"; 

function CounterPage({ initialCount }) {
    // const {count, increment} = useCounter({initialCount});
    const [count, setCount] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const handleChange = (e) => {
        setValueToAdd(parseInt(e.target.value) || 0);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">
                Count is {count}
            </h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" value={valueToAdd || ""} onChange={handleChange}></input>
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;