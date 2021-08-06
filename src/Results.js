import React from "react";
import {FiSearch} from "react-icons/fi"

const Results = ({result,cssClass,onClick}) => {
    return(
        <div className={cssClass} onClick={onClick}>
            <FiSearch className="search-icon"  />
            <a href={"https://agreedrunawaysalty.com/p6t62xjn?key=71cc1dbf465e448cdcfd3d8df6c6c73a"}>{result}</a>
        </div>
    )
}

export default Results;