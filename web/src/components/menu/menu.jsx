'use strict';

import React from 'react';
import { Link } from 'react-scroll';
import './menu.scss';

export default class extends React.Component {
    render() {
        const active = window.pageYOffset === 0 ? true : undefined;

        return (
            <div className="Menu">
                <nav>
                    <ul>
                        <li>
                            <Link activeClass="selected"
                                  active={active}
                                  to="landing"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  onClick={this.handleItemClick.bind(this)}>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="selected"
                                  to="prices"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  onClick={this.handleItemClick.bind(this)}>
                                <span>Prices</span>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="selected"
                                  to="gallery"
                                  spy={true}
                                  smooth={true}
                                  offset={-50}
                                  duration={500}
                                  onClick={this.handleItemClick.bind(this)}>
                                <span>Gallery</span>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="selected"
                                  to="contact"
                                  spy={true}
                                  smooth={true}
                                  offset={-50}
                                  duration={500}
                                  onClick={this.handleItemClick.bind(this)}>
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
