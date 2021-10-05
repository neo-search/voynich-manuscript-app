/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import PageViewerScreen from "../screens/PageViewerScreen";
import StartScreen from "../screens/StartScreen";
import { TabOneParamList } from "../types";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerTitle: "Start", headerShown: false }}
      />
      <TabOneStack.Screen
        name="PageViewerScreen"
        component={PageViewerScreen}
        options={{ headerTitle: "Detail", headerShown: true }}
      />
    </TabOneStack.Navigator>
  );
}