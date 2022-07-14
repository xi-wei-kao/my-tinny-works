const DataContext = React.createContext();
const useData = () => React.useContext(DataContext);

export default function useDataHook() {
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
}
