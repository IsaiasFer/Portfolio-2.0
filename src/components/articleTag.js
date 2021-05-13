import React from 'react'

function ArticleTag(props){
    return(
        <h5 className='article_tag'>
            {props.tag}
        </h5>
    )
}

export default ArticleTag