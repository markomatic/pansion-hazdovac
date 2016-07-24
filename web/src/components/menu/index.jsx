'use strict';

import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class extends Component {
    render() {
        const active = window.pageYOffset === 0 ? true : undefined;
        const linkProps = {
            activeClass: 'selected',
            spy: true,
            smooth: true,
            offset: -50,
            duration: 500,
            onClick: this.handleItemClick.bind(this)
        };

        return (
            <div className={'Menu'}>
                <nav>
                    <ul>
                        <li>
                            <Link {...linkProps} active={active}
                                                 to={'landing'}
                                                 offset={-70}>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link {...linkProps} to={'gallery'}>
                                <span>Gallery</span>
                            </Link>
                        </li>
                        <li>
                            <Link {...linkProps} to={'contact'}>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

    handleItemClick(event) {
        const onItemPress = this.props.onItemPress;
        onItemPress && onItemPress(event);
    }
}
