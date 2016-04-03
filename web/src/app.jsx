'use strict';

import React from 'react';
import LandingPage from './components/landing-page/landing-page.jsx';
import GalleryPage from './components/gallery-page/gallery-page.jsx';
import ContactPage from './components/contact-page/contact-page.jsx';
import Page from './components/page/page.jsx';
import Header from './components/header/header.jsx';
import SideMenu from './components/side-menu/side-menu.jsx';

import './app.scss';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            isMenuOpened: false,
            isSticky: false
        };
    }


    render() {
        const state = this.state;
        const isSticky = state.isSticky;

        return (
            <div id={'main-container'}>
                <SideMenu ref={c => this.sideMenu = c}
                          pageWrapId={'content-container'}
                          outerContainerId={'main-container'}
                          linkOffset={50}/>
                <div id={'content-container'}>
                    <Header onStickyStateChange={this.handleStickyStateChange.bind(this)}
                            onSideMenuOpen={this.handleOnSideMenuOpen.bind(this)}/>
                    <LandingPage nextPage={'prices'}
                                 pageStyle={{marginTop: (isSticky ? 50 : 0)}}/>
                    <Page className="PricesPage"
                          page="prices"
                          nextPage={'gallery'}>
                        <p>This is prices page</p>
                    </Page>
                    <GalleryPage nextPage={'contact'} />
                    <ContactPage />
                </div>
            </div>
        );
    }

    handleStickyStateChange(isSticky) {
        this.setState({isSticky});
    }

    handleOnSideMenuOpen() {
        const sideMenu = this.sideMenu;
        sideMenu && sideMenu.open();
    }
}
