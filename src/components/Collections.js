import React from 'react';
import { Link } from 'react-router-dom';

export default function Collections({ coll, size }) {
  return (
    <ul className={size === 'large' ? "coll large" : 'coll'}>
      {coll.map((col, i) => (
        <li key={i}><Link to="/shop">{col}</Link></li>
      ))}
    </ul>
  )
}
