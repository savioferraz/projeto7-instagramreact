// Component Profile

function ProfileContent(props) {
    return (
        <div class="profile">
            <img src={props.profileImg} alt="profileImg"/>
            <div class="profile_name"> 
                <div class="profile_link">{props.profileUser}</div>
                <div class="profile_label">{props.profileName}</div>
            </div>
        </div>
    )
}

function Profile(){
    return (
        <ProfileContent profileImg="./images/perfil/perfil9.png" profileUser="catanacomics" profileName="Catana" /> 
    )
}

export default Profile;