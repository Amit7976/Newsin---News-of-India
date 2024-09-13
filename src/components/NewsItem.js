import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, Url, publishedAt, author, sourceN} = this.props;
    return (
      <>
      <div className="card" style={{width: "18rem", width: "18rem" ,height: "430px" , overflow: "hidden"}}>
        <img src={!imageUrl?"https://images.indianexpress.com/2022/12/edit-36-48.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h6 style={{lineHeight:"10px"}}><small style={{fontSize: "8px"}}>{publishedAt}</small></h6>
          <h6 className="card-title"> <b> {title}</b></h6>
          <dd className="card-text" style={{fontSize: "10px"}}>{description}</dd>
          <h6  style={{lineHeight:"5px"}}><small style={{fontSize: "8px"}}>{sourceN}</small><small style={{fontSize: "8px"}}> - {author}</small></h6>
          <a href={Url} target="_blank" className="btn btn-sm btn-primary" style={{position: "absolute",bottom: "10px"}}>Read more..</a>
        </div>
      </div> 
      </>
    )
  }
}
