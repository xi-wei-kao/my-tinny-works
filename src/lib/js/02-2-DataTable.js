import React from "react";

export default function DataTable({ useData }){
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
