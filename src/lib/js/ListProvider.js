import srcData from "./srcData";
import React from "react";

function Myform(){
    const { Data, add_data, edit_data } = useData();
    // console.log(add_data);
    return (
        <form className="myform"
        onSubmit={e => {
            // 新增的按鈕
            e.preventDefault();
            const inputId = document.querySelector(".myform .text-id");
            const inputProduct = document.querySelectorAll(".myform .product input");
            const inputPrice = document.querySelector(".myform .price");
            if (Data.map(one => one.id).includes(inputId.value)){
                alert(inputId.value + ", 此筆資料已存在、再檢查\n【是否要修改資料？請使用修改資料】");
            } else {
                let idVal = inputId.value;
                let productVal = [...inputProduct].filter(one => one.checked)[0].value;
                let priceVal = inputPrice.value;
                // console.log("id:", idVal);
                // console.log("productVal:", productVal);
                // console.log("priceVal:", priceVal);
                inputId.value = "";
                for (let i=0; i<inputProduct.length; i++){
                    inputProduct[i].checked = false;
                };
                inputPrice.value = "";
                add_data(idVal, productVal, priceVal);
            };
            // 把全部資料重新渲染回來
            const trList = document.querySelectorAll(".mytable tbody tr");
            [...trList].map(one => one.style.display = "");
        }}>
            <label htmlFor="id">id: </label>
                <input type="text" name="id" className="text-id" 
                placeholder="輸入以過濾資料..." required
                onChange={e => {
                    e.preventDefault();
                    const inputId = document.querySelector(".myform .text-id");
                    let idVal = inputId.value;
                    const trList = document.querySelectorAll(".mytable tbody tr");
                    // console.log(trList[0].innerHTML.includes(idVal));
                    [...trList].map(one => {
                        if (one.innerHTML.includes(idVal)){
                            one.style.display = "";
                        } else {
                            one.style.display = "none";
                        }
                    })
                }}
                /><br/><br/>
            <label htmlFor="product" className="product">product: 
                <input type="radio" name="product" value="i-phone13" required/>i-phone13
                <input type="radio" name="product" value="pixel6" required/>pixel6
                <input type="radio" name="product" value="note-20" required/>note-20
            </label><br/><br/>
            <label htmlFor="price">price: </label>
                <input type="text" name="price" className="price" required/><br/><br/>
            <input type="submit" className="submit-btn" value="新增資料"/><br/><br/>
            <input type="button" className="edit-btn" value="修改資料"
            onClick={e => {
                e.preventDefault();
                const inputId = document.querySelector(".myform .text-id");
                const inputProduct = document.querySelectorAll(".myform .product input");
                const inputPrice = document.querySelector(".myform .price");
                let idVal = inputId.value;
                let productVal = [...inputProduct].filter(one => one.checked)[0].value;
                let priceVal = inputPrice.value;
                edit_data(idVal, productVal, priceVal);
                // 把全部資料重新渲染回來
                const trList = document.querySelectorAll(".mytable tbody tr");
                [...trList].map(one => one.style.display = "");
            }}
            />
        </form>
    )
}

function Buttons(){
    const { Data, edit_data } = useData();
}

function DataTable(){
    const { Data, delete_data } = useData();
    return (
        <table className="mytable">
            <thead>
                <tr>
                    <th>id</th><th>product</th><th>price</th><th>editor</th>
                </tr>
            </thead>
            <tbody>
                {[...Data].map((one, i) => (
                    <tr key={i}>
                        <td>{one.id}</td>
                        <td>{one.product}</td>
                        <td>{one.price}</td>
                        <td>
                            <button onClick={e => {e.preventDefault(); delete_data(one.id);}}>刪除資料</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

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
            <Myform />
            <DataTable />
        </DataContext.Provider>
    )
}
