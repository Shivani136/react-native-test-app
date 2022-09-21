import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Screens from "../component/Screens";
import ListItem from "../component/list/ListItem";
import ListItemSeperator from "../component/list/ListItemSeperator";
import ListItemDeleteAction from "../component/list/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description: "Hey! Is this item still available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreens(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screens>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Test User",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreens;
