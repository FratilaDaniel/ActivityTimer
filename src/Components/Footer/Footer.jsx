import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer(){
    return (
        <div className="footer-container">
            <div className="links-container">
                <a href="https://www.linkedin.com/in/daniel-fratila-369910149/" aria-label="github"><LinkedInIcon/></a>
                <a href="https://github.com/FratilaDaniel" aria-label="linkedIn"><GitHubIcon/></a>
            </div>
            <p className="credits">©{new Date().getUTCFullYear()} Daniel Fratila</p>
        </div>
    );
}

export default Footer;
