import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ListRenderItemInfo,
} from "react-native";
import { Image } from "react-native-elements";
import ImageZoom from "react-native-image-pan-zoom";
import { SafeAreaView } from "../components/Themed";
import { DocumentService, PageProps } from "../services/DocumentService";

const IMAGE_URI =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Voynich_Manuscript_%28119%29.jpg";

export default function PageViewerScreen({route}: {route: any}) {
  const pages = route.params.pages; 
  const index = route.params.index;
  const item = pages[index];
  const documentService = new DocumentService();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageZoom
          useNativeDriver={true}
          cropWidth={Dimensions.get("window").width}
          cropHeight={Dimensions.get("window").height}
          imageWidth={Dimensions.get("window").width}
          imageHeight={Dimensions.get("window").height}
        >
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
            }}
          ></Image>
        </ImageZoom>
        <View style={{ backgroundColor: "white" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>f20v</Text>
          <Text style={{ fontSize: 16 }}>Transliterations</Text>

          <Text>DSGA DSFAGS ES DFA AADS SADG GPHS ADADO SDFAOD DAFAO</Text>
          <Text>B</Text>
          <Text>C</Text>
        </View>
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
