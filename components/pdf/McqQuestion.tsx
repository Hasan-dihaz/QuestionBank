/* eslint-disable react/no-array-index-key */

import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";
import List, { Item } from "./List";
import { wrap } from "module";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 30,
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: "Lato Italic",
  },
  detailContainer: {
    flexDirection: "row",
  },
  detailLeftColumn: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  headerContainer: {
    // flexDirection: "row",
    // width: 100,
    flexDirection: "column",
    gap: 5,
    marginBottom: 10,
    height: 100,
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
  },
  title: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato Bold",
  },
  question: {},
  option: {
    // flex: 1,
    // width: 150,
    flexDirection: "row",
    gap: "10",
    // justifyContent: "space-between",
    // flexWrap: "wrap",
  },
});

const ExperienceEntry = ({ company, details, position, date }: any) => {
  const title = `${company} | ${position}`;
  details.map((item: any) => console.log("details.map", item));

  return (
    <List>
      {details.map((detail: any, i: any) => {
        return (
          <Item key={i}>
            <View style={styles.question}>
              <Text style={styles.title}>{i + 1}. question</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.title}>1. option1</Text>
              <Text style={styles.title}>2. option2</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.title}>3. option3</Text>
              <Text style={styles.title}>4. option4</Text>
            </View>
          </Item>
        );
      })}
    </List>
  );
};

const experienceData = [
  {
    company: "Jedi Temple, Coruseant",
    date: "A long time ago...",
    details: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ],
    position: "Head Jedi Master",
  },
];

const McqQuestion = () => (
  <View style={styles.container}>
    {experienceData.map(({ company, date, details, position }) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={company + position}
        position={position}
      />
    ))}
  </View>
);

export default McqQuestion;
