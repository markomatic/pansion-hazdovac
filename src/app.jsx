'use strict';

import React from 'react';
import Sticky from 'react-sticky';
import { Link } from 'react-scroll';
import LandingPage from './components/landing-page/landing-page.jsx';
import GalleryPage from './components/gallery-page/gallery-page.jsx';
import ContactPage from './components/contact-page/contact-page.jsx';
import { Element } from 'react-scroll';
import { slide as Menu} from 'react-burger-menu';
import './app.scss';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isMenuOpened: false
        };
    }

    render() {
        const state=this.state;

        return (
            <div>
                <Menu left width={ 280 } customIcon={ 'img/icon.svg' } isOpened={state.isMenuOpened}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
                <div style={{height:50,backgroundColor:'brown'}} onPress={()=>this.setState({isMenuOpened:true})}>
                    <nav />
                </div>
                <Sticky onStickyStateChange={(isSticky) => this.handleStickyStateChange(isSticky)}>
                    <div style={{height:50,backgroundColor:'brown'}}>
                        <nav id="page_navigation">
                            <ul>
                                <li>
                                    <Link activeClass="selected" to="landing" spy={true} smooth={true} offset={-50} duration={500}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClass="selected" to="gallery" spy={true} smooth={true} offset={-50} duration={500}>
                                    Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClass="selected" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Sticky>
                <LandingPage nextPage="gallery" />
                <GalleryPage nextPage="contact" />
                <ContactPage />
            </div>
        );
    }

    handleStickyStateChange(isSticky) {
        this.setState({isSticky})
    }
}
