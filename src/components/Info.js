// importing my profile image from the images folder

import profile from "../images/profile.jpeg"

/* composing and exporting the Info component 
inside a function component with JSX */

export default function Info() {
    return (
        <div className="info">
            <img className="info--profile" src={profile} alt="profile"/>
            <h1 className="info--name">Joshua C. Grennan</h1>
            <h2 className="info--title">Junior Frontend Developer</h2>
            <button className="info--email">
                <img src="" alt=""/>Email
            </button>
        </div>
    )
}