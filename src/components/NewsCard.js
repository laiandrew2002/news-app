import React from 'react'

 const NewsCard = (props) => {
     const { source,title,description,url,image,publishtime,content }=props;
    console.log(props.publishtime.slice(0,10))

  return (
    
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src={image} className="db w-100 br2 br--top" alt="news picture" />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <a href={url} target="_blank" name="news" rel="noopener noreferrer"> 
              <h1 className="f5 f4-ns mv0">{title}</h1>
            </a>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">{}</h2>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
        {description}
        </p>
        <p className=' d-flex justify-content-end '>
          <i className="f6 gray far fa-calendar-alt"> {publishtime.slice(0,10)}</i>
         
        </p>
      </div>
    </article>
    
  )
}
export default NewsCard;