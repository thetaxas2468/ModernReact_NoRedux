import useNavigation from "../hooks/useNavigation";
import classes from "classnames";

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath} = useNavigation();

    const allClasses = classes("text-blue-500",className, currentPath === to && activeClassName);
    
    const handleClick = (event) => {
        if(event.metakKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);

    }

    return <a href={to} onClick={handleClick} className={allClasses}>{children}</a>
}
export default Link;