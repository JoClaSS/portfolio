import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            
            <a href="https://www.linkedin.com/in/jos%C3%A9-claercio-455367165/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/JoClaSS">
                <GitHubIcon/>
            </a>
    
        </div>
    )
}