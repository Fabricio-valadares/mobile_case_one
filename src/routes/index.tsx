import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Forgot } from "../screens/Forgot";
import { Dashboard } from "../screens/Dashboard";
import { UpdateUser } from "../screens/UpdateUser";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="dashboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="forgot" component={Forgot} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="updateUser" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
