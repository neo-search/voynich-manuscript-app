import * as React from "react";

import { Text, TextProps } from "./Themed";
import { Image } from "react-native-elements";
import { PageProps } from "../services/DocumentService";

export function PageThumbnail({ page }: { page: PageProps }) {
  return (
    <Image
      style={{ width: 90, height: 120, margin: 8}}
      source={{ uri: page.imageUrl }}
    ></Image>
  );
}
