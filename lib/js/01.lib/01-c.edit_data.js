export default edit_data = (idVal, productVal, priceVal) => {
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