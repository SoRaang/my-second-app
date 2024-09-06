import { ColorContext } from './assets/programs/context';
import './assets/styles/style.css'
// import ColorBox from './components/ColorBox';
import MyFetchingTodo from './components/MyFetchingTodo';
// import TodoFetching from './components/TodoFetching';
// import UserFetcing from './components/UserFetcing';
// import HomeComponent from './components/HomeComponent';
// import BankTest from './components/BankTest'
// import AddUser from './components/AddUser'
// import AddThings from './components/AddThings'
// import BurgerShop from './components/BurgerShop'
// import CountRender from './components/CountRender'
// import InputReference from './components/InputReference'
// import MemoAndCallBack from './components/MemoAndCallBack'
// import ReducerTest from './components/ReducerTest'
// import UseCallBackTest from './components/UseCallBackTest'

function App() {
    const whatColor = prompt('어떤 색상으로 하시겠어요?');

    return (
        <>
            <ColorContext.Provider value={ whatColor }>
                {/* <AddThings />

                <hr />

                <CountRender />

                <hr />

                <InputReference />

                <hr />

                <UseCallBackTest />

                <hr />

                <MemoAndCallBack />

                <hr />

                <ReducerTest />

                <hr />

                <BurgerShop />

                <hr />

                <BankTest />

                <AddUser />

                <HomeComponent />

                <ColorBox />

                <TodoFetching />

                <UserFetcing /> */}

                <MyFetchingTodo />
            </ColorContext.Provider>
        </>
    )
}

export default App
