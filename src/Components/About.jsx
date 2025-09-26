import photo from '../assets/photo.png'
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>Hello ! <br />How are You?</p>
            <img src={photo} alt="Pic" className="pic" />
        </div>
    )
}

export default About