import linkedIn from "../images/Linkedin.png"
import gitHub from "../images/GitHub.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/jcGrennan" >
                <img src={gitHub} alt="GitHub link" />
            </a>
            <a href="https://www.linkedin.com/in/jc-grennan">
                <img src={linkedIn} alt="Linkedin link" />
            </a>
        </div>
    )
}