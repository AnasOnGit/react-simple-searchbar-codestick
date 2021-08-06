import React,{useState} from "react";
import {FiSearch} from "react-icons/fi"
import {RiCloseCircleLine} from "react-icons/ri"
import Results from "../Results";
import ClickAwayListener from 'react-click-away-listener';
import searchList from "../searchList.json"

const SearchBar = () => {
    const [searchTerm,setSearchTerm] = useState("")
    const [focus,setFocus] = useState(false)
    
    return(
        <div>
                <div className={searchTerm === "" ? "searchbar" : "searchbar result-list"}>
                <FiSearch className="search-icon" onClick={()=>searchTerm ==="" ? null : alert("Search")}/>
                <ClickAwayListener onClickAway={()=>setFocus(false)}>
                    <input placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onClick={()=>setFocus(true)} />
                </ClickAwayListener>
                <RiCloseCircleLine className="close-icon" onClick={()=>setSearchTerm("")} />
            </div>
            {
                focus?
            searchList.filter((val)=>{
                if(searchTerm === ""){
                    return null
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }else{
                    return null
                }
            }).slice(0,5).map((val,index,arr)=>{
                let cssClass = "results"
                if(index === 0 && arr.length-1 === 0){
                    cssClass = "results last-result"
                }else if(index === arr.length-1){
                    cssClass = "results last-result"
                }else{
                    cssClass = "results"
                }
                return (<Results result={val.title} key={index} cssClass={cssClass} onClick={()=>{setFocus(false);setSearchTerm(val.title)}} />)
            })
                    
                :null

            }
        </div>
    )
};

export default SearchBar