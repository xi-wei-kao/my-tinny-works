import ListProvider from "./lib/js/01.ListProvider";

window.addEventListener("load", () => {
    const root = ReactDOM.createRoot(
        document.querySelector(".root")
    );
    root.render(<ListProvider/>)
})
