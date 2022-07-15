import React from "react";
import srcData from "./00-srcData";
import Myform from "./02-1-Myform";
import DataTable from "./02-2-DataTable";

const DataContext = React.createContext();
const useData = () => React.useContext(DataContext);

export default function ListProvider(){
    const [Data, setData] = React.useState(srcData);
    // useLayoutEffect - 【每次相依陣列的狀態變更, 渲染"之前"會執行的邏輯區塊】
    React.useLayoutEffect(() => {
        console.log("相依狀態變更, 畫面重新渲染前執行【包含第一次渲染】");
    }, [Data])
    // useEffect - 【每次相依陣列的狀態變更, 渲染"之後"會執行的邏輯區塊】
    React.useEffect(() => {
        console.log("相依狀態變更, 畫面重新渲染後執行, 變更後的Data ↓【包含第一次渲染】");
        console.log(Data);
    }, [Data])

    // 新增
    const add_data = (idVal, productVal, priceVal) => {
        setData([
            ...Data,
            {
                id:idVal,
                product:productVal,
                price:priceVal
            }
        ])
    }
    // 修改
    const edit_data = (idVal, productVal, priceVal) => {
        const inputId = document.querySelector(".myform .text-id");
        if (Data.map(one => one.id).includes(inputId.value)){
            setData(
                Data.map((one, i) => (one.id === idVal ? 
                {
                    id:idVal,
                    product:productVal,
                    price:priceVal
                }
                :one
                ))
            )
            alert(idVal + "，修改資料完成");
        } else {
            alert(inputId.value + ", 輸入此筆資料不存在, 請再檢查")
        }
    }
    // 刪除
    const delete_data = (idVal) => {
        setData(
            Data.filter(one => one.id !== idVal)
        )
    }
    return (
        <DataContext.Provider 
        value={{Data, add_data, edit_data, delete_data}}>
            <Myform useData={ useData } />
            <DataTable useData={ useData } />
        </DataContext.Provider>
    )
}