'use strict';

import React from 'react';
import {slide as BurgerMenu} from 'react-burger-menu';
import Menu from './../menu/menu.jsx';
import './side-menu.scss';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            isMenuOpened: false
        };
    }

    render() {
        const state = this.state;
        const props = this.props;

        return (
            <div className={'SideMenu'}>
                <BurgerMenu left
                            width={280}
                            isOpen={state.isMenuOpened}
                            onStateChange={this.handleBurgerMenuStateChange.bind(this)}
                            pageWrapId={props.pageWrapId}
                            outerContainerId={props.outerContainerId}>
                    <Menu linkOffset={props.linkOffset} onItemPress={this.handleItemPress.bind(this)}/>
                </BurgerMenu>
            </div>
        );
    }

    handleBurgerMenuStateChange(state) {
        const isMenuOpened = state.isOpen;
        if (isMenuOpened === this.state.isMenuOpened) {
            return;
        }

        this.setState({
            isMenuOpened
        });
    }

    handleItemPress() {
        this.close();
    }

    open() {
        if (this.state.isMenuOpened) {
            return;
        }

        this.setState({
            isMenuOpened: true
        });
    }

    close() {
        if (!this.state.isMenuOpened) {
            return;
        }

        this.setState({
            isMenuOpened: false
        });
    }
}
