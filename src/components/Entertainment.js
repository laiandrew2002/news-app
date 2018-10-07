import React, { Component } from 'react';
import NewsList from './NewsList'
import '../App.css';

class Entertainment extends Component {
  constructor(){
    super();
    this.state={
        list:[],
        toplist:[],
      }
  }

async componentDidMount(){
   
    const api_key = '&apiKey=a23409695d934c95a1b8d3f8e943aae3';
    const api_call = await fetch(`https://newsapi.org/v2/top-headlines?sources=daily-mail${api_key}`);
    const resp = await api_call.json();
    // console.log(resp);
    

    const api_call2 = await fetch(`https://newsapi.org/v2/top-headlines?sources=mashable${api_key}`);
    const resp2 = await api_call2.json();
    let entertainment = resp2.articles.filter((e,i)=>
    e.urlToImage  
    )
    resp.articles = resp.articles.concat(...entertainment);

    this.setState({list: resp.articles.filter((e,i) =>i>2 )});
    this.setState({toplist:resp.articles.filter((e,i) =>i<3 )});
}

  render() {
    return (
      <div className="">
        <NewsList list={this.state.list} toplist={this.state.toplist}/>
      </div>
    );
  }


  
}

export default Entertainment;