import classes from "classnames";


function Panel({children,className,...rest}) {
    const allClasses = classes("border rounded p-3 shadow bg-white w-full",className);


    return <div {...rest} className={allClasses}>
        {children}
    </div>
}

export default Panel;