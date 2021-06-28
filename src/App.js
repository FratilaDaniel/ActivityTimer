import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import ContentGrid from "./Components/ContentGrid/ContentGrid";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="general-container">
            {/* navbar */}
            <Navbar/>
            {/* content grid*/}
            <ContentGrid/>
            {/* footer */}
            <Footer/>
        </div>
    );
}

export default App;
