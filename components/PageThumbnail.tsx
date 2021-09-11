import * as React from "react";

import { TextProps, TextLight } from "./Themed";
import { Image } from "react-native-elements";
import { PageProps } from "../services/DocumentService";
import { View, Text } from "react-native";

export function PageThumbnail({ page }: { page: PageProps }) {
  return (
    <View style={{ flexDirection: "column", margin: 8 }}>
      <View
        style={{
          shadowColor: "#524934",
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
        }}
      >
        <Image
          style={{ width: 90, height: 120 }}
          source={{ uri: page.imageUrl }}
        ></Image>
      </View>
      <TextLight style={{ marginTop: 5 }}>{page.pageTitle}</TextLight>
    </View>
  );
}
