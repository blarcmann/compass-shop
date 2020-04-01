import React from 'react';

export default function Filter({ options }) {
  return (
    <div className="sorting">
      <select name="sort" className="form-item">
        {options.map((option, i) => (
          <option value={option} key={i}>{option}</option>
        ))}
      </select>
    </div>
  )
}
