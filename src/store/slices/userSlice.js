import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'User Slice',
  initialState: {
    userData: [],
  },
  reducers: {
    getAllUser() {},
    setUsers: (state, action) => {
      return { ...state, userData: action.payload };
    },
  },
});

export const { getAllUser, setUsers } = UserSlice.actions;
export default UserSlice.reducer;
