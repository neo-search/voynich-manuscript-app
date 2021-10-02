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
        pagingEnabled={false}
        data={pages}
        renderItem={renderItem}
        keyExtractor={(item) => item.pagePosition}
        horizontal={true}
        decelerationRate={"normal"}
        // disableIntervalMomentum={true}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
      />
    </View>
  );
}
