import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination() {
  return (
    <div className="pagination">
      <Link to="/shop">Prev</Link>
      <Link to="/shop">1</Link>
      <Link to="/shop">2</Link>
      <Link to="/shop">Next</Link>
    </div>
  )
}
