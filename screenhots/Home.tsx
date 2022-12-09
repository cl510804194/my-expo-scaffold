import React from "react";
import { StyleSheet, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTabOne from "./HomeTabOne";
import HomeTabTwo from "./HomeTabTwo";

const Tab = createBottomTabNavigator();

function Index() {
  return (
    <View style={styles.container}>
      {/* <Text>This is Home page!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={HomeTabOne} />
        <Tab.Screen name="Messages" component={HomeTabTwo} />
      </Tab.Navigator>
    </View>
  );
}
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
