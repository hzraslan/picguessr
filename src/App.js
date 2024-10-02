import React, { useReducer, useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FileUpload from "./containers/FileUpload";
import LandingPage from "./containers/LandingPage/LandingPage";
import "./App.css";
import CreateAGame from "./containers/CreateAGame/CreateAGame";
import { Firebase } from "./firebase/firebase-init";
import TopBar from "./components/reusables/OverlayComponents/TopBar/TopBar";
import LoginPage from "./containers/LoginPage/LoginPage";
import { onAuthStateChanged } from "firebase/auth";

const AppContext = React.createContext(null)
const initialState = {
  firebase: new Firebase(),
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFirebase':
      return {...state, firebase: action.payload}
    case 'updateUser':
      return {...state, user: action.payload}
    default:
      return state
  }
}
export const useAppContext = () => {
  return useContext(AppContext)
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  onAuthStateChanged(initialState.firebase.auth, (user) => {
    if (user) {
      if(user === state.user) return
      dispatch({type: 'updateUser', payload: user});
    } else {
      dispatch({type: 'updateUser', payload: null});
    }
  });

  return (
    <div className="app w-100 h-100">
      <AppContext.Provider value={{state, dispatch}} >
      <BrowserRouter>
      <TopBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/create-a-game" element={<CreateAGame />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
