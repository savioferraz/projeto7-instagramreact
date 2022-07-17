import ReactDOM from "react-dom";

import Top from "./Top";
import Main from "./Main";
import Bottom from "./Bottom";

function App() {
    return (
        <div>            
            <Top />
            <Main />
            <Bottom />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));