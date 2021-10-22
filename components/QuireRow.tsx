import * as React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { PageProps } from "../services/DocumentService";
import { PageThumbnail } from "./PageThumbnail";

const renderItem = (
  pages: Array<PageProps>,
  index: number,
  navigation: any
) => {
  return <PageThumbnail pages={pages} index={index} navigation={navigation} />;
};
export function QuireRow({
  pages,
  index,
  pagesRow,
  navigation,
}: {
  pages: Array<PageProps>;
  index: number;
  pagesRow: Array<number>;
  navigation: any;
}) {
  return (
    <View style={{ alignContent: "space-between" }}>
      <FlatList<number>
        style={{ margin: 0, padding: 0, alignContent: "center" }}
        pagingEnabled={false}
        data={pagesRow}
        renderItem={(item) => renderItem(pages, item.item, navigation)}
        keyExtractor={(item) => item.toString()}
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
