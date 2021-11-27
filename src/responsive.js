import {css} from "styled-components"

export const pro = (props) =>{
    return css`
        @media only screen and (max-width: 1024px) {
            ${props}
        }
    `
}

export const tablet = (props) =>{
    return css`
        @media only screen and (max-width: 770px) {
            ${props}
        }
    `
}

export const mobile = (props) =>{
    return css`
        @media only screen and (max-width: 535px) {
            ${props}
        }
    `
}

export const smallMobile = (props) =>{
    return css`
        @media only screen and (max-width: 420px) {
            ${props}
        }
    `
}
