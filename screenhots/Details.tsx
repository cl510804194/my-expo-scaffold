import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CommonProps } from "../types";
export interface IProps extends CommonProps {}
function Index({ navigation }: IProps) {
  return (
    <View >
      <Text>This is Details page!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* <Button
        title="Go back to first screen in stack"
        // onPress={() => navigation.}
      /> */}
    </View>
  );
}
export default Index;
