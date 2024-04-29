import { useContext } from "react";
import { RecetasContext } from "../Provider/RecetasContext";
import { Link } from "react-router-dom";



export const Tags = () => {

    const { tags } = useContext(RecetasContext);

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

