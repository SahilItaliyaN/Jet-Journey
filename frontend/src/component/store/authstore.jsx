import { create } from "zustand";

const useAuthStore = create((set)=>({
    user: JSON.parse(localStorage.getItem("user-info")) || null,
    login :(user)=>set({user}),
    logout:()=> set({user:null}),
    setUser:(user) => set({user})
}))

export default useAuthStore
// const logoutUser = useAuthStore((state)=> state.logout)
// logoutUser();

// in login and setuser we just have to give object i ""( )""