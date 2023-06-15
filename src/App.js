import './App.css';
import logo from './logo.png';
import React from "react";
import Main from "./components/Main";
import {store} from "./redux/store";

// Косяки по верстке
// 1) Если уменьшить высоту окна, то логотип и основная часть обрезается
// 2) Скролл бар отображается всегда, даже когда нечего скроллить.
// 3) На кнопке "Сохранить" отсутствует border-radius, хотя в макете есть
// 4) Отсутствует плейсхолдер в инпуте


function App() {

    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

            </header>
          <Main/>
        </div>
    );
}
export default App;
