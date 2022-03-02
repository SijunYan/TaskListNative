import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    text
      ? addItem(text)
      : Alert.alert("Error", "Please enter an item", [{ text: "Ok" }]);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Task..."
        style={styles.input}
        onChangeText={(textValue) => setText(textValue)}
      ></TextInput>
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>
          <AntDesign
            name="plus"
            size={20}
            onPress={() => deleteItem(item.id)}
          />
          Add Task
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: { height: 60, padding: 8, fontSize: 16 },
  btn: { backgroundColor: "#c2bad8", padding: 9, margin: 5 },
  btnText: { color: "darkslateblue", fontSize: 20, textAlign: "center" },
});

export default AddItem;
