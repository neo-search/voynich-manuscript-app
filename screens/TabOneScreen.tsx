import * as React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { Text, View } from "../components/Themed";
import { DocumentService } from "../services/DocumentService";
import { ThumbnailSlider } from "../components/ThumbnailSlider";

const IMAGE_URI =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Voynich_Manuscript_%28119%29.jpg";

export default function TabOneScreen() {
  const documentService = new DocumentService();
  const page1 = documentService.page(1);
  const page2 = documentService.page(2);
  const page3 = documentService.page(3);
  const page4 = documentService.page(4);
  const page5 = documentService.page(5);
  const pages = [page1, page2, page3, page4, page5];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Read Voynich manuscript</Text>
      <ThumbnailSlider pages={pages}></ThumbnailSlider>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Browse throw all pages</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: IMAGE_URI }}
      ></Image>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Show folding</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: IMAGE_URI }}
      ></Image>

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
