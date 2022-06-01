import React, {Component} from 'react';
import {connect} from "react-redux";
import {mapStateToProps} from "../store";
import ProductList from "../components/products/list/ProductList";
import Navigation from "../components/navigation/Navigation";

class PLP extends Component<any, any> {

    render() {
        const {category, currency} = this.props.categoryState

        return (
            <>
                <Navigation/>
                <h2 style={{textTransform: 'capitalize'}}>{category}</h2>
                <ProductList category={category} currency={currency}/>
            </>
        );
    }
}

export default connect(mapStateToProps)(PLP)
