import { createContext, useEffect, useState } from "react"
import { requestApi } from '../api'
import { getFrequentTags } from "../helpers";



export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { articles } = await requestApi.get('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/');
                
                const topTags = getFrequentTags(articles)
                setTags(topTags);

                const filteredByCondition = articles.filter(article => article.subtype === '7')
                setFilteredArticles(filteredByCondition);
               
            } catch (error) {
                console.error('Error al obtener datos', error);
            }
        };
        fetchData();
    }, []);

   

    const contextValue = { filteredArticles, tags };

    return (
        <RecipeContext.Provider value={contextValue}>
            {children}
        </RecipeContext.Provider>
    );
};
