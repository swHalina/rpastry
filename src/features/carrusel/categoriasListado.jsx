import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const userSlice = createSlice({
    name: "categorias",
    initialState,
    reducers: {
        addCategorias: (state, action) => {
            const bundle = action.payload;
            console.log("valor de redux categorias", bundle);
            state.push(bundle);
        },
    },
});

export const { addCategorias } = userSlice.actions;
export default userSlice.reducer;