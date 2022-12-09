import React from "react";
import { Text, View, Button } from "react-native";
import { IProps } from "./Details";
function Index({ navigation }: IProps) {
  return (
    <View>
      <Text>Home tab 1 </Text>
      <Button
        title="go to Details page"
        onPress={() => {
          navigation.navigate("Details");
        }}
      ></Button>
    </View>
  );
}
export default Index;
