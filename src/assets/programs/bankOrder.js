function bankOrder(state, action) {
    if (action.type === 'in') {
        return parseInt(state + action.amount);
    } else {
        if (state === 0 || state - action.amount < 0) {
            alert('잔액이 부족합니다.');

            return parseInt(state);
        }

        return parseInt(state - action.amount);
    }
}

export default bankOrder;