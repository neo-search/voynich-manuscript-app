import * as React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { PageProps } from "../services/DocumentService";
import { PageThumbnail } from "./PageThumbnail";

const renderItem = (pages: Array<PageProps>, index: number, navigation: any) => (
  <PageThumbnail pages={pages} index={index} navigation={navigation} />
);

export function ThumbnailSlider({
  pages,
  navigation,
}: {
  pages: Array<PageProps>;
  navigation: any;
}) {
  return (
    <View>
      <FlatList<PageProps>
        style={{ margin: 0, padding: 0 }}
        pagingEnabled={false}
        data={pages}
        renderItem={(item) => renderItem(pages, item.index, navigation)}
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
