'use strict';

import React, { Component } from 'react';

export default props => (
    <div className={'ImageLoading'} style={{width:`${props.width}px`, height:`${props.height}px`}}>
        <div></div>
    </div>
);
