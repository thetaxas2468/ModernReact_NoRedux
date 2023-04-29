import Table from "../components/Table"
function TablePage(){


    const fruits =[
        {name:"Orange",color:"bg-orange-500",score:5},
        {name:"Apple",color:"bg-red-500",score:3},
        {name:"Banana",color:"bg-yellow-500",score:1},
        {name:"Lime",color:"bg-green-500",score:4},
    ]

    const config=[
        {label:"Name",render: fruit=>fruit.name},
        {label:"Color",render: fruit=><div className = {`p-2 m-3 ${fruit.color}`}></div>},
        {label:"Score",render: fruit=>fruit.score},
    ]

    return <div>
        <Table data={fruits} config={config}></Table>
    </div>
}

export default TablePage;