const initState = {
    items: [],
    itemsPreview:[],
    text: "",
    selected: undefined,
    counter:0
};

const setPersist = items =>
    window.localStorage.setItem("items2", JSON.stringify(items));

export const addItem = (state = initState, action) => {
    switch (action.type) {
        case "PERSIST_ITEMS":
            const items = JSON.parse(window.localStorage.getItem("items2"));
            return { ...state, items: items ? items : [] };
        case "ADD_TEXT":
            return { ...state, text: action.payload };
        case "ADD_ITEM":
            const items2 = state.items.concat(action.payload);
            state.counter = items2.length
            window.localStorage.setItem("items2", JSON.stringify(items2));
            return { ...state, items: items2, text: "" };
        case "PREVIEW_ITEM":
            const preview = state.itemsPreview.concat(action.payload);
            window.localStorage.setItem("preview", JSON.stringify(items2));
            return { ...state,itemsPreview: preview, text: "" };

        case "DELETE_ITEM":
            const todo3 = state.items.filter((item, i) => i !== action.payload);
            setPersist(todo3);
            return {
                ...state,
                items: todo3
            };

        default:
            return state;
    }
};
