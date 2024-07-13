import { createContext } from "react";

export interface User {
  token: string | null
  address: string
  inviteCode: string
}
export interface UserContextValue {
  user: User | null
  changeUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  changeUser: () => { },
});