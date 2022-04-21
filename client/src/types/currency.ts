import {ApolloError} from "@apollo/client";

export type CurrencyDataType = {
    label: string,
    symbol: string
}

export type Currency = {
    data: CurrencyDataType[],
    loading: boolean,
    error: ApolloError | undefined
}