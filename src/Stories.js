// Component Stories

function Stories() {

    const storiesItens = [
        {profileImg: "./images/perfil/perfil1.png", profileName: "9gag"},
        {profileImg: "./images/perfil/perfil2.png", profileName: "meowed"},
        {profileImg: "./images/perfil/perfil3.png", profileName: "barked"},
        {profileImg: "./images/perfil/perfil4.png", profileName: "nathanwpyle"},
        {profileImg: "./images/perfil/perfil5.png", profileName: "wawawiwac"},
        {profileImg: "./images/perfil/perfil6.png", profileName: "respondeai"},
        {profileImg: "./images/perfil/perfil7.png", profileName: "filomoderna"},
        {profileImg: "./images/perfil/perfil8.png", profileName: "memeriago"},   
    ]

    const storiesItensJSX = storiesItens.map((item) => {
        return (
            <div class="stories_content">                   
                <img src="images/stories_background.jpg" alt="stories_background" class="stories_bg" />           
                <img src={item.profileImg} alt="profileImg" class="stories_img" />                   
                <p>{item.profileName}</p>
            </div>
        )
    }) 
    

    return (
        <div class="stories">
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
            {storiesItensJSX};
         </div>
    )
}

export default Stories;