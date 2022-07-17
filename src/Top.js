// Component Top

function Top() {
    return (
    <div>
        <div class="top">
        <div class="top_left">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="images\logo.png" alt="logo" />
        </div>
        <input type="search" placeholder="Pesquisar" />
        <div class="top_right">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
        <div class="top_right_mob">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </div>
    </div>
    )
}

export default Top;