import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className="my-3">
                <div className="card">

                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge rounded-pill bg-success" style={{ left: '90%', zIndex: '1' }}>
                            {source}</span>
                    </div>



                    <img src={imageUrl ? imageUrl : "https://www.indiafellow.org/blog/wp-content/uploads/2020/05/Marketplace-Lending-News.jpg "} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-success">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
