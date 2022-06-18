import linkedIn from "../images/Linkedin.png"
import gitHub from "../images/GitHub.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={linkedIn} alt="Linkedin link" />
            <img src={gitHub} alt="GitHub link" />
        </div>
    )
}