import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar></Sidebar>
        <div className="col-span-5">
            <Route path="/accordion">
                <AccordionPage></AccordionPage>
            </Route>
            <Route path="/">
                <DropdownPage></DropdownPage>
            </Route>
            <Route path="/button">
                <ButtonPage></ButtonPage>
            </Route>
            <Route path="/modal">
                <ModalPage></ModalPage>
            </Route>
            <Route path="/table">
                <TablePage></TablePage>
            </Route>
            <Route path="/counter">
                <CounterPage initialCount={10}></CounterPage>
            </Route>
        </div>
    </div>
}


export default App;