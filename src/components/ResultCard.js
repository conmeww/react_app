import React from "react";
import { connect } from "react-redux";
import Todo from "./Item";

const TodosList = ({ todos }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "200px",
                margin: "0 auto",
                height: "200px",
                overflowY: "auto",
                overflowX: "hidden"
            }}
        >
            {todos.map((todo, i) => (
                <Todo key={i} todo={todo} idx={0} />
            ))}
        </div>
    );
};
const mapStateToProps = ({ todos }) => ({
    todos
});
export default connect(mapStateToProps)(TodosList);