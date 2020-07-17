import React, {useEffect, useState} from 'react'
import { MdFavoriteBorder,MdFavorite , MdChatBubbleOutline, MdRepeat, MdMailOutline } from 'react-icons/md';

// imports
import './style.css'

const Tweet = () => {
    const [rtColor, setRtColor] = useState({
        toggle: false,
        color: '' 
    })

    //const Interface
    interface Item {
        title: string,
        id: number,
        image_url: string
    }

    const colorPalettes = {
        grayDefault: 'rgb(95, 95, 95)',
        grayHover: 'rgb(128, 128, 128)',
        redClicked: 'rgb(231, 31, 98)',
        greenClicked: 'rgb(89, 172, 69)',
    }

    
    const interactionHandler = (icon:Object) => {
        
        //trigger animation
        return //Color
    }


    return(
        <div id="content">
            <div>
                <span id="bold">Hyrule Entrepreneurs </span>
                <span id="gray">@HyruleEntrepreneurs - Oct 27</span>
            </div>
            <div>
                <p id="title">
                Easy Rupees With An Online Business? Start Here.
                </p>
            </div>
            <div id="author">
                {"{ "}
                     author: <a href="https://zelda.gamepedia.com/Link">@LinkTheChad</a> 
                {" }"}
            </div>
            <div id="cover">
                <img id="cover-top" src="https://i.ytimg.com/vi/9CdbcFyE1UE/maxresdefault.jpg" alt=""/>
                <div id="cover-bottom" >
                    <p id="title">
                        Easy Rupees With An Online Business? Start Here.
                    </p>
                    <p id="description">
                        Want to learn how to build an online business to finally win that financial independence? The first step is getting the right business model.
                    </p>
                    <p id="link">
                        chad.io
                    </p>
                </div>
            </div>
            <div id="higher-order-components" style={{color: colorPalettes.grayDefault}}>
                <MdChatBubbleOutline size={'2em'} className="icon" />
                <span>2</span>
                <MdRepeat size={'2em'} className="icon" onClick={() => interactionHandler(rtColor)} />
                <span>5</span>
                <MdFavoriteBorder size={'2em'} className="icon"/>
                <span>12</span>
                <MdMailOutline size={'2em'} className="icon"/>
            </div>
        </div>
    )
}


export default Tweet