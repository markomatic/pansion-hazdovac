'use strict';

import React from 'react';
import Menu from './../menu/menu.jsx';
import Sticky from 'react-sticky';
import './header.scss';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            isSticky: false
        };
    }

    render() {
        const state = this.state;
        const isSticky = state.isSticky;
        const linkOffset = isSticky ? -50 : -100;

        return (
            <div className="Header">
                <div style={{height:50}} onPress={()=>this.setState({isMenuOpened:true})}>
                    <nav />
                </div>
                <Sticky className="Sticky" style={{height:50}} onStickyStateChange={this.handleStickyStateChange.bind(this)}>
                    <Menu linkOffset={linkOffset} />
                </Sticky>
            </div>
        );
    }

    handleStickyStateChange(isSticky) {
        this.setState({isSticky});
    }
}
