import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (


            <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
                    {source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small>
                </div>
            </div>
        )
    }
}

export default NewsItem
