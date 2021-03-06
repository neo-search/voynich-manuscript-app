import * as React from "react";

import { TextProps, TextLight } from "./Themed";
import { Image } from "react-native-elements";
import { PageProps } from "../services/DocumentService";
import { View, Text, Pressable } from "react-native";

export function PageThumbnail({
  pages,
  index,
  navigation
}: {
  pages: Array<PageProps>;
  index: number;
  navigation: any;
}) {
  console.log("index: " + index)
  console.log(pages[index])
  return (
    <View
      style={{
        marginLeft: 12,
        marginRight: 12,
      }}
    >
      <View
        style={{
          shadowColor: "#524934",
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
        }}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("PageViewerScreen", { pages, index })
          }
        >
          <Image
            style={{ width: 100, height: 120 }}
            source={{ uri: pages[index].image.thumb }}
          ></Image>
        </Pressable>
      </View>
      <TextLight style={{ marginTop: 5 }}>{pages[index].pageTitle}</TextLight>
    </View>
  );
}
