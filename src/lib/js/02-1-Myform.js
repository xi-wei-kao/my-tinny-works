import React from "react";

export default function Myform({ useData }){
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
