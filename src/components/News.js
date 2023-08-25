import React from 'react'

const News =(props)=> {
 
    let {title, description,url,Imageurl,publishedAt,source}=props;
  
    return (
      <div>
        <div className="container">
        
            <div className="card mt-3 mb-2"style={{width:"20rem"}}>
  <img src={Imageurl} alt="...."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge bg-warning text-dark" style={{left:"90%",zIndex:"1"}}>
    {source}</span></h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary text-bg-dark d-flex justify-content-center" style={{width:"10rem",textAlign:"center"}}>Read More!</a>
    <p className="d-flex justify-content-end" style={{fontSize:"8px",marginTop:"10px"}}>{publishedAt}</p>
  </div>
</div>
            
        </div>

      </div>
    )
  }
export default News
