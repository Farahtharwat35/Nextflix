import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";

type state = null | {
	accessToken: string;
	currentUser?: {
		name: string;
		id: string;
	}
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: null as state,
	reducers: {
		login: (state, action: { payload: { accessToken: string}}) => {
			console.log("login")
			return {
				accessToken: action.payload.accessToken
			}
		},
		selectUser: (state, action: { payload: { name: string, id: string } }) => {
			console.log("users")
			return {
				currentUser: {
					name: action.payload.name,
					id: action.payload.id,
				},
				accessToken: state!.accessToken
			}
		},
		logout: () => null
	},
})

export const { logout, login, selectUser } = authSlice.actions

export default authSlice.reducer

export const authSelection = (state: RootState) => state.auth

