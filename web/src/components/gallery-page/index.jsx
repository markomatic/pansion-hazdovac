'use strict';

import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Page from './../page';
import preloadImages from './../../utils/preload-images.js';

export default class extends Component {
    componentWillMount() {
        preloadImages(
            'assets/gallery/1.jpg',
            'assets/gallery/2.jpg',
            'assets/gallery/3.jpg',
            'assets/gallery/4.jpg',
            'assets/gallery/5.jpg',
            'assets/gallery/6.jpg',
            'assets/gallery/7.jpg',
            'assets/gallery/8.jpg',
            'assets/gallery/9.jpg',
            'assets/gallery/10.jpg',
            'assets/gallery/11.jpg',
            'assets/gallery/12.jpg',
            'assets/gallery/13.jpg',
            'assets/gallery/14.jpg',
            'assets/gallery/15.jpg',
            'assets/gallery/16.jpg',
            'assets/gallery/17.jpg',
            'assets/gallery/18.jpg',
            'assets/gallery/19.jpg',
            'assets/gallery/20.jpg',
            'assets/gallery/21.jpg',
            'assets/gallery/22.jpg',
            'assets/gallery/23.jpg',
            'assets/gallery/24.jpg',
            'assets/gallery/25.jpg',
            'assets/gallery/26.jpg',
            'assets/gallery/27.jpg',
            'assets/gallery/28.jpg',
            'assets/gallery/29.jpg',
            'assets/gallery/30.jpg',
            'assets/gallery/31.jpg',
            'assets/gallery/32.jpg',
            'assets/gallery/33.jpg',
            'assets/gallery/34.jpg'
        );
    }

    render() {
        return (
            <Page {...this.props} className={'GalleryPage'}
                                  page={'gallery'}>
                <Gallery photos={galleryImages} /><br />
                <div style={{clear: 'both'}}></div>
            </Page>
        );
    }
}

const galleryImages = [
    {
        src: 'assets/gallery/1.jpg',
        width: 1920,
        height: 1273,
        aspectRatio: 1920/1273,
        lightboxImage:{
            src: 'assets/gallery/1.jpg'
        }
    },
    {
        src: 'assets/gallery/2.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/2.jpg'
        }
    },
    {
        src: 'assets/gallery/3.jpg',
        width: 1920,
        height: 1683,
        aspectRatio: 1920/1683,
        lightboxImage:{
            src: 'assets/gallery/3.jpg'
        }
    },
    {
        src: 'assets/gallery/4.jpg',
        width: 1280,
        height: 1920,
        aspectRatio: 1280/1920,
        lightboxImage:{
            src: 'assets/gallery/4.jpg'
        }
    },
    {
        src: 'assets/gallery/5.jpg',
        width: 1920,
        height: 1273,
        aspectRatio: 1920/1273,
        lightboxImage:{
            src: 'assets/gallery/5.jpg'
        }
    },
    {
        src: 'assets/gallery/6.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/6.jpg'
        }
    },
    {
        src: 'assets/gallery/7.jpg',
        width: 1920,
        height: 1020,
        aspectRatio: 1920/1020,
        lightboxImage:{
            src: 'assets/gallery/7.jpg'
        }
    },
    {
        src: 'assets/gallery/8.jpg',
        width: 1920,
        height: 1196,
        aspectRatio: 1920/1196,
        lightboxImage:{
            src: 'assets/gallery/8.jpg'
        }
    },
    {
        src: 'assets/gallery/9.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/9.jpg'
        }
    },
    {
        src: 'assets/gallery/10.jpg',
        width: 1792,
        height: 1920,
        aspectRatio: 1792/1920,
        lightboxImage:{
            src: 'assets/gallery/10.jpg'
        }
    },
    {
        src: 'assets/gallery/11.jpg',
        width: 1920,
        height: 1148,
        aspectRatio: 1920/1148,
        lightboxImage:{
            src: 'assets/gallery/11.jpg'
        }
    },
    {
        src: 'assets/gallery/12.jpg',
        width: 1920,
        height: 1370,
        aspectRatio: 1920/1370,
        lightboxImage:{
            src: 'assets/gallery/12.jpg'
        }
    },
    {
        src: 'assets/gallery/13.jpg',
        width: 1920,
        height: 1079,
        aspectRatio: 1920/1079,
        lightboxImage:{
            src: 'assets/gallery/13.jpg'
        }
    },
    {
        src: 'assets/gallery/14.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/14.jpg'
        }
    },
    {
        src: 'assets/gallery/15.jpg',
        width: 1440,
        height: 1920,
        aspectRatio: 1440/1920,
        lightboxImage:{
            src: 'assets/gallery/15.jpg'
        }
    },
    {
        src: 'assets/gallery/16.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/16.jpg'
        }
    },
    {
        src: 'assets/gallery/17.jpg',
        width: 1440,
        height: 1920,
        aspectRatio: 1440/1920,
        lightboxImage:{
            src: 'assets/gallery/17.jpg'
        }
    },
    {
        src: 'assets/gallery/18.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/18.jpg'
        }
    },
    {
        src: 'assets/gallery/19.jpg',
        width: 1920,
        height: 1211,
        aspectRatio: 1920/1211,
        lightboxImage:{
            src: 'assets/gallery/19.jpg'
        }
    },
    {
        src: 'assets/gallery/20.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/20.jpg'
        }
    },
    {
        src: 'assets/gallery/21.jpg',
        width: 1920,
        height: 1052,
        aspectRatio: 1920/1052,
        lightboxImage:{
            src: 'assets/gallery/21.jpg'
        }
    },
    {
        src: 'assets/gallery/22.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/22.jpg'
        }
    },
    {
        src: 'assets/gallery/23.jpg',
        width: 1440,
        height: 1920,
        aspectRatio: 1440/1920,
        lightboxImage:{
            src: 'assets/gallery/23.jpg'
        }
    },
    {
        src: 'assets/gallery/24.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/24.jpg'
        }
    },
    {
        src: 'assets/gallery/25.jpg',
        width: 1920,
        height: 1643,
        aspectRatio: 1920/1643,
        lightboxImage:{
            src: 'assets/gallery/25.jpg'
        }
    },
    {
        src: 'assets/gallery/26.jpg',
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/26.jpg'
        }
    },
    {
        src: 'assets/gallery/27.jpg',
        width: 1920,
        height: 1316,
        aspectRatio: 1920/1316,
        lightboxImage:{
            src: 'assets/gallery/27.jpg'
        }
    },
    {
        src: 'assets/gallery/28.jpg',
        width: 1920,
        height: 1079,
        aspectRatio: 1920/1079,
        lightboxImage:{
            src: 'assets/gallery/28.jpg'
        }
    },
    {
        src: 'assets/gallery/29.jpg',
        width: 1812,
        height: 1920,
        aspectRatio: 1812/1920,
        lightboxImage:{
            src: 'assets/gallery/29.jpg'
        }
    },
    {
        src: 'assets/gallery/30.jpg',
        width: 1920,
        height: 1080,
        aspectRatio: 1920/1080,
        lightboxImage:{
            src: 'assets/gallery/30.jpg'
        }
    },
    {
        src: 'assets/gallery/31.jpg',
        width: 1920,
        height: 1079,
        aspectRatio: 1920/1079,
        lightboxImage:{
            src: 'assets/gallery/31.jpg'
        }
    },
    {
        src: 'assets/gallery/32.jpg',
        width: 1079,
        height: 1920,
        aspectRatio: 1079/1920,
        lightboxImage:{
            src: 'assets/gallery/32.jpg'
        }
    },
    {
        src: 'assets/gallery/33.jpg',
        width: 1920,
        height: 1079,
        aspectRatio: 1920/1079,
        lightboxImage:{
            src: 'assets/gallery/33.jpg'
        }
    },
    {
        src: 'assets/gallery/34.jpg',
        width: 1920,
        height: 975,
        aspectRatio: 1920/975,
        lightboxImage:{
            src: 'assets/gallery/34.jpg'
        }
    }
];
