import { useEffect, useState, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel"
// import useCounter from "../hooks/useCounter"; 

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const ADD_TO_VALUE = "value-to-add";
const SUBMIT_VALUE_TO_COUNT = "value-to-submit";

const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            }
        case ADD_TO_VALUE:
            return {
                ...state,
                valueToAdd: action.payload,
            }
        case SUBMIT_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            return state
    }

}


function CounterPage({ initialCount }) {
    // const {count, increment} = useCounter({initialCount});
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        // setCount(count + 1);
        dispatch({ type: INCREMENT_COUNT })
    }
    const decrement = () => {
        // setCount(count - 1);
        dispatch({ type: DECREMENT_COUNT })
    }
    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch({ type: ADD_TO_VALUE, payload: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch({ type: SUBMIT_VALUE_TO_COUNT })
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">
                Count is {state.count}
            </h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" value={state.valueToAdd || ""} onChange={handleChange}></input>
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;