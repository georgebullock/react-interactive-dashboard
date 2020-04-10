import React from 'react';

class ProductList extends React.Component {
	text = `React Interactive Dashboard`;

	render(): React.ReactNode {
		return <h1 className="ui dividing centered header">{this.text}</h1>;
	}
}

export default ProductList;
