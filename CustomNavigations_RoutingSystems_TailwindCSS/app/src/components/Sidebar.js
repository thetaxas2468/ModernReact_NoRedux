import Link from "./Link";



function Sidebar(){
    const links=[
        {label:"Dropdown",path:"/"},
        {label:"Accordion",path:"/accordion"},
        {label:"Button",path:"/button"},
        {label:"Modal",path:"/modal"},
    ]
    const renderLinks = links.map(e=>{
        return <Link key={e.label} to={e.path} className="mb-3" activeClassName="font-bold border-l-4 pl-2 border-blue-500">{e.label}</Link>
    })

    return <div className="sticky top-0 flex flex-col items-start">
        {renderLinks}
    </div>
}
export default Sidebar;