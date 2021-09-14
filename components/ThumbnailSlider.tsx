import * as React from "react";
import { FlatList, View } from "react-native";
import { PageProps } from "../services/DocumentService";
import { PageThumbnail } from "./PageThumbnail";

const renderItem = ({ item }: { item: PageProps }) => (
  <PageThumbnail page={item} />
);

export function ThumbnailSlider({ pages }: { pages: Array<PageProps> }) {
  return (
    <View>
      <FlatList<PageProps>
        style={{ margin: 0, padding: 0 }}
        pagingEnabled={true}
        data={pages}
        renderItem={renderItem}
        keyExtractor={(item) => item.pagePosition}
        horizontal={true}
      />
    </View>

    // <View style={{ flexDirection: "row" }}>
    //   {pages.map((page) => (
    //     <PageThumbnail page={page}></PageThumbnail>
    //   ))}
    // </View>
  );
}
