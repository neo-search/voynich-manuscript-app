import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ListRenderItemInfo,
  FlatList,
} from "react-native";
import { Image } from "react-native-elements";
import ImageZoom from "react-native-image-pan-zoom";
import { SafeAreaView } from "../components/Themed";
import { DocumentService, PageProps } from "../services/DocumentService";

const IMAGE_URI =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Voynich_Manuscript_%28119%29.jpg";

function _render(item: any) {
  return (
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
            uri: item.item.imageUrl,
          }}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        ></Image>
      </ImageZoom>
      <View style={{ borderWidth: 0, margin: 0, padding: 0 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>f20v</Text>
        <Text style={{ fontSize: 16 }}>Transliterations</Text>

        <Text>DSGA DSFAGS ES DFA AADS SADG GPHS </Text>
        <Text>B</Text>
        <Text>C</Text>
      </View>
    </ScrollView>
  );
}
export default function PageViewerScreen({ route }: { route: any }) {
  const pages = route.params.pages;
  const index = route.params.index;
  console.log("index: " + index);
  const item = pages[index];
  const documentService = new DocumentService();
  const imageWidth = Dimensions.get("window").width
  const imageHeight =  Dimensions.get("window").height

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<PageProps>
        style={{ margin: 0, padding: 0 }}
        pagingEnabled={true}
        data={pages}
        renderItem={(item) => _render(item)}
        keyExtractor={(item) => item.pagePosition}
        horizontal={true}
        decelerationRate={"normal"}
        initialScrollIndex={index}
        getItemLayout={(data, index) => ({
          length: imageHeight,
          offset: imageWidth * index,
          index: index
        })}
        // onScrollToIndexFailed={info => {
        //   const wait = new Promise(resolve => setTimeout(resolve, 500));
        //   wait.then(() => {
        //     flatList.current?.scrollToIndex({ index: info.index, animated: true });
        //   });
        // }}
        // disableIntervalMomentum={true}
        // getItemLayout={(data, index) => ({
        //   length: 100,
        //   offset: 100 * index,
        //   index,
        // })}
      />
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
    // marginVertical: 30,
    height: 1,
    // width: "80%",
  },
});
