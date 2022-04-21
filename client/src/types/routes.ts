import React from "react";

export enum RouteName {
    PLP = '/',
    PDP = '/description',
    CART = '/cart'
}

export interface IRoute {
    path: string,
    element: React.ReactElement
}