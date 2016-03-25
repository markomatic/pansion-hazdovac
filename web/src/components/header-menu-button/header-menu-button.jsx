'use strict';

import React from 'react';
import './header-menu-button.scss';

export default class extends React.Component {
    render() {
        return (
            <div className={'HeaderMenuButton'}
                 onClick={this.handleOnClick.bind(this)}>
                <div className={'button'}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        );
    }

    handleOnClick(e) {
        e.preventDefault();
        const onPress = this.props.onPress;
        onPress && onPress();
        return false;
    }
}
