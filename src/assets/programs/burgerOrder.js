function burgerOrder(state, action) {
    switch(action.product) {
        case 'Burger': return { itemName: '쿼터 파운더 치즈', itemPrice: 7800, foodCal: 600 };
        case 'Potato': return { itemName: '감자튀김', itemPrice: 2400, foodCal: 700 };
        case 'Cola': return { itemName: '탄산음료', itemPrice: 1500, foodCal: 400 };
        default: return {};
    }
}

export default burgerOrder;