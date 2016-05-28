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
                <StickyContainer>
                    <SideMenu ref={c => this.sideMenu = c}
                              pageWrapId={'content-container'}
                              outerContainerId={'main-container'}
                              linkOffset={50}/>
                    <div id={'content-container'}>
                        <Header onStickyStateChange={this.handleStickyStateChange.bind(this)}
                                onSideMenuOpen={this.handleOnSideMenuOpen.bind(this)}/>
                        <LandingPage nextPage={'prices'}
                                     pageStyle={{marginTop: (isSticky ? 50 : 0)}}/>
                        <Page className={'PricesPage'}
                              page={'prices'}
                              nextPage={'gallery'}>
                            <p>This is prices page</p>
                        </Page>
                        <GalleryPage nextPage={'contact'} />
                        <ContactPage />
                    </div>
                </StickyContainer>
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
