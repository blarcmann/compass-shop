import React from 'react'

export default function Searchbar() {
  return (
    <div>
      <div className="searchbar">
        <input type="search" name="search" placeholder="search..." className="form-item" />
        <img src={require('../assets/images/search.png')} alt="*" />
      </div>
    </div>
  )
}
