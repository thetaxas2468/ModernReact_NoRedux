import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const handleClick =()=>{
        console.log("Clicked");
    }
    return <div>
        <div>
            {/* success rounded outline as props equals success={true} rounded={true} outline={true} */}
            <Button success rounded outline onClick={handleClick} className="mb-5">
                <GoBell className="mr-1"/>
                Click me
            </Button>
        </div>
        <div>
            <Button success={true} rounded={true} outline={true} onMouseEnter={handleClick}>
                <GoCloudDownload className="mr-1"/>
                Click me2
            </Button>
        </div>
        <div>
            <Button danger outline onMouseLeave={handleClick}>
                <GoDatabase className="mr-1"/>
                Click me3
            </Button>
        </div>
    </div>

}


export default ButtonPage;