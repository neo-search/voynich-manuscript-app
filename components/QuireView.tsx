import * as React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageProps } from "../services/DocumentService";
import { PageThumbnail } from "./PageThumbnail";
import { QuireRow } from "./QuireRow";

const renderItem = (
  pages: Array<PageProps>,
  index: number,
  navigation: any
) => <PageThumbnail pages={pages} index={index} navigation={navigation} />;

export function QuireView({
  pages,
  quire,
  navigation,
}: {
  pages: Array<PageProps>;
  navigation: any;
  quire: number;
}) {
  const rows = Array.from(new Set(pages.map((p) => p.quireRow))).sort();
  return (
    <View>
      <View>
        <Text>Quire: {quire}</Text>
        {rows.map((row) => {
          var pagesRow = pages.filter((p) => p.quireRow == row);
          return (
            <QuireRow pages={pagesRow} navigation={{ navigation }}></QuireRow>
          );
        })}
      </View>
    </View>
  );
}
