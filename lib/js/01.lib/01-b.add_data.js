export default add_data = (idVal, productVal, priceVal) => {
    setData([
        ...Data,
        {
            id:idVal,
            product:productVal,
            price:priceVal
        }
    ])
}