import profilePic from './assets/icon.jpeg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profie picture"></img>
            <p>I amke Youtube vdieos and play video games</p>
        </div>
    );

}

export default Card