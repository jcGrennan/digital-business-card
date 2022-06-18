// importing icons for my footer links

import linkedIn from "../images/Linkedin.png"
import gitHub from "../images/GitHub.png"

/* composing and exporting the footer. 
 Again the links are external so no Router used. */

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <a href="https://github.com/jcGrennan" >
                    <img src={gitHub} alt="GitHub link" />
                </a>
                <a href="https://www.linkedin.com/in/jc-grennan">
                    <img src={linkedIn} alt="Linkedin link" />
                </a>
            </div>
            <div className="fullscreen-padding"></div>
        </div>
    )
}