import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    name: string;
    rol: string;
    specialty: string;
}

export interface UserState {
    user: User;
}

const initialUser: User = {
    name: "",
    rol: "",
    specialty: ""
};

const initialState: UserState = {
    user: initialUser,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveChanges(state, action: PayloadAction<User>) {
            state.user = action.payload;
        }
    }
});

export const { saveChanges } = userSlice.actions;

export default userSlice.reducer;