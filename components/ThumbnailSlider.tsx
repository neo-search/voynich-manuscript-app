import * as React from "react";
import { FlatList } from "react-native";
import { PageProps } from "../services/DocumentService";
import { PageThumbnail } from "./PageThumbnail";


const renderItem = ({ item }: { item: PageProps }) => (
  <PageThumbnail page={item} />
);

export function ThumbnailSlider({ pages }: { pages: Array<PageProps> }) {
  return (
    <FlatList<PageProps>
      data={pages}
      renderItem={renderItem}
      keyExtractor={(item) => item.pagePosition}
      horizontal={true}
    />

    // <View style={{ flexDirection: "row" }}>
    //   {pages.map((page) => (
    //     <PageThumbnail page={page}></PageThumbnail>
    //   ))}
    // </View>
  );
}
