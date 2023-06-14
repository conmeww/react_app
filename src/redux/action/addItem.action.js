export const persistTodos = () => ({
    type: "PERSIST_ITEMS"
});
export const addText = value => ({
    type: "ADD_TEXT",
    payload: value
});
export const addItem = item => ({
    type: "ADD_ITEM",
    payload: item
});
export const previewItem = preview => ({
    type: "PREVIEW_ITEM",
    payload:preview
});

export const deleteItem = key => ({
    type: "DELETE_ITEM",
    payload: key
});
