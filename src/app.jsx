'use strict';

import React from 'react';
import LandingPage from './components/landing-page/landing-page.jsx';
import GalleryPage from './components/gallery-page/gallery-page.jsx';
import ContactPage from './components/contact-page/contact-page.jsx';
import Header from './components/header/header.jsx';
import {slide as Menu} from 'react-burger-menu';
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
            <div id="main-container">
                <Menu left width={280} customIcon={'img/icon.svg'} isOpened={state.isMenuOpened} pageWrapId="content-container" outerContainerId="main-container">

                </Menu>
                <div id="content-container">
                    <Header />
                    <LandingPage nextPage="gallery" />
                    <GalleryPage nextPage="contact" />
                    <ContactPage />
                </div>
            </div>
        );
    }
}
