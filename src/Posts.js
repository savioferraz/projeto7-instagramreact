// Component Posts

import React from "react";

function Posts() {

    const [likeIcon, setLikeIcon] = React.useState("heart-outline");
    const [likeColor, setLikeColor] = React.useState("color:black");

    function Like() {
            setLikeIcon("heart");
            setLikeColor("color:red");
    }

    function Dislike () {
        if (likeIcon === "heart") {
            setLikeIcon("heart-outline");
            setLikeColor("color:black");
        }
    }

    const postsItens = [
        {profileImg: "./images/perfil/perfil2.png", profileName: "meowed", postImg: "./images/posts/post1.png", likedImg: "./images/perfil/perfil7.png", likedName: "filomoderna"},
        {profileImg: "./images/perfil/perfil3.png", profileName: "barked", postImg: "./images/posts/post2.png", likedImg: "./images/perfil/perfil11.png", likedName: "adorable_animals"},
        {profileImg: "./images/perfil/perfil2.png", profileName: "meowed", postImg: "./images/posts/post3.jpg", likedImg: "./images/perfil/perfil8.png", likedName: "memeriago"},
        {profileImg: "./images/perfil/perfil4.png", profileName: "nathanwpyle", postImg: "./images/posts/post4.jpg", likedImg: "./images/perfil/perfil5.png", likedName: "wawawiwac"},
        {profileImg: "./images/perfil/perfil1.png", profileName: "9gag", postImg: "./images/posts/post5.jpg", likedImg: "./images/perfil/perfil6.png", likedName: "respondeai"},
    ];

    const postItensJSX = postsItens.map((item) => {
        return (
            <div class="post">
                <div class="title">
                    <h1><img src={item.profileImg} alt="profileImg" /><p>{item.profileName}</p></h1>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                <img src={item.postImg} alt="postImg" onClick={Like}/>
                <div class="label">
                    <div class="label_icons">
                        <div>  
                            <ion-icon name={likeIcon} Style={likeColor} onClick={() => {Like(); Dislike();}}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>    
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="label_text">
                        <img src={item.likedImg} alt="likedImg"/>
                        <p>Curtido por</p>
                        <h1>{item.likedName}</h1>
                        <p>e</p>
                        <h1>outras 101.523 pessoas</h1> 
                    </div>
                </div>
            </div>
        )
    })

    return (
    <div>
        {postItensJSX};
    </div>
    )
}

// export default Like;
export default Posts;