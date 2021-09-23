import * as React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { Text, View, ViewWithBorder, SafeAreaView } from "../components/Themed";
import { DocumentService } from "../services/DocumentService";
import { ThumbnailSlider } from "../components/ThumbnailSlider";
// import { Props } from "../types";
const IMAGE_URI =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Voynich_Manuscript_%28119%29.jpg";

export default function StartScreen({ navigation }: any) {
  const documentService = new DocumentService();

  const pages = documentService.document().pages;
  return (
    <SafeAreaView style={styles.container}>
      <ViewWithBorder>
        <Text
          onPress={() => navigation.navigate("PageViewerScreen")}
          style={styles.title}
        >
          Read Voynich manuscript
        </Text>
      </ViewWithBorder>
      <ThumbnailSlider pages={pages}></ThumbnailSlider>
      <ViewWithBorder>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Browse throw all pages</Text>
      </ViewWithBorder>
      <ThumbnailSlider pages={pages}></ThumbnailSlider>

      <ViewWithBorder>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Show folding</Text>
      </ViewWithBorder>
      <ThumbnailSlider pages={pages}></ThumbnailSlider>

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
