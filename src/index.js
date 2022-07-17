import ReactDOM from "react-dom";
import Top from "./Top";
import Bottom from "./Bottom";

function App() {
    return (
        <div>            
            <Top />
            <Bottom />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));s