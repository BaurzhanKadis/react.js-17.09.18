import React from 'react';
import PropTypes from 'prop-types';
import Log from './Log';
// import ItemsMenu from './ItemsMenu';


export default class Mymenu extends React.Component {
	render() {
		let items = this.props.items.map((item, index) => {
            return (
            	<li role="presentation" className={item.class} key={index}>
            		<a href={item.link}>{item.title}</a>
            	</li>
                //<a className={item.class} key={index} href={item.link}>{item.title}</a>
            );
        });
		return (
			
			<ul className="nav nav-pills">
				{items}
				<Log/>
			</ul>

		);
	}
}
// export default Mymenu;
{/*<ul class="nav nav-pills">
  <li role="presentation" class="active"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Profile</a></li>
  <li role="presentation"><a href="#">Messages</a></li>
</ul>*/}