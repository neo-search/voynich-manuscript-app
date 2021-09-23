import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import ImageZoom from "react-native-image-pan-zoom";
import { SafeAreaView } from "../components/Themed";
import { DocumentService } from "../services/DocumentService";

const IMAGE_URI =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Voynich_Manuscript_%28119%29.jpg";

export default function PageViewerScreen() {
  const documentService = new DocumentService();

  const pages = documentService.document().pages;
  return (
    <SafeAreaView style={styles.container}>
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={Dimensions.get("window").width}
        imageHeight={Dimensions.get("window").height}
      >
        <Image
          source={{
            uri: "https://ia902608.us.archive.org/BookReader/BookReaderImages.php?zip=/18/items/TheVoynichManuscript/Voynich_Manuscript_jp2.zip&file=Voynich_Manuscript_jp2/Voynich_Manuscript_0011.jp2&id=TheVoynichManuscript&scale=2&rotate=0",
          }}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        ></Image>
      </ImageZoom>
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
