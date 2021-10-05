import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-elements";
import { Text, View, ViewWithMargin, SafeAreaView } from "../components/Themed";
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
      <ScrollView>
        <ViewWithMargin>
          <Text
            onPress={() => navigation.navigate("PageViewerScreen", {})}
            style={styles.title}
          >
            Read Voynich manuscript
          </Text>
        </ViewWithMargin>
        <ThumbnailSlider
          pages={pages}
          navigation={navigation}
        ></ThumbnailSlider>
        <ViewWithMargin>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.title}>Browse throw all pages</Text>
        </ViewWithMargin>
        <ThumbnailSlider
          pages={pages}
          navigation={navigation}
        ></ThumbnailSlider>

        <ViewWithMargin>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.title}>Show folding</Text>
        </ViewWithMargin>
        <ThumbnailSlider pages={pages} navigation={navigation}></ThumbnailSlider>
      </ScrollView>
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
