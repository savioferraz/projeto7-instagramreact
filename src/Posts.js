// Component Posts

function PostItens(props) {
    return (
        <div class="post">
            <div class="title">
                <h1><img src={props.profileImg} /><p>{props.profileName}</p></h1>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img src={props.postImg} />
            <div class="label">
                <div class="label_icons">
                <div>  
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>    
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                </div>
                <div class="label_text">
                    <img src={props.likedImg} />
                    <p>Curtido por</p>
                    <h1>{props.likedName}</h1>
                    <p>e</p>
                    <h1>outras 101.523 pessoas</h1> 
                </div>
            </div>
        </div>
    )
}

function Posts() {
    return (
    <div>
        <PostItens profileImg="images\perfil\perfil2.png" profileName="meowed" postImg="images\posts\post1.png" likedImg="images\perfil\perfil6.png" likedName="respondeai" />
        <PostItens profileImg="images\perfil\perfil3.png" profileName="barked" postImg="images\posts\post2.png" likedImg="images\perfil\perfil11.png" likedName="adorable_animals" />
        <PostItens profileImg="images\perfil\perfil2.png" profileName="meowed" postImg="images\posts\post3.png" likedImg="images\perfil\perfil6.png" likedName="respondeai" />
    </div>
    )
}

export default Posts;