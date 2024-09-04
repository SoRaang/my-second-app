import { useReducer } from "react";
import burgerOrder from "../assets/programs/burgerOrder";

const BurgerShop = () => {
    const [state, dispatch] = useReducer(burgerOrder, {});

    const addOrder = (item) => {
        dispatch({ product: item });
    }

    return (
        <div>
            <dl>
                <dt>{ state.itemName }</dt>
                <dd>{ state.itemPrice }원</dd>
                <dd>{ state.foodCal } kcal</dd>
            </dl>

            <button onClick={() => { addOrder('Burger') }}>버거</button>
            <button onClick={() => { addOrder('Potato') }}>감자튀김</button>
            <button onClick={() => { addOrder('Cola') }}>탄산음료</button>
        </div>
    );
};

export default BurgerShop;