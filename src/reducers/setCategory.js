import { SETCATEGORY } from "../constants/actionTypes";

export default (category = '', action) => {
    switch (action.type) {
        case SETCATEGORY:
            console.log(action?.payload);
            return { category: action?.payload };
        default:
            return category;
    }
}