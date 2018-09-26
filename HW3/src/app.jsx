import React from 'react';
import ReactDOM from 'react-dom';
import Mymenu from './app/components/Mymenu';
import './app/styles/styles.css'
//import ItemsMenu from './app/components/ItemsMenu';

const app = document.getElementById('app');

let itemsMenu = [
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

ReactDOM.render(
    /*<div onClick={()=>{alert('1');}}>*/
    <div>
        Второе приложение на React
        <hr/>
        <div className="blog-masthead">
			<div className="container">
	            <div className="row">
					<Mymenu items={itemsMenu}/>
	        	</div>
	        </div>
        </div>
    </div>,
app);