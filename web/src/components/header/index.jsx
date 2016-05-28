'use strict';

import React, { Component } from 'react';
import Menu from './../menu';
import Logo from './../logo';
import HeaderResizable from './../header-resizable';
import HeaderMenuButton from './../header-menu-button';
import { Sticky } from 'react-sticky';

export default class extends Component {
    render() {
        return (
            <div className={'Header'}>
                <div style={{height:20}}
                     onPress={()=>this.setState({isMenuOpened:true})}></div>
                <Sticky className={'Sticky'}
                        style={{height:50}}
                        onStickyStateChange={this.handleStickyStateChange.bind(this)}>
                    <HeaderResizable className={'menu'}
                                     maxHeight={70}
                                     minHeight={50}>
                        <Menu />
                    </HeaderResizable>
                    <HeaderResizable className={'logo'}
                                     maxHeight={70}
                                     minHeight={50}>
                        <Logo />
                    </HeaderResizable>
                    <HeaderResizable className={'menuButton'}
                                     maxHeight={70}
                                     minHeight={50}>
                        <HeaderMenuButton onPress={this.handleOnSideMenuOpen.bind(this)}/>
                    </HeaderResizable>
                </Sticky>
            </div>
        );
    }

    handleStickyStateChange(isSticky) {
        const onStickyStateChange = this.props.onStickyStateChange;
        onStickyStateChange && onStickyStateChange(isSticky);
    }

    handleOnSideMenuOpen() {
        const onSideMenuOpen = this.props.onSideMenuOpen;
        onSideMenuOpen && onSideMenuOpen();
    }
}
