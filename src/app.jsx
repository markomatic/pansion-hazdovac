'use strict';

import React from 'react';
import LandingPage from './components/landing-page/landing-page.jsx';
import GalleryPage from './components/gallery-page/gallery-page.jsx';
import ContactPage from './components/contact-page/contact-page.jsx';

export default class extends React.Component {
    render() {
        return (
            <div>
                <LandingPage nextPage="gallery" />
                <GalleryPage nextPage="contact" />
                <ContactPage />
            </div>
        );
    }
}
