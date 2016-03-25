'use strict';

import React from 'react';
import Menu from './../menu/menu.jsx';
import Logo from './../logo/logo.jsx';
import HeaderResizable from './../header-resizable/header-resizable.jsx';
import HeaderMenuButton from './../header-menu-button/header-menu-button.jsx';
import Sticky from 'react-sticky';
import './header.scss';

export default class extends React.Component {
    render() {
        return (
            <div className="Header">
                <div style={{height:20}}
                     onPress={()=>this.setState({isMenuOpened:true})}></div>
                <Sticky className="Sticky"
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
