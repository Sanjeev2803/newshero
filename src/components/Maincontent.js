import React, { useState,useEffect } from 'react';
import breakingImage from '../images/breaking.jpg';
import GifComponent from '../components/Gif';
import News from '../components/News';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const Maincontent=(props)=>  {
  

  const[articles,setarticles]=useState([])
  const[pages,setpages]=useState(1)
  const[isloading,setisloading]=useState(true)
  const[totalResults,settotalResults]=useState(0)
 
  const pageSize=8

  const updatenews=async() =>{
    try {
      props.setprogress(10)
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${pages}&pageSize=${pageSize}`;
      let urlResponse = await fetch(url);
      let parsedResponse = await urlResponse.json();
      let filteredArticles = parsedResponse.articles.filter(article => article.url);
     setarticles(filteredArticles)
     settotalResults(parsedResponse.totalResults)
     setisloading(false)
     
      props.setprogress(100)
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };
  useEffect(() => {
    updatenews();
  }, []);
  const fetchmoredata = async () => {
    try {
      let nextpage=pages+1
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${nextpage}&pageSize=${pageSize}`;
      let urlResponse = await fetch(url);
      let parsedResponse = await urlResponse.json();
      
        let filteredArticles =  parsedResponse.articles.filter(article => article.url) 
      
      setarticles(articles.concat(filteredArticles))
      setpages(nextpage)
      settotalResults( parsedResponse.totalResults)
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  
  };

  
    return (
      <>
       {console.log("Rendering with articles:", articles)}
        <div className="container text-capitalize">
          <h1 className="d-flex justify-content-center my-1">Top {props.category} Headlines Today</h1>
        </div>
        {/* {isloading && <GifComponent />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchmoredata}
          hasMore={articles.length < totalResults}
          loader={<GifComponent/>}
        >
          <div className="container">
            <div className="row">
              {articles.map(element => (
                <div className="col md-4" key={element.url + element.publishedAt }>
                  <News
                    title={element.title ? element.title : 'breaking news'}
                    description={element.description}
                    url={element.url}
                    Imageurl={!element.urlToImage ? breakingImage : element.urlToImage}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}
Maincontent.defaultProps = {
  country: 'in',
  category: 'general',
};

Maincontent.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
 export default Maincontent
