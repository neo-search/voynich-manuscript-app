import * as React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { PageProps } from "../services/DocumentService";
import { PageThumbnail } from "./PageThumbnail";
import { QuireView } from "./QuireView";

const renderItem = (
  pages: Array<PageProps>,
  index: number,
  navigation: any
) => <PageThumbnail pages={pages} index={index} navigation={navigation} />;

export function QuireList({
  pages,
  navigation,
}: {
  pages: Array<PageProps>;
  navigation: any;
}) {
  const quires = Array.from(new Set(pages.map((p) => p.quire))).sort();
  // var pagesQuire = groupBy(pages, (page) => page.quire);
  return (
    <View>
      {quires.map((quire) => {
        var pagesQuire = pages.filter((p) => p.quire == quire);
        return (
          <QuireView
            pages={pagesQuire}
            navigation={{ navigation }}
            quire={quire}
          ></QuireView>
        );
      })}
    </View>
  );
}
