import React from 'react'

const Layout = ({tittle = "tittle", description="Description", className, children}) => {
    return (
        <div className={className}>
        
       <div className="p-5 mb-4 rounded-3 text-light bg-dark">
  <div className="container-fluid py-5">
    <h1 className="display-5 fw-bold">{tittle}</h1>
    <p className="col-md-8 fs-4">{description}</p>
    <button className="btn btn-primary btn-lg" type="button">Example button</button>
  </div>
</div>
<main>
    {children}
</main>
</div>
    )
}


export default Layout
