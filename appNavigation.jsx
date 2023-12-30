import {
  NavigationContainer,
  createNavigatorFactory,
} from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../components/LandingPage";
import { DetailsPage } from "../components/DetailsPage";
import { SearchScreen } from "../components/SearchScreen";

const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>   
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen
          name="Details"
          options={{ headerShown: false }}
          component={DetailsPage}
        />
        {/* <Stack.Screen
          name="Search"
          options={{ headerShown: false }}
          component={SearchScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
