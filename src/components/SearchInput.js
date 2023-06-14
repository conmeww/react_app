import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import {addTodo} from "../actions";


const SearchEngine = () => {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");

    async function getListData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setResults(data);
    }


    function displayResults() {
        if (search.length > 0) {
            const filteredEmployees = results.filter(employee =>
                employee.name.toLowerCase().includes(search.toLowerCase())
            );
            if (filteredEmployees.length > 0) {
                return filteredEmployees.map(employee => (
                    <div className="list-card" onClick={({dispatch}) => {
                        dispatch(addTodo('sdfbghj'))
                    }}>
                        <h1 className="list-card__name" key={employee.id}>{employee.name}</h1>
                        <div className="list-card__info">
                            <p>789098768945</p>
                            <p>г. Санкт-Петербург </p>
                        </div>
                    </div>
                ));
            }// else {
             //   return "По вашему запросу ничего не найдено";
            //   }
        }
    }

    function userSearch(event) {
        getListData()
        setSearch(event.target.value);
        setResult(event.target.value)
    }

    useEffect(() => {
        getListData();
    }, []);
    return (
        <div>
            <h1 className="input-name">Организация или ИП</h1>
            <input type="text" onChange={userSearch} className="main-input" value={result}/>
            <div className="list-items">{displayResults()}</div>
        </div>
    );
};

export default connect(
    addTodo
)(SearchEngine);
