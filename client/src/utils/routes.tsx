import {IRoute, RouteName} from "../types/routes";
import PLP from "../pages/PLP";
import PDP from "../pages/PDP";
import CartPage from "../pages/CartPage";

export const routes: IRoute[] = [
    {
        path: RouteName.PLP,
        element: <PLP/>
    },
    {
        path: RouteName.PDP,
        element: <PDP/>
    },
    {
        path: RouteName.CART,
        element: <CartPage/>
    }
]