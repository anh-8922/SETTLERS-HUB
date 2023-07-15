import { createContext, useReducer, useState } from "react";

export const AppContext = createContext()

export default function AppContextProvider ({children}) {
    const reducer = (state, action) => {
        switch (action.type) {
            case "EDIT_COMMUNITY_POST":
            console.log("action.payload:", action.payload);

        return {
          ...state,
          posts: [...state.posts.filter((item) => item._id !== action.payload)],
        };
        default:
        return state
    };

    }

    const [state, dispatch] = useReducer(reducer, {
        user: {},
        posts: [],
      });
    
      return (
        <AppContext.Provider value={{ state, dispatch }}>
          {children}
        </AppContext.Provider>
      );
    }