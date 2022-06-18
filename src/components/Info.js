// importing my profile image from the images folder

import profile from "../images/profile.jpeg"
import email from "../images/Email.png"

/* composing and exporting the Info component 
inside a function component with JSX */

export default function Info() {
    return (
        <div className="info">
            
            <img className="info--profile" src={profile} alt="profile"/>
            <h1 className="info--name">J.C. Grennan</h1>
            <h2 className="info--title">Junior Frontend Developer</h2> 

            {/* an external link to my email so no need to use React Router */}
            <form action="mailto:jgrennan94@gmail.com" method="get">
                <button className="info--email">
                    <img src={email} alt=""/>Email
                </button>
            </form>

        </div>
    )
}