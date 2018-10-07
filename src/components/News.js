import React, { Component } from 'react';
import NewsList from './NewsList'

class News extends Component {
    constructor(){
        super();
        this.state={
          list:[],
          toplist:[],
        }
    
      }
    
    async componentDidMount(){
    
        const api_key = '&apiKey=a23409695d934c95a1b8d3f8e943aae3';
        const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=sg${api_key}`);
        const resp = await api_call.json();

        resp.articles=resp.articles.filter((e,i)=>
            e.urlToImage  
        )
        this.setState({list: resp.articles.filter((e,i) =>i>2 )});
        this.setState({toplist:resp.articles.filter((e,i) =>i<3 )});
        // console.log(this.state.list);
        // console.log(this.state.toplist);
        // console.log(this.state.toplist[2])
    }

  render() {
    return (
      <div className="">
       <NewsList list={this.state.list} toplist={this.state.toplist}/>
      </div>
    );
  }
  
}

export default News;
