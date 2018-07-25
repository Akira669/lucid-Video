import React from 'react'

//style
import '../css/Search.css';

const Search = ({onChange, onKeyUp, value}) => (
    <input
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={value}
        placeholder="Buscar..."
    />
)

export default Search;