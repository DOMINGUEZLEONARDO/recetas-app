import { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from '../../provider/RecipeContext'




export const Tags = () => {

    const { tags } = useContext(RecipeContext);

    return (
        <div className='row'>
            <div className='cont_tags com-secondary-tag hlp-marginBottom-20'>
                {tags && tags.length > 0 ? (
                    tags.map(tag => (
                        <Link to={`/tema/${tag.slug}`} key={tag.slug}>{tag.text}</Link>
                    ))
                ) : (
                    <p>Cargando...</p>
                )

                }
            </div>
        </div>
    )
}

