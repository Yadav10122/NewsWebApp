import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    type: '',
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    type: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResult: 0

    }
    document.title = `${this.capitalizeFirstLetter(this.props.type)} KalTak News`;
  }

  async update() {
    
    const url =   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.type}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    
    let parseData = await data.json();
    
    this.setState({
      articles: parseData.articles,
      loading: false,
      totalResult: parseData.articles,

    });
    
  }

  async componentDidMount() {
    this.update();
  }

  

 



  fetchMoreData = async () => {
   
    const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.type}&apiKey=d6a8092596d7410b8d54ca49a7560a34&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
       articles: this.state.articles.concat(parseData.articles),
      loading: false,
      totalResult: parseData.articles,

    });
  };



  render() {


    return (
      <div className='container my-3 '>
        <h2 className='text-center'>News-Monkey Top Headlines</h2>
        {this.state.loading &&  <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}>

          <div className="row">
            {this.state.articles.map((element,index) => {
              return <div className="col-md-3 mx-3 my-3" key={index}>
                <Newsitem title={element.title?element.title:""} description={element.description ? element.description + "......" : ""} imageUrl={element.urlToImage ? element.urlToImage:""} newsUrl
                  ={element.url ? element.url :""} author={element.author?element.author:""} date={element.publishedAt?element.publishedAt:""} />
              </div>

            })}
          </div>


        </InfiniteScroll>
        
      </div>
    )
  }
}

export default news
