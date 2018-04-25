import React, { Component } from 'react';

import '../Styles/SearchBar.css';

class SearchBar extends Component {
    constructor () { 
    super()
}
    render() {
        return(
            <div className="searchbar-wrapper" fixed="true">
                <p>Im a search bar </p>
                <form action="">
                    <input type="text" placeholder="start your search"/>
                    <button >Search</button>
                </form> 
            </div>
        )
    }
}


export default SearchBar;