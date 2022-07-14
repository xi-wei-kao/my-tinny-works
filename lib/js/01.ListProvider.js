// function modules
import useDataHook from "./01.lib/01-a.useDataHook";
import add_data from "./01.lib/01-b.add_data";
import edit_data from "./01.lib/01-c.edit_data";
// web components
import Myform from "./02-1.Myform";
import DataTable from "./02-3.Datatable";

export default function ListProvider(){
    useDataHook();
    // 新增
    add_data();
    // 修改
    edit_data();
    // 刪除
    const delete_data = (idVal) => {
        setData(
            Data.filter(one => one.id !== idVal)
        )
    }
    return (
        <DataContext.Provider 
        value={{Data, add_data, edit_data, delete_data}}>
            <Myform />
            <DataTable />
        </DataContext.Provider>
    )
}
