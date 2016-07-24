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
        width: 2000,
        height: 1326,
        aspectRatio: 2000/1326,
        lightboxImage:{
            src: 'assets/gallery/1.jpg'
        }
    },
    {
        src: 'assets/gallery/2.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/2.jpg'
        }
    },
    {
        src: 'assets/gallery/3.jpg',
        width: 1959,
        height: 1717,
        aspectRatio: 1959/1717,
        lightboxImage:{
            src: 'assets/gallery/3.jpg'
        }
    },
    {
        src: 'assets/gallery/4.jpg',
        width: 1334,
        height: 2000,
        aspectRatio: 1334/2000,
        lightboxImage:{
            src: 'assets/gallery/4.jpg'
        }
    },
    {
        src: 'assets/gallery/5.jpg',
        width: 2000,
        height: 1326,
        aspectRatio: 2000/1326,
        lightboxImage:{
            src: 'assets/gallery/5.jpg'
        }
    },
    {
        src: 'assets/gallery/6.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/6.jpg'
        }
    },
    {
        src: 'assets/gallery/7.jpg',
        width: 2000,
        height: 1063,
        aspectRatio: 2000/1063,
        lightboxImage:{
            src: 'assets/gallery/7.jpg'
        }
    },
    {
        src: 'assets/gallery/8.jpg',
        width: 2000,
        height: 1246,
        aspectRatio: 2000/1246,
        lightboxImage:{
            src: 'assets/gallery/8.jpg'
        }
    },
    {
        src: 'assets/gallery/9.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/9.jpg'
        }
    },
    {
        src: 'assets/gallery/10.jpg',
        width: 1867,
        height: 2000,
        aspectRatio: 1867/2000,
        lightboxImage:{
            src: 'assets/gallery/10.jpg'
        }
    },
    {
        src: 'assets/gallery/11.jpg',
        width: 2000,
        height: 1196,
        aspectRatio: 2000/1196,
        lightboxImage:{
            src: 'assets/gallery/11.jpg'
        }
    },
    {
        src: 'assets/gallery/12.jpg',
        width: 2000,
        height: 1427,
        aspectRatio: 2000/1427,
        lightboxImage:{
            src: 'assets/gallery/12.jpg'
        }
    },
    {
        src: 'assets/gallery/13.jpg',
        width: 2000,
        height: 1124,
        aspectRatio: 2000/1124,
        lightboxImage:{
            src: 'assets/gallery/13.jpg'
        }
    },
    {
        src: 'assets/gallery/14.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/14.jpg'
        }
    },
    {
        src: 'assets/gallery/15.jpg',
        width: 1500,
        height: 2000,
        aspectRatio: 1500/2000,
        lightboxImage:{
            src: 'assets/gallery/15.jpg'
        }
    },
    {
        src: 'assets/gallery/16.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/16.jpg'
        }
    },
    {
        src: 'assets/gallery/17.jpg',
        width: 1500,
        height: 2000,
        aspectRatio: 1500/2000,
        lightboxImage:{
            src: 'assets/gallery/17.jpg'
        }
    },
    {
        src: 'assets/gallery/18.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/18.jpg'
        }
    },
    {
        src: 'assets/gallery/19.jpg',
        width: 2000,
        height: 1262,
        aspectRatio: 2000/1262,
        lightboxImage:{
            src: 'assets/gallery/19.jpg'
        }
    },
    {
        src: 'assets/gallery/20.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/20.jpg'
        }
    },
    {
        src: 'assets/gallery/21.jpg',
        width: 2000,
        height: 1096,
        aspectRatio: 2000/1096,
        lightboxImage:{
            src: 'assets/gallery/21.jpg'
        }
    },
    {
        src: 'assets/gallery/22.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/22.jpg'
        }
    },
    {
        src: 'assets/gallery/23.jpg',
        width: 1500,
        height: 2000,
        aspectRatio: 1500/2000,
        lightboxImage:{
            src: 'assets/gallery/23.jpg'
        }
    },
    {
        src: 'assets/gallery/24.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/24.jpg'
        }
    },
    {
        src: 'assets/gallery/25.jpg',
        width: 2000,
        height: 1712,
        aspectRatio: 2000/1712,
        lightboxImage:{
            src: 'assets/gallery/25.jpg'
        }
    },
    {
        src: 'assets/gallery/26.jpg',
        width: 2000,
        height: 1500,
        aspectRatio: 2000/1500,
        lightboxImage:{
            src: 'assets/gallery/26.jpg'
        }
    },
    {
        src: 'assets/gallery/27.jpg',
        width: 2000,
        height: 1371,
        aspectRatio: 2000/1371,
        lightboxImage:{
            src: 'assets/gallery/27.jpg'
        }
    },
    {
        src: 'assets/gallery/28.jpg',
        width: 2000,
        height: 1124,
        aspectRatio: 2000/1124,
        lightboxImage:{
            src: 'assets/gallery/28.jpg'
        }
    },
    {
        src: 'assets/gallery/29.jpg',
        width: 1888,
        height: 2000,
        aspectRatio: 1888/2000,
        lightboxImage:{
            src: 'assets/gallery/29.jpg'
        }
    },
    {
        src: 'assets/gallery/30.jpg',
        width: 2000,
        height: 1125,
        aspectRatio: 2000/1125,
        lightboxImage:{
            src: 'assets/gallery/30.jpg'
        }
    },
    {
        src: 'assets/gallery/31.jpg',
        width: 2000,
        height: 1124,
        aspectRatio: 2000/1124,
        lightboxImage:{
            src: 'assets/gallery/31.jpg'
        }
    },
    {
        src: 'assets/gallery/32.jpg',
        width: 1124,
        height: 2000,
        aspectRatio: 1124/2000,
        lightboxImage:{
            src: 'assets/gallery/32.jpg'
        }
    },
    {
        src: 'assets/gallery/33.jpg',
        width: 2000,
        height: 1124,
        aspectRatio: 2000/1124,
        lightboxImage:{
            src: 'assets/gallery/33.jpg'
        }
    },
    {
        src: 'assets/gallery/34.jpg',
        width: 2000,
        height: 1016,
        aspectRatio: 2000/1016,
        lightboxImage:{
            src: 'assets/gallery/34.jpg'
        }
    }
];
