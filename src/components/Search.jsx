import React from 'react';
import "../componentsCSS/Search.css";
import SearchIcon from '@material-ui/icons/Search';

function Search(){
  return(
    <div className="searchbar" >
<input type="text" />
<SearchIcon className="searchIcon"/>
    </div>
  )
}
export default Search;
