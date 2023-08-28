import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capatilizeFirstLetter(this.props.category)} - Aviral News`;
  }

  capatilizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48bf2df262704858b8fd1def666e9998&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  }

async updateNews(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48bf2df262704858b8fd1def666e9998&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
}

  fetchMoreData = async () =>{
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48bf2df262704858b8fd1def666e9998&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults, 
      loading: false});
    
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

  render() {
    return (

      <>
        <h2 className="text-center">Aviral's News App - Top {this.capatilizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
        <div className="container">
        <div className="row my-2">
          {this.state.articles.map((element) => {
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
}

export default News
