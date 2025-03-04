import { useEffect, useState } from "react";
import { fetchComposers } from "./api";
import { Link } from "react-router-dom";
import "./ComposerList.css"; // Add a CSS file for styling

const ComposerList = () => {
    const [composers, setComposers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComposers().then((data) => {
            setComposers(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading composers...</p>;

    return (
        <div className="composer-list">
            <h1>Composers</h1>
            <ul>
                {composers.map((composer) => (
                    <li key={composer.id} className="composer-item">
                        <Link to={`/composer/${composer.id}`}>
                            <img src={composer.image} alt={composer.complete_name} className="composer-image" />
                            <div className="composer-info">
                                <h2>{composer.complete_name}</h2>
                                <p>{composer.genre}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComposerList;
