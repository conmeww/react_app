import '../App.css';
import Tabs from "../Tabs";
import React from "react";
import InputField from "./InputField";
import ItemsList from "./ItemsList";
import {store} from "../redux/store";
import {useEffect, useState} from "react";
import {useCallback} from "react";

function Main() {

    return (


        <div className="tabs-wrapper"><h1 className="main-header">Мои организации</h1>
            <Tabs>
                <div label="Новая организация">
                    <div className="tab-inner">
                        <InputField/>
                    </div>
                </div>
                <div label={`Сохраненные организации`}>
                    <ItemsList/>
                </div>
            </Tabs>
        </div>

    );
}

export default Main;
