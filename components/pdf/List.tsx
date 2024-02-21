import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
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
    // flex: 1, // Occupies equal space in the container
    width: 600, // 50% width of the container
    flexDirection: "row",
    rowGap: 10,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  item: {
    flexBasis: "40%",
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
