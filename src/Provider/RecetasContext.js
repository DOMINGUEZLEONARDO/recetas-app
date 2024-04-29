import { createContext, useEffect, useState } from "react"
import { requestApi } from "../components/api";


export const RecetasContext = createContext();

export const RecetasProvider = ({ children }) => {
    const [notas, setNotas] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respuesta = await requestApi.get('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/');
                const recetasTags = respuesta.articles;
                console.log('recetas', recetasTags);

                const recetas = recetasTags.filter(article => article.subtype === '7');
                setNotas(recetas);

                const tagCounts = {};
                recetasTags.forEach(nota => {
                    nota.taxonomy.tags.forEach(tag => {
                        const { slug, text } = tag;
                        if (!tagCounts[slug]) {
                            tagCounts[slug] = { slug, text, count: 0 };
                        }
                        tagCounts[slug].count++;
                    });
                });

                const tagArray = Object.values(tagCounts);
                tagArray.sort((a, b) => b.count - a.count);
                const topTags = tagArray.slice(0, 10);
                setTags(topTags);

                tagArray.forEach(tag => {
                    console.log('etiquetas', tag);
                });

                const ingredientes = {};
                tagArray.forEach(tag => {
                    ingredientes[tag.slug] = tag;
                });
                console.log('ingredientes', ingredientes);
            } catch (error) {
                console.error('Error al obtener datos', error);
            }
        };

        fetchData();
    }, []);

    console.log(tags);

    const contextValue = { notas, tags };

    return (
        <RecetasContext.Provider value={contextValue}>
            {children}
        </RecetasContext.Provider>
    );
};
