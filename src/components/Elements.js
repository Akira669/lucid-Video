import React from 'react'

import Category from "./Category.js"

const ListCategory = ({searchUrl}) => {
    const arraycategory = [
        {title: 'Resultados de la busqueda ', url: searchUrl},
        {title: 'Series de Tv ', url: 'discover/tv?sort_by=popularity.desc&page=1'},
        {title: 'Suspenso Horror', url: 'genre/27/movies?sort_by=popularity.desc&page=1'},
        {title: 'Ciencia Ficción', url: 'genre/878/movies?sort_by=popularity.desc&page=1'},
        {title: 'Fantasía y Comedia', url: 'genre/35/movies?sort_by=popularity.desc&page=1'}
    ]

    return (arraycategory.map(({title, url}, index) => {
        return(
            <Category
                title={title}
                url={url}
                key={index}
            />
        )
    }))
}

export default ListCategory