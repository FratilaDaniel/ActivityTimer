import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer(){
    return (
        <div className="footer-container">
            <div className="links-container">
                <a href="https://www.linkedin.com/in/daniel-fratila-369910149/"><GitHubIcon/></a>
                <a href="https://github.com/FratilaDaniel"><LinkedInIcon/></a>
            </div>
            <p className="credits">©{new Date().getUTCFullYear()} Daniel Fratila</p>
        </div>
    );
}

export default Footer;
