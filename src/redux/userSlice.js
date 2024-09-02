import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuthenticated: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = !!action.payload
    },
    clearUser: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
