import * as React from "react";

import { Text, TextProps } from "./Themed";
import { Image } from "react-native-elements";
import { PageProps } from "../services/DocumentService";
import { PageThumbnail } from "./PageThumbnail";
import { View } from "react-native";

export function ThumbnailSlider({ pages }: { pages: Array<PageProps> }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {pages.map((page) => (
        <PageThumbnail page={page}></PageThumbnail>
      ))}
    </View>
  );
}
