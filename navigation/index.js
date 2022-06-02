import { createStackNavigator, StackView } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react";
import React from "react";
import HomeScreen from "../src/screens/HomeScreen";
import QuizScreen from "../src/screens/QuizScreen";
import ResultScreen from "../src/screens/ResultScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
