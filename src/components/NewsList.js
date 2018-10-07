import React from 'react'
import NewsCard from './NewsCard'
import TopNewsCard from './TopNewsCard'

 const Newslist = (props) => {
     const{ list, toplist } = props;
    
  return (
    <div>

      <TopNewsCard toplist={toplist}/>
    <div className='flex flex-wrap'>
      {
        list.map((e,i) => {
          return (
            <NewsCard  
              key={i} 
              source={e.source.name} 
              title={e.title} 
              description={e.description}
              url={e.url}
              image={e.urlToImage}
              publishtime={e.publishedAt}
              content={e.content}
            />
          )
        })
      }
    </div>
    </div>
    
  )
}
export default Newslist;