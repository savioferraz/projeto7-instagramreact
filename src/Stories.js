// Component Stories

function StorriesItens(props) {
    return (
        <div class="stories_content">                   
            <img src="images\stories_background.jpg" class="stories_bg" />           
            <img src={props.profileImg} class="stories_img" />                   
            <p>{props.profileName}</p>
        </div>
    )
}

function Stories() {
    return (
        <div class="stories">
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
            <StorriesItens profileImg="images\perfil\perfil1.png" profileName="9gag" />
            <StorriesItens profileImg="images\perfil\perfil2.png" profileName="meowed" />
            <StorriesItens profileImg="images\perfil\perfil3.png" profileName="barked" />
            <StorriesItens profileImg="images\perfil\perfil4.png" profileName="nathanwpyle" />
            <StorriesItens profileImg="images\perfil\perfil5.png" profileName="wawawiwac" />
            <StorriesItens profileImg="images\perfil\perfil6.png" profileName="respondeai" />
            <StorriesItens profileImg="images\perfil\perfil7.png" profileName="filomoderna" />
            <StorriesItens profileImg="images\perfil\perfil8.png" profileName="memeriago" />                                                                            
         </div>
    )
}

export default Stories;