'use strict';

import React from 'react';
import Gallery from 'react-photo-gallery';
import Page from './../page/page.jsx';
import preloadImages from './../../utils/preload-images.js';
import './gallery-page.scss';

export default class extends React.Component {
    componentWillMount() {
        preloadImages(
            'http://intelligenttravel.nationalgeographic.com/files/2012/07/Surfers_Paradise_Warren_Keelan_367408.jpg',
            'http://2.bp.blogspot.com/-VvljT5Gz25Y/UAkCTyqz3PI/AAAAAAAACtQ/szEH6pCuNKo/s1600/HD-lightning-over-ocean-nature-wallpaper.jpg',
            'http://www.collegecounseling.org/wp-content/uploads/bigstock-Tropical-Panorama-93246-1024x275.jpg',
            'http://4.bp.blogspot.com/-_BkUlfUa2yk/T2HOO6WuY9I/AAAAAAAAAew/wDS2mhYI8hk/s1600/3D+Green+Nature+Wallpaper.jpg',
            'http://www.hawaii-all-inclusive.net/files/3318241/uploaded/all-inclusive-waikiki-hawaii-vacation-package.jpg',
            'http://unirea.org.au/images/AutsonSlideshowA/Gold%20Coast%20-%20Queensland.png',
            'http://2.bp.blogspot.com/-emsgvYPrIZg/UfIbWCQ4KoI/AAAAAAAAAAw/vMwQWd71xts/s1600/studio+background+03JPG.jpg',
            'http://images2.fanpop.com/images/photos/7800000/Amazing-Nature-Wallpapers-national-geographic-7896974-1280-960.jpg',
            'https://s3-us-west-1.amazonaws.com/hawaii-com-wp/wp-content/uploads/2015/08/24125942/Hilton-Hawaiian-Village-1024x589.jpg',
            'http://desktopbackgrounds1.com/wp-content/uploads/2012/03/cool-nature-desktop-backgrounds-2.jpg',
            'https://i.ytimg.com/vi/qjNmcXnTpXE/maxresdefault.jpg'
        );
    }

    render() {
        return (
            <Page className="GalleryPage" page="gallery" nextPage={this.props.nextPage}>
                <Gallery photos={galleryImages} /><br />
                <div style={{clear: 'both'}}></div>
            </Page>
        );
    }
}

const galleryImages = [
    {
        src: 'http://intelligenttravel.nationalgeographic.com/files/2012/07/Surfers_Paradise_Warren_Keelan_367408.jpg',
        width: 1600,
        height: 1067,
        aspectRatio: 1600/1067,
        lightboxImage:{
            src: 'http://intelligenttravel.nationalgeographic.com/files/2012/07/Surfers_Paradise_Warren_Keelan_367408.jpg'
        }
    },
    {
        src: 'http://2.bp.blogspot.com/-VvljT5Gz25Y/UAkCTyqz3PI/AAAAAAAACtQ/szEH6pCuNKo/s1600/HD-lightning-over-ocean-nature-wallpaper.jpg',
        width: 1366,
        height: 768,
        aspectRatio: 1366/768,
        lightboxImage:{
            src: 'http://2.bp.blogspot.com/-VvljT5Gz25Y/UAkCTyqz3PI/AAAAAAAACtQ/szEH6pCuNKo/s1600/HD-lightning-over-ocean-nature-wallpaper.jpg'
        }
    },
    {
        src: 'http://www.collegecounseling.org/wp-content/uploads/bigstock-Tropical-Panorama-93246-1024x275.jpg',
        width: 1024,
        height: 275,
        aspectRatio: 1024/275,
        lightboxImage:{
            src: 'http://www.collegecounseling.org/wp-content/uploads/bigstock-Tropical-Panorama-93246-1024x275.jpg'
        }
    },
    {
        src: 'http://4.bp.blogspot.com/-_BkUlfUa2yk/T2HOO6WuY9I/AAAAAAAAAew/wDS2mhYI8hk/s1600/3D+Green+Nature+Wallpaper.jpg',
        width: 1024,
        height: 768,
        aspectRatio: 1024/768,
        lightboxImage:{
            src: 'http://4.bp.blogspot.com/-_BkUlfUa2yk/T2HOO6WuY9I/AAAAAAAAAew/wDS2mhYI8hk/s1600/3D+Green+Nature+Wallpaper.jpg'
        }
    },
    {
        src: 'http://www.hawaii-all-inclusive.net/files/3318241/uploaded/all-inclusive-waikiki-hawaii-vacation-package.jpg',
        width: 1296,
        height: 972,
        aspectRatio: 1296/972,
        lightboxImage:{
            src: 'http://www.hawaii-all-inclusive.net/files/3318241/uploaded/all-inclusive-waikiki-hawaii-vacation-package.jpg'
        }
    },
    {
        src: 'http://2.bp.blogspot.com/-emsgvYPrIZg/UfIbWCQ4KoI/AAAAAAAAAAw/vMwQWd71xts/s1600/studio+background+03JPG.jpg',
        width: 1067,
        height: 1600,
        aspectRatio: 1067/1600,
        lightboxImage:{
            src: 'http://2.bp.blogspot.com/-emsgvYPrIZg/UfIbWCQ4KoI/AAAAAAAAAAw/vMwQWd71xts/s1600/studio+background+03JPG.jpg'
        }
    },
    {
        src: 'http://unirea.org.au/images/AutsonSlideshowA/Gold%20Coast%20-%20Queensland.png',
        width: 1577,
        height: 573,
        aspectRatio: 1577/573,
        lightboxImage:{
            src: 'http://unirea.org.au/images/AutsonSlideshowA/Gold%20Coast%20-%20Queensland.png'
        }
    },
    {
        src: 'http://images2.fanpop.com/images/photos/7800000/Amazing-Nature-Wallpapers-national-geographic-7896974-1280-960.jpg',
        width: 1280,
        height: 960,
        aspectRatio: 1280/960,
        lightboxImage:{
            src: 'http://images2.fanpop.com/images/photos/7800000/Amazing-Nature-Wallpapers-national-geographic-7896974-1280-960.jpg'
        }
    },
    {
        src: 'https://s3-us-west-1.amazonaws.com/hawaii-com-wp/wp-content/uploads/2015/08/24125942/Hilton-Hawaiian-Village-1024x589.jpg',
        width: 1024,
        height: 589,
        aspectRatio: 1024/589,
        lightboxImage:{
            src: 'https://s3-us-west-1.amazonaws.com/hawaii-com-wp/wp-content/uploads/2015/08/24125942/Hilton-Hawaiian-Village-1024x589.jpg'
        }
    },
    {
        src: 'http://desktopbackgrounds1.com/wp-content/uploads/2012/03/cool-nature-desktop-backgrounds-2.jpg',
        width: 1024,
        height: 768,
        aspectRatio: 1024/768,
        lightboxImage:{
            src: 'http://desktopbackgrounds1.com/wp-content/uploads/2012/03/cool-nature-desktop-backgrounds-2.jpg'
        }
    },
    {
        src: 'https://i.ytimg.com/vi/qjNmcXnTpXE/maxresdefault.jpg',
        width: 1280,
        height: 720,
        aspectRatio: 1280/720,
        lightboxImage:{
            src: 'https://i.ytimg.com/vi/qjNmcXnTpXE/maxresdefault.jpg'
        }
    }
];
