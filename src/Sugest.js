// Component Sugest


function Sugest() {

    const sugestItens = [
        {profileImg: "./images/perfil/perfil9.png", profileName: "chibirdart"},
        {profileImg: "./images/perfil/perfil10.png", profileName: "razoesparaacreditar"},
        {profileImg: "./images/perfil/perfil11.png", profileName: "adorable_animals"},
        {profileImg: "./images/perfil/perfil12.png", profileName: "smallcutecats"},
        {profileImg: "./images/perfil/perfil13.png", profileName: "bad.vibes.memes"},  
    ]

    const sugestItensJSX = sugestItens.map((item) => {
        return (
            <div class="sugest_body">
                <div class="sugest_link">
                    <img src={item.profileImg} alt="profileImg"/>
                        <div class="sugest_content">
                            <h1>{item.profileName}</h1>
                            <h2>Segue você</h2>
                        </div>
                        <div class="sugest_follow">
                            Seguir
                        </div>
                </div>
            </div>
        )
    })

    return (
        <div class="sugest">    
            <div class="sugest_header">
                <div class="sugest_title">Sugestões para você</div>
                <div class="sugest_all">Ver tudo</div>
            </div>
            {sugestItensJSX}
        </div>
    )
}

export default Sugest;