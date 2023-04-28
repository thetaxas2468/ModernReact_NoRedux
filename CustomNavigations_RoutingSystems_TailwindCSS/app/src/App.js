import Accordion from "./components/Accordion";

function App() {
    
    const items =[
        {
            id:1,
            label: "Can i use react on a project?",
            content: "Well you can use it if you love REACT."
        },
        {
            id:2,
            label: "Can i use javascript on a project?",
            content: "Well you can use it if you love JS"
        },
        {
            id:3,
            label: "Can i use css on a project?",
            content: "Well you can use it if you love CSS"
        }
    ]


    return <Accordion items={items}/>
}


export default App;