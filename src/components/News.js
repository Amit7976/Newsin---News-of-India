import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=72ab1564ef2a4f0c850f626cc928d61b&page=1";
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
}
handlePravClick = async ()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72ab1564ef2a4f0c850f626cc928d61b&page=${this.state.page -1}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles})
}
handleNextClick = async ()=>{
  if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

  }
  else{
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72ab1564ef2a4f0c850f626cc928d61b&page=${this.state.page + 1}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles})
  }
}
  render() {
    return (
      <>
      <div className="container my-5">
        <div className="row">
          {this.state.articles.map((element)=>{
          return <div className="col-md-3 my-3" key={element.url} >
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} Url={element.url} publishedAt={element.publishedAt} author={element.author} sourceN={element.source.name}/>
          </div>
          })}
          </div>
        </div>
            <div className='container d-flex justify-content-between mb-5'>
            <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handlePravClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </>
    )
  }
}
