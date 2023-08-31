//rfce
import React, { useState } from 'react'

function Control({onToggle,onSearch,onSortBy}) {

    const [keyword, setKeyWord ]= useState('');

    const [sortBy, setSortBy]=useState('Name ASC');
    //
    const handleSort=(param)=>{
        setSortBy(param);
        onSortBy(param);
    }
    // tìm kiếm
    const handleSearch=()=>{
        onSearch(keyword);
    }
    
    const handleToggle=()=>{
        onToggle(true);
    }

    
   
    return (
        <div className="row">
            {/* SEARCH : START */}
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"

                        placeholder="Search for..."
                        name='keyword'
                        value={keyword}
                        onChange={(ev)=>setKeyWord(ev.target.value)}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button"
                        onClick={handleSearch}
                        >
                            Go!
                        </button>
                    </span>
                </div>
            </div>
            {/* SEARCH : END */}
            {/* SORT : START */}
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown">
                    <button
                        className="btn btn-default dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a role="button" onClick={()=>handleSort("Name ASC")}>Name ASC</a>
                        </li>
                        <li>
                            <a role="button" onClick={()=>handleSort("Name DESC")}>Name DESC</a>
                        </li>
                        <li role="separator" className="divider" />
                        <li>
                            <a role="button" onClick={()=>handleSort("Level ASC")}>Level ASC</a>
                        </li>
                        <li>
                            <a role="button" onClick={()=>handleSort("Level DESC")}>Level DESC</a>
                        </li>
                    </ul>
                    <span className="label label-success label-medium">{sortBy}</span>
                </div>
            </div>
            {/* SORT : END */}
            {/* ADD : START */}
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button type="button" className="btn btn-info btn-block"
                onClick={handleToggle}
                >
                    Add Task
                </button>
            </div>
            {/* ADD : END */}
        </div>
    )
}

export default Control