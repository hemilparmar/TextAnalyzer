import React, { Component } from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props) {
        super(props)
        console.log("This is constructor from news componenet")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `DailyBugle - ${this.capitalize(this.props.category)} News`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b30a2082fe049588a718ccc4e8fd4dd&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)

        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,

        })
    }

    async componentDidMount() {
        this.updateNews()
    }

    // handlePreviousClick = async () => {


    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews()
    // }

    // handleNextClick = async () => {

    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews()
    // }

    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 })

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b30a2082fe049588a718ccc4e8fd4dd&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)

        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,


        })

    };



    render() {
        console.log("render");
        return (

            <>
                <h1 className="text-center" style={{ margin: '35px', marginTop: '90px' }}><i>DailyBugle - </i> Top {this.capitalize(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >

                    <div className="container">


                        <div className="row">

                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}



                        </div>
                    </div>
                </InfiniteScroll>


            </>


        )
    }
}

export default News
