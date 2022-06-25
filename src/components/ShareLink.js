import React from 'react'
import Icon from './iconFunction';

function ShareLink(props){
    switch (props.name) {
        case 'twitter':
            return(
                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=`}>
                        <Icon svg={props.name} classes={`share_link ${props.name}`}/>
                    </a>
            )
        case 'facebook':
            return(
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                        <Icon svg={props.name} classes={`share_link ${props.name}`}/>
                    </a>
            )
        case 'linkedin':
            return(
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}>
                        <Icon svg={props.name} classes={`share_link ${props.name}`}/>
                    </a>
            )
        case 'email':
            return(
                <a href={`mailto:info@example.com?&subject=&cc=&bcc=&body=${window.location.href}%0A`}>
                        <Icon svg={props.name} classes={`share_link ${props.name}`}/>
                    </a>
            )
        default:
            break;
    }
}

export default ShareLink