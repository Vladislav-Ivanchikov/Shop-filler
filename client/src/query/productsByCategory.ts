import {gql} from '@apollo/client'

export const GET_CATEGORIES = gql(`
        query {
            categories {
                name
            }
        }
`)

export const GET_ALL_PRODUCTS = gql(`
        query {
            category(input: {title: "all"}){
                name, products{name, id, gallery}
            }
        }
`)

export const GET_CLOTHES_PRODUCTS = gql(`
        query {
            category(input: {title: "clothes"}){
                name, products{name, id, gallery}
            }
        }
`)

export const GET_TECH_PRODUCTS = gql(`
        query {
            category(input: {title: "tech"}){
                name, products{name, id, gallery}
            }
        }
`)

