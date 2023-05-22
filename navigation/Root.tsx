import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stack from "./Stack";
import { Movie } from "../api";

export type TabNavParamList = {
  Movies: undefined;
  TV: undefined;
  Search: undefined;
};

export type StackNavParamList = {
  Detail: Movie;
};

export type RootNavParamList = {
  Tabs: TabNavParamList;
  Stack: StackNavParamList;
};

const Nav = createNativeStackNavigator<RootNavParamList>();

const Root = () => (
  <Nav.Navigator screenOptions={{ presentation: "modal", headerShown: false }}>
    <Nav.Screen name="Tabs" component={Tabs} />
    <Nav.Screen name="Stack" component={Stack} />
  </Nav.Navigator>
);
export default Root;
