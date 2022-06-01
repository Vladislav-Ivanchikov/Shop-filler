import React, {Component} from 'react';
import {Query} from "@apollo/client/react/components";
import {GET_ALL_PRODUCTS, GET_CLOTHES_PRODUCTS, GET_TECH_PRODUCTS} from "../../../query/productsByCategory";
import ProductItem from "../item/ProductItem";
import {ProdList} from './ProductList.style';

export type ProdListProps = {
    category: string,
    currency: string
}

class ProductList extends Component <ProdListProps, any> {

    render() {
        const {category} = this.props

        switch (category) {
            case "all":
                return (
                    <ProdList>
                        <Query query={GET_ALL_PRODUCTS}>
                            {({data, loading}: any) => {
                                if (loading) return null
                                return data.category.products.map((item: any) => <ProductItem key={item.name}
                                                                                              name={item.name}
                                                                                              image={item.gallery[0]}/>)
                            }}
                        </Query>
                    </ProdList>
                );
            case "clothes":
                return (
                    <ProdList>
                        <Query query={GET_CLOTHES_PRODUCTS}>
                            {({data, loading}: any) => {
                                if (loading) return null
                                return data.category.products.map((item: any) => <ProductItem key={item.name}
                                                                                              name={item.name}
                                                                                              image={item.gallery[0]}/>)
                            }}
                        </Query>
                    </ProdList>
                );
            case "tech":
                return (
                    <ProdList>
                        <Query query={GET_TECH_PRODUCTS}>
                            {({data, loading}: any) => {
                                if (loading) return null
                                return data.category.products.map((item: any) => <ProductItem key={item.name}
                                                                                              name={item.name}
                                                                                              image={item.gallery[0]}/>)
                            }}
                        </Query>
                    </ProdList>
                );
        }
    }
}

export default ProductList;