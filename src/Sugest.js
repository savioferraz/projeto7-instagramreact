// Component Sugest

function SugestItens(props) {
    return (
        <div class="sugest_body">
            <div class="sugest_link">
                <img src={props.profileImg} />
                    <div class="sugest_content">
                        <h1>{props.profileName}</h1>
                        <h2>Segue você</h2>
                    </div>
                    <div class="sugest_follow">
                        Seguir
                    </div>
            </div>
        </div>
    )
}

function Sugest() {
    return (
        <div class="sugest">    
            <div class="sugest_header">
                <div class="sugest_title">Sugestões para você</div>
                <div class="sugest_all">Ver tudo</div>
            </div>
            <SugestItens profileImg="images\perfil\perfil13.png" profileName="bad.vibes.memes" />
            <SugestItens profileImg="images\perfil\perfil9.png" profileName="chibirdart" />
            <SugestItens profileImg="images\perfil\perfil10.png" profileName="razoesparaacreditar" />
            <SugestItens profileImg="images\perfil\perfil11.png" profileName="adorable_animals" />
            <SugestItens profileImg="images\perfil\perfil12.png" profileName="smallcutecats" />
        </div>
    )
}

export default Sugest;