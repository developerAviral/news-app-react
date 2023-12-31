import React from 'react'

const NewsItem = (props) => {



        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (


            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small>
                </div>
            </div>
        )
    }

export default NewsItem
