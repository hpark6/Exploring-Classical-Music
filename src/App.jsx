import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ComposerList from "./ComposerList";
import ComposerWorks from "./ComposerWorks";

function App() {
    return (
        <Router basename = "/Exploring-Classical-Music">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/composers" element={<ComposerList />} />
                <Route path="/composer/:id" element={<ComposerWorks />} />
            </Routes>
        </Router>
    );
}

export default App;