import Table from "./Table";
import useSort,{getIcons} from "../hooks/useSort";


function SortableTable(props) {


    const { config, data } = props;
    const { sortBy,
        sortOrder,
        sortedData,
        sortByNameAndOrder
    } = useSort({ data, config });

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }
        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => { sortByNameAndOrder(column.label) }}>
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    })


    // Sort when both not null
    // Make a copy of data (To avoid updaing the main data and also to avoid updaing a prop)


    return <Table {...props} config={updatedConfig} data={sortedData}></Table>
}


export default SortableTable;