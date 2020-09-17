import React from  'react'


const DropDownFilter = () => {

  return (
    <div className="field">
      <div className="control">
        <div className="select">
          <select>
            <option value="all">Select Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  )

}

export default DropDownFilter