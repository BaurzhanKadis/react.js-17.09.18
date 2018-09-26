import React from 'react';
import PropTypes from 'prop-types';

export default class ItemsMenu extends React.Component {
    render() {
        var ItemsMenu = [
        {
            title: 'Home',
            link: '#',
            class: 'blog-nav-item active'
        },
        {
            title: 'New features',
            link: '#',
            class: 'blog-nav-item'
        },
        {
            title: 'Press',
            link: '#',
            class: 'blog-nav-item'
        },
        {
            title: 'New hires',
            link: '#',
            class: 'blog-nav-item'
        },
        {
            title: 'About',
            link: '#',
            class: 'blog-nav-item'
        }
        ];
    }
}
// export default itemsMenu;