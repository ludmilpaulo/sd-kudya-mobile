import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, selectUser } from "../redux/slices/authSlice";
import AuthNavigator from "./AuthNavigator";

//import HomeNavigator from "./HomeNavigator";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["new NativeEventEmitter"]);

export default function AppNavigator() {
  const user = useSelector(selectUser);



  return (
    <NavigationContainer>
      
    
      <AuthNavigator />
    </NavigationContainer>
  );
}