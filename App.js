import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import AddItem from "./AddItem";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Meeting" },
    { id: 2, text: "Interview" },
    { id: 3, text: "Appointment with clients" },
    { id: 4, text: "Testing" },
  ]);

  const deleteItem = (id) => {
    setItems((pre) => {
      return pre.filter((item) => item.id != id);
    });
  };

  const addItem = (itemText) => {
    setItems([...items, { id: items.length + 1, text: itemText }]);
  };

  return (
    <View style={styles.container}>
      <Header title="Tasks" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
  },
  img: { width: 100, height: 100, borderRadius: 100 / 2 },
});
