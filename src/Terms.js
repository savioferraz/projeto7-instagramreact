// Component Terms
// Obs.: Os termos não foram colocados como arrayJSX pois tratam-se de elementos estáticos, que não serão puxados de uma API.
// Por esse motivo, decidi deixar como function props, pois achei ser mais rápido e prático do que criar arrays de objeto.

function TermsItens(props) {
    return (
        <a href={props.link}>{props.title}</a>
    )
}

function Terms() {
    return (
        <div class="terms">
            <TermsItens link="https://about.instagram.com/" title="Sobre" />
            <TermsItens link="https://help.instagram.com/" title="Ajuda" />
            <TermsItens link="https://about.instagram.com/blog/" title="Imprensa" />
            <TermsItens link="https://developers.facebook.com/docs/instagram" title="API" />
            <TermsItens link="https://www.instagram.com/about/jobs/" title="Carreiras" />
            <TermsItens link="https://www.instagram.com/legal/privacy/" title="Privacidade" />
            <TermsItens link="https://www.instagram.com/legal/terms/" title="Termos" />
            <TermsItens link="https://www.instagram.com/explore/locations/" title="Localizações" />
            <TermsItens link="https://help.instagram.com/" title="Contas mais relevantes" />
            <TermsItens link="https://help.instagram.com/" title="Hastags" />
            <TermsItens link="https://help.instagram.com/" title="Idiomas" />            
        </div>
    )
}

export default Terms;