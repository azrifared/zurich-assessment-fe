import { createAppSlice } from "@/lib/createAppSlice";
import { userService } from "@/lib/services/UserService";
import { UserResponse } from "@/lib/services/UserService";

export interface UserSliceState {
  value: UserResponse | undefined;
  status: "idle" | "loading" | "failed";
}

const initialState: UserSliceState = {
  value: undefined,
  status: "idle"
};

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    asyncUser: create.asyncThunk(
      async (pageNumber: number) => {
        const response = await userService.getUsers();
        const filteredUser = response.data.filter((user) => {
          return user.first_name.toLowerCase().startsWith('g') || user.last_name.toLowerCase().startsWith('w')
        })
        
        return {
          ...response,
          data: filteredUser
        } 
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),
  selectors: {
    getUserValue: (user) =>  user.value,
    getUserStatus: (user) => user.status
  }
})

export const { asyncUser } = userSlice.actions;
export const { getUserValue, getUserStatus } = userSlice.selectors;