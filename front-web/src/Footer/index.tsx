import './styles.css';
import {ReactComponent as YoutubeIcon} from './icons/youtube.svg';
import {ReactComponent as LinkedinIcon} from './icons/linkedin.svg';
import {ReactComponent as InstagramIcon} from './icons/instagram.svg';
import React from 'react';


function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://linkedin.com/school/devsuperior" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/devsuperio.ig/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}
export default Footer;
