import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const userSlice = createSlice({
    name: "fichero",
    initialState,
    reducers: {
        addImagenes: (state, action) => {
            // console.log("El action", action.payload);
            const bundle = action.payload;

            console.log("Asi llega de bundle ", bundle);

            const task_names = bundle.map((task, index) => {

                return task;

            })

            console.log("valor de redux 0 ", { task_names });

            const ficha_medica = {
                imagenes: task_names
            }

            console.log("valor de redux", ficha_medica.imagenes);

            // console.log("Esto traigo", bundle)
            state.push(ficha_medica.imagenes);
            // console.log("El state", state);
        },
    },
});

export const { addImagenes } = userSlice.actions;
export default userSlice.reducer;