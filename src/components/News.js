import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) =>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const capatilizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(()=>{
    document.title = `${capatilizeFirstLetter(props.category)} - Aviral News`;
    updateNews();
    //eslint-disable-next-line
  }, [])

const updateNews = async () => {
  props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
  setLoading(true);
  let data = await fetch(url);
  props.setProgress(30);
  let parsedData = await data.json();
  props.setProgress(70);
  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  props.setProgress(100);
}

const fetchMoreData = async () =>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };




//Commenting for Infinite scroll
  // handleNextClick = async () => {
  //   console.log('Next');
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

  //   }
  //   else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f960c2cb21be445dbd8241a124fe7aa0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading: true});
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({ page: this.state.page + 1, articles: parsedData.articles, loading: false });
  //   }
  //   console.log(this.state.page);
  // }

  // handlePreviousClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f960c2cb21be445dbd8241a124fe7aa0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: false });

  // }


    return (

      <>
        <h2 className="text-center" style={{ margin: '35px 0', marginTop:'90px'}}>Aviral's News App - Top {capatilizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        <div className="container">
        <div className="row my-2">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>

              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}
                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        </div>  
        </InfiniteScroll>

{/* Commenting for Infinite Scroll
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} className="btn btn-primary mx-2" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-primary mx-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}

      </>

    )
  }


News.defaultProps ={
  country: 'in',
  pageSize: 6,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
