const BASE_URL = "https://api.openopus.org";

// export const fetchComposers = async () => {
//     const response = await fetch(`${BASE_URL}/composer/list/epoch/all.json`);
//     const data = await response.json();
//     return data.composers;
// };
export const fetchComposers = async () => {
    const response = await fetch(`${BASE_URL}/composer/list/epoch/all.json`);
    const data = await response.json();
    return data.composers.map(composer => ({
        ...composer,
        image: composer.portrait || 'path/to/default/image.jpg' // Provide a default image path
    }));
};

export const fetchComposerWorks = async (composerId) => {
    const response = await fetch(`${BASE_URL}/work/list/composer/${composerId}/genre/all.json`);
    const data = await response.json();
    return data.works;
};