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

function _render(item: ListRenderItemInfo<PageProps>) {
  const imageRatio = item.item.image.height / item.item.image.width;
  const imageHeight =
    imageRatio > 0 ? Dimensions.get("window").width * imageRatio : 100;
  return (
    <ScrollView>
      <ImageZoom
        useNativeDriver={true}
        cropWidth={Dimensions.get("window").width}
        cropHeight={imageHeight}
        imageWidth={Dimensions.get("window").width}
        imageHeight={imageHeight}
      >
        <Image
          source={{
            uri: item.item.image.fullsize,
          }}
          style={{
            width: Dimensions.get("window").width,
            height: imageHeight,
            //   // width: '100%',
            //   // height: 1
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
  const item = pages[index];
  const documentService = new DocumentService();
  const imageWidth = Dimensions.get("window").width;
  const imageHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<PageProps>
        style={{ margin: 0, padding: 0 }}
        pagingEnabled={true}
        data={pages}
        renderItem={(item) => _render(item)}
        keyExtractor={(item) => item.name}
        horizontal={true}
        decelerationRate={"normal"}
        // initialScrollIndex={index}
        // getItemLayout={(data, index) => ({
        //   length: imageWidth,
        //   offset: imageWidth * index,
        //   index: index,
        // })}
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
    // flex: 1,
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
