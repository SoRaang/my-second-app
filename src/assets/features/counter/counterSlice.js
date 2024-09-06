import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter', // slice의 이름
    initialState: { // 초기 값
        value: 0
    },
    reducers: { // reducer 함수
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action) => { state.value += action.payload } // 추가적인 매개 변수를 받을 수 있다.
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // action 생성자 (reducer 함수의 구조분해 할당)
export default counterSlice.reducer; // store에서 사용할 수 있도록 export