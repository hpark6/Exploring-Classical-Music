import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Classical Music Explorer</h1>
            <Link to="/composers">Explore Composers</Link>
        </div>
    );
};

export default Home;
