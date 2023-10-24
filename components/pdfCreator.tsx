// import React from "react";
// import ReactPDF, {
//   Page,
//   Text,
//   Image,
//   Document,
//   StyleSheet,
//   PDFViewer,
// } from "@react-pdf/renderer";
// import { Font } from "@react-pdf/renderer";
// import ReactDOM from "react-dom";
// // Font.register({
// //   family: "AntonFamily",
// //   src: MyCustomFont,
// // });

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//     fontFamily: "AntonFamily",
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
//     fontFamily: "AntonFamily",
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
//     fontFamily: "AntonFamily",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//     fontFamily: "AntonFamily",
//   },
// });

// const PDFFile = () => {
//   const pageColors = ["#f6d186", "#f67280", "#c06c84"];

//   const pages = [
//     {
//       text: "Second page content goes here...",
//       image:
//         "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcwMzExMzEwNTc0MTAxODM5/lebron-dunk.jpg",
//     },
//     {
//       text: "Third page content goes here...",
//       image:
//         "https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300",
//     },
//   ];

//   return (
//     <PDFViewer>
//       <Document>
//         {pages.map((page, index) => {
//           return (
//             <Page
//               key={index}
//               style={{ ...styles.body, backgroundColor: pageColors[index] }}
//             >
//               <Text style={styles.header} fixed></Text>
//               <Image style={styles.image} src={page.image} />
//               <Text style={styles.text}>{page.text}</Text>
//               <Text
//                 style={styles.pageNumber}
//                 render={({ pageNumber, totalPages }) =>
//                   `${pageNumber} / ${totalPages}`
//                 }
//               />
//             </Page>
//           );
//         })}
//       </Document>
//     </PDFViewer>
//   );
// };

// export default PDFFile;

import React from "react";
import CreateQuestion from "./CreateQuestion";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
} from "@react-pdf/renderer";
import { Box } from "@mui/system";

const MyDocument = ({ question }: any) => (
  <Document>
    <Page>
      <View>
        {/* <Text> */}
        {question.map((item: any, index: any) => {
          return (
            <Text key={index}>
              {" "}
              <ol className="flex flex-col gap-1">
                <li>
                  <Text>{item.question}</Text>
                </li>
                <li className="flex gap-5">
                  <Text>{item.option1}</Text>
                  <Text>{item.option2}</Text>
                </li>
                <li className="flex gap-5">
                  <Text>{item.option3}</Text>
                  <Text>{item.option4}</Text>
                </li>
              </ol>
            </Text>
          );
        })}
        {/* </Text> */}
      </View>
    </Page>
  </Document>
);

// const App = () => (
//   <div>
//     <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? "Loading document..." : "Download now!"
//       }
//     </PDFDownloadLink>
//   </div>
// );

// export default App;
export default MyDocument;
