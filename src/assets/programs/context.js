import { createContext } from "react";

export const MyContext = createContext('Hello World!');

export const ThemeContext = createContext();

// context를 별도의 파일로 저장해 둔다.