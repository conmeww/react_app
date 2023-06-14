import React, { useEffect } from "react";

import InputField from "./InputField";
import TodosList from "./ItemsList";
import {deleteAll,persistTodos,showMore} from "../redux/action/addItem.action";
import { connect } from "react-redux";

import Todo from "./Item";
const App = ({ deleteAll, persistTodos ,showMore}) => {
    useEffect(() => {
        persistTodos();
    }, [persistTodos]);
    return (
        <div>

            <InputField />


            {/*<Todo />*/}

            {/*<TodosList />*/}
            {/*<div>*/}

            {/*</div>*/}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteAll: () => dispatch(deleteAll()),
    persistTodos: () => dispatch(persistTodos())
});
export default connect(
    null,
    mapDispatchToProps
)(App);
