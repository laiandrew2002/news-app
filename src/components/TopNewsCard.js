import React from 'react'
import { Card, CardTitle, CardActions, } from 'react-mdl'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
// import Modal from './modal'

 const TopNewsCard = ({toplist}) => {

    let urlToImage=[]
    let url=[];
    let author=[]
    let description=[]
    let title=[]
    let content=[]
    if(toplist.length>0){
        for(let i=0;i<3;i++){
            url[i]=toplist[i].url;
            urlToImage[i]=toplist[i].urlToImage;
            author[i]=toplist[i].author;
            description[i]=toplist[i].description;
            title[i]=toplist[i].title;
            content[i]=toplist[i].content;
        }
    }

    
    
    
  return (
    <div className='row'>
      <div className='w-70-l w-70-m h-100'>
      
       <Flippy>
        <FrontSide>
          <Card shadow={0} style={{width: 'auto', height: '500px', background: `url(${urlToImage[0]}) center / cover`, margin: '0'}}>
            <CardTitle expand />
            <CardActions style={{height: 'auto', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
              <span style={{color: '#fff', fontWeight: '500'}}>
              <h5>{title[0]}</h5>
              </span>
            </CardActions>
          </Card>
        </FrontSide>
        <BackSide>
          <Card shadow={0} style={{width: 'auto', height: '500px', background: `url(${urlToImage[0]}) center / cover`, margin: '0'}}>
            <CardTitle expand />
            <CardActions style={{height: 'auto', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
              <span style={{color: '#fff', fontWeight: '500'}}>
              
              
              <p>{content[0]}</p>
              </span>
            </CardActions>
            <div className='text-center ma2'>
              <a href={url[0]} target="_blank" id='viewNews' rel="noopener noreferrer">
                <button type="button" className="btn btn-primary">View News</button>
              </a>
            </div>
          </Card>
        </BackSide>
       </Flippy>
      </div>
      

    
      <div className='w-30-l w-30-m'>
        <div className='h-50'>
          <Flippy>
            <FrontSide>
              <Card shadow={0} 
              style={{width: 'auto', height: '250px', background: `url(${urlToImage[1]}) center / cover`, margin: 'auto'}}>
                <CardTitle expand />
                <CardActions style={{height: 'auto', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                  <span style={{color: '#fff', fontSize: '12px', fontWeight: '500',}}>
                  <p>{title[1]}</p>
                  </span>
                </CardActions>
              </Card>
            </FrontSide>
            <BackSide>
              <Card shadow={0} 
              style={{width: 'auto', height: '250px', background: `url(${urlToImage[1]}) center / cover`, margin: 'auto'}}>
                <CardTitle expand />
                <CardActions style={{height: 'auto', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                  <span 
                    className='f7'
                    style={{color: '#fff', fontWeight: '500', }}>
                  <p>{description[1]}</p>
                  </span>
                </CardActions>
                <div className='text-center ma2'>
                  <a href={url[1]} target="_blank" id='viewNews' rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary">View News</button>
                  </a>
                </div>
              </Card>
            </BackSide>
          </Flippy>
        </div>

        <div className='h-50'>
          <Flippy >
            <FrontSide>
              <Card shadow={0} 
              style={{width: 'auto', height: '250px', background: `url(${urlToImage[2]}) center / cover`, margin: 'auto'}}>
                <CardTitle expand />
                <CardActions style={{height: 'auto', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                  <span style={{color: '#fff', fontSize: '12px', fontWeight: '500'}}>
                  <p>{title[2]}</p>
                  </span>
                </CardActions>
              </Card>
            </FrontSide>
            <BackSide>
              <Card shadow={0} 
              style={{width: 'auto', height: '250px', background: `url(${urlToImage[2]}) center / cover`, margin: 'auto'}}>
                <CardTitle expand />
                <CardActions style={{height: 'auto', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                  <span
                    className='f7' 
                    style={{color: '#fff', fontWeight: '500'}}>
                  <p>{description[2]}</p>
                  </span>
                </CardActions>
                <div className='text-center ma2'>
                  <a href={url[2]} target="_blank" id='viewNews' rel="noopener noreferrer">
                    <button type="button" className="btn btn-primary">View News</button>
                  </a>
                </div>
              </Card>
            </BackSide>
          </Flippy>
        </div>

      </div>
    </div>
  )

}
export default TopNewsCard;