import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Forgot } from "../screens/Forgot";
import { Dashboard } from "../screens/Dashboard";
import { UpdateUser } from "../screens/UpdateUser";
import { AuthContext } from "../../src/provider/Auth";

const Stack = createStackNavigator();

const Routes = () => {
  const { auth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {auth ? (
          <>
            <Stack.Screen name="dashboard" component={Dashboard} />
            <Stack.Screen name="updateUser" component={UpdateUser} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="forgot" component={Forgot} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
