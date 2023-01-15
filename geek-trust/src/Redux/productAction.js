import { PRODUCT_LIST, SEARCH_DATA } from "./constant"
export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

export const searchData = (text) => {
    console.log("text",text)
    return {
        type: SEARCH_DATA,
        text
    }
}

