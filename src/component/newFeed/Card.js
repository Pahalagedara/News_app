import React from 'react'

const Card = (props) => {
    const { title,urlToImage,description,publishedAt,url} = props.n;


    return (
        <div className="newsCard">
            <h2 className="title">{title}</h2>
            <div className="newsBody">
                <img src={urlToImage}
                    alt="image"
                    height="200rem"
                />

                <div className="des">
                    <p>{description} </p>                  
                    <a href={url} className="seeMore">See More</a>
                </div>
            </div>
        </div>
    )
}

export default Card
