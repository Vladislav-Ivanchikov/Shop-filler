import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Query} from "@apollo/client/react/components";
import {GET_CATEGORIES} from "../query/productsByCategory";
import {GET_CURRENCY} from "../query/currency";
import {CurrencyDataType} from "../types/currency";
import Logo from "../images/Logo";
import Cart from "../images/Cart";
import ProductList from "../components/products/list/ProductList";
import {
    CategoryBlock,
    CategoryItem,
    CurrencyBlock,
    CurrencyItem,
    CurrencyMenu,
    CurrencyOpener,
    NavBar,
    Toolbar
} from "../components/navigation/Navigation.style";
import {connect} from "react-redux";
import {switchCategory, switchCurrency} from "../store";


class PLP extends Component<any, any> {
    state = {
        isOpen: false,
    }

    categoryHandler = (name: string) => {
        this.props.switchCategory(name)
    }

    currencyItemHandler = (symbol: string) => {
        this.props.switchCurrency(symbol)
    }

    currencyMenuHandler = () => {
        this.setState((prev: any) => ({
            isOpen: !prev.isOpen
        }))
    }

    render() {
        const {isOpen} = this.state
        const {category, currency} = this.props.categoryState

        return (
            <>
                <NavBar>
                    <CategoryBlock>
                        <Query query={GET_CATEGORIES}>
                            {({data, loading, error}: any) => {
                                if (loading) return null
                                return data.categories.map((item: any) =>
                                    (<CategoryItem onClick={() => this.categoryHandler(item.name)}
                                                   key={item.name}>{item.name.toUpperCase()}</CategoryItem>))
                            }}
                        </Query>
                    </CategoryBlock>
                    <div>
                        <Logo/>
                    </div>
                    <Toolbar>
                        <CurrencyBlock
                            onClick={() => this.currencyMenuHandler()}>{currency}<CurrencyOpener></CurrencyOpener></CurrencyBlock>
                        <div>
                            <Link to={"/cart"}>
                                <Cart/>
                            </Link>
                        </div>
                        <CurrencyMenu open={isOpen}>
                            <Query query={GET_CURRENCY}>
                                {({data, loading, error}: any) => {
                                    if (loading) return null
                                    return data.currencies.map((item: CurrencyDataType) =>
                                        <CurrencyItem onClick={() => this.currencyItemHandler(item.symbol)}
                                                      key={item.symbol}>{item.symbol} {item.label}</CurrencyItem>)
                                }}
                            </Query>
                        </CurrencyMenu>
                    </Toolbar>
                </NavBar>
                <h2 style={{textTransform: 'capitalize'}}>{category}</h2>
                <ProductList category={category}/>
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    categoryState: state.category
})
export default connect(mapStateToProps, {switchCategory, switchCurrency})(PLP)
