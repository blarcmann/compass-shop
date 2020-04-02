import React from 'react';
import { Link } from 'react-router-dom';

export default function PageBreadcrumb({ title, paths }) {
  return (
    <div className="container-fluid">
      <div className="brc-content">
        <h1 className="title">{title}</h1>
        <div className="br-crumb">
          {paths.map((path, index) => (
            <span key={index}>
              <Link to={`${path}`}>{path}</Link>
              <span className="divider">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
