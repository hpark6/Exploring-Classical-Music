import { useEffect, useState } from "react";
import { fetchComposers } from "./api";
import { Link } from "react-router-dom";

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
        <div>
            <h1>Composers</h1>
            <ul>
                {composers.map((composer) => (
                    <li key={composer.id}>
                        <Link to={`/composer/${composer.id}`}>{composer.complete_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComposerList;
