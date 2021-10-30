import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  ListRenderItemInfo,
  FlatList,
} from "react-native";
import { Image, Text } from "react-native-elements";
import ImageZoom from "react-native-image-pan-zoom";
import { SafeAreaView } from "../components/Themed";
import { DocumentService, PageProps } from "../services/DocumentService";
import HTMLView from "react-native-htmlview";

function _render(item: ListRenderItemInfo<PageProps>) {
  const page = item.item;
  const imageRatio = page.image.height / page.image.width;
  const imageHeight =
    imageRatio > 0 ? Dimensions.get("window").width * imageRatio : 100;
  const generalDescription =
    page.description &&
    page.description.generalDescription &&
    page.description.generalDescription.en;
  console.log("age.description.", generalDescription);

  const illustrationDescription =
    page.description &&
    page.description.illustrations &&
    page.description.illustrations.en;

  const textDescription =
    page.description && page.description.text && page.description.text.en;

  const otherInformation =
    page.description &&
    page.description.otherInformation &&
    page.description.otherInformation.en;

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <ImageZoom
        maxScale={10}
        minScale={1}
        // useNativeDriver={true}
        cropWidth={Dimensions.get("window").width}
        cropHeight={imageHeight}
        imageWidth={Dimensions.get("window").width}
        imageHeight={imageHeight}
      >
        <Image
          source={{
            uri: page.image.fullsize,
          }}
          style={{
            width: Dimensions.get("window").width,
            height: imageHeight,
            //   // width: '100%',
            //   // height: 1
          }}
        ></Image>
      </ImageZoom>
      <View
        style={{
          borderWidth: 10,
          margin: 0,
          // padding: 12,
          width: Dimensions.get("window").width,
          borderRadius: 12,
          borderColor: "white",
          backgroundColor: "white",
          // bord
          // border
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{page.name}</Text>
        {/* <Text style={{ fontSize: 16 }}>Transliterations</Text> */}

        {/* <View style={{ width: 200, backgroundColor: "blue" }}> */}
        {generalDescription ? (
          <>
            <Text style={{ fontWeight: "bold" }}>General Information</Text>
            <HTMLView
              // style={{ window: Dimensions.get("window").width }}
              value={generalDescription}
            ></HTMLView>
          </>
        ) : (
          <></>
        )}

        {/* <View style={{ width: 200, backgroundColor: "blue" }}> */}
        {illustrationDescription ? (
          <>
            <Text style={{ fontWeight: "bold" }}>Illustration</Text>
            <HTMLView
              // style={{ window: Dimensions.get("window").width }}
              value={illustrationDescription}
            ></HTMLView>
          </>
        ) : (
          <></>
        )}
        {/* <View style={{ width: 200, backgroundColor: "blue" }}> */}
        {textDescription ? (
          <>
            <Text style={{ fontWeight: "bold" }}>Text</Text>
            <HTMLView
              // style={{ window: Dimensions.get("window").width }}
              value={textDescription}
            ></HTMLView>
          </>
        ) : (
          <></>
        )}
        {/* <View style={{ width: 200, backgroundColor: "blue" }}> */}
        {otherInformation ? (
          <>
            <Text style={{ fontWeight: "bold" }}>Other Information</Text>
            <HTMLView
              // style={{ window: Dimensions.get("window").width }}
              value={otherInformation}
            ></HTMLView>
          </>
        ) : (
          <></>
        )}
        <Text style={{ fontWeight: "bold" }}>Transcription</Text>
        {page.interlinearTranscription &&
          page.interlinearTranscription.transcription.map((e) => (
            <Text>{e}</Text>
          ))}
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
