import { createContext, useEffect, useState } from "react"
import { requestApi } from '../api'



export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await requestApi.get('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/');
                const recipeTags = response.articles;                

                const filteredArticles = recipeTags.filter(article => article.subtype === '7');
                setArticles(filteredArticles);

                const tagCounts = recipeTags.reduce((acc, articles) =>{
                    articles.taxonomy.tags.forEach(tag =>{
                        const {slug} = tag;
                        acc[slug] = {...tag, count: (acc[slug]?.count || 0) +1};
                    });
                    return acc;
                },{})

                const tagArray = Object.values(tagCounts);
                tagArray.sort((a, b) => b.count - a.count);
                const topTags = tagArray.slice(0, 10);
                setTags(topTags);               

                const ingredients = {};
                tagArray.forEach(tag => {
                    ingredients[tag.slug] = tag;
                });
               
            } catch (error) {
                console.error('Error al obtener datos', error);
            }
        };
        fetchData();
    }, []);

   

    const contextValue = { articles, tags };

    return (
        <RecipeContext.Provider value={contextValue}>
            {children}
        </RecipeContext.Provider>
    );
};
