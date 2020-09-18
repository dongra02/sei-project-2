import React from 'react'

const SearchPlant = (props) => {

  return (
    //  <>Hello World</>
    <div className="SearchForm">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input 
            className="input is-rounded" 
            type="search" 
            placeholder="Search filter..."
            value={props.searchQuery}
            onChange={props.filterPlants}
          />
        </div>
        <div className="control">
          {/* <button className="button is-info is-rounded">
            Search
          </button> */}
        </div>
      </div>
    </div>
  )

}

export default SearchPlant