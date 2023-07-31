import { List } from "../components/List";

import tokens from "../datas/tokens.json";
import darkTokens from "../datas/tokens-dark.json";

export default {
    title: "Tokens/Colors",
    component: List
};

export const Custom = {
    args: {
        styles: tokens
    }
};


export const CustomDark = {
    args: {
        styles: darkTokens
    }
};
