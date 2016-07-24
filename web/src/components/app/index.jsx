'use strict';

import React, { Component } from 'react';
import LandingPage from './../landing-page';
import GalleryPage from './../gallery-page';
import ContactPage from './../contact-page';
import Page from './../page';
import Header from './../header';
import SideMenu from './../side-menu';
import { StickyContainer } from 'react-sticky';

export default class extends Component {
    render() {
        return (
            <div id={'main-container'}>
                <StickyContainer>
                    <SideMenu ref={c => this.sideMenu = c}
                              pageWrapId={'content-container'}
                              outerContainerId={'main-container'}
                              linkOffset={50}/>
                    <div id={'content-container'}>
                        <Header onSideMenuOpen={this.handleOnSideMenuOpen.bind(this)}/>
                        <LandingPage nextPage={'gallery'}/>
                        <GalleryPage nextPage={'contact'} />
                        <ContactPage />
                    </div>
                </StickyContainer>
            </div>
        );
    }

    handleOnSideMenuOpen() {
        const sideMenu = this.sideMenu;
        sideMenu && sideMenu.open();
    }
}
