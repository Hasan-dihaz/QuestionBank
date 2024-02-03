import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    // width: 600,
    flexDirection: "row",
    marginBottom: 5,
    marginRight: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Lato",
  },
  list: {
    // width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});

const List = ({ children }: any) => <View style={styles.list}>{children}</View>;

export const Item = ({ children }: any) => (
  <View style={styles.item}>
    {/* <Text style={styles.bulletPoint}>•</Text> */}
    {/* <Text style={styles.itemContent}>{children}</Text> */}
    {children}
  </View>
);

export default List;
