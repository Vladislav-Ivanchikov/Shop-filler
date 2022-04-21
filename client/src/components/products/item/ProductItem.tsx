import React, {Component} from 'react';
import {ProductCard, ProdPrice, ProdName} from './ProductItem.style';

export type ProdItemProps = {
    name: string
    image: string
}

class ProductItem extends Component<ProdItemProps, any> {

    render() {
        const {name, image} = this.props

        return (
            <ProductCard>
                <div>
                    <img src={image} alt="" width={'354px'} height={'330px'}/>
                </div>
                <ProdName>{name}</ProdName>
                <ProdPrice>$50.00</ProdPrice>
            </ProductCard>
        );
    }
}

export default ProductItem;