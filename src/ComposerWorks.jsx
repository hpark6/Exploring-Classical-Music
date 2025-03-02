import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComposerWorks } from "./api";

const ComposerWorks = () => {
    const { id } = useParams();
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComposerWorks(id).then((data) => {
            setWorks(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <p>Loading works...</p>;

    return (
        <div>
            <h1>Works</h1>
            <ul>
                {works.map((work) => (
                    <li key={work.id}>{work.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComposerWorks;
