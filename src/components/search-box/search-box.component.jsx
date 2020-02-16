import React from 'react';
import './search-box.styles.css';
export const SearchBox = ({placeholder,handlername}) => (
    <input type='search'
        className='search'
        placeholder={placeholder}
        onChange={handlername}>
    </input>
);