import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import ContentGrid from "./Components/ContentGrid/ContentGrid";


function App() {
    return (
        <div className="general-container">
            {/* navbar */}
            <Navbar/>
            {/* content grid*/}
            <ContentGrid/>
            {/* footer */}
        </div>
    );
}

export default App;
