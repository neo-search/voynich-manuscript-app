import * as React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { PageProps } from "../services/DocumentService";
import { QuireView } from "./QuireView";
import { Spinner } from "./Spinner";

const renderItem = (
  pages: Array<PageProps>,
  quire: number,
  pagesQuire: Array<Number>,
  navigation: any
) => {
  return (
    <QuireView
      pages={pages}
      pagesQuire={pagesQuire}
      navigation={navigation}
      quire={quire}
    />
  );
};

const groupByQuire = function (pages: Array<PageProps>) {
  return pages.reduce(function (quireMap: any, page) {
    const quire = page.quire;
    quireMap[quire] = quireMap[quire] || [];
    quireMap[quire].push(pages.indexOf(page));
    return quireMap;
  }, {});
};

const renderSpinner = function () {
  return <Spinner></Spinner>;
};

export function QuireList({
  pages,
  navigation,
}: {
  pages: Array<PageProps> | undefined;
  navigation: any;
}) {
  if (!pages) return renderSpinner();

  const pagesByQuire = groupByQuire(pages as Array<PageProps>);
  return (
    <View>
      <FlatList<string>
        style={{ margin: 0, padding: 0 }}
        pagingEnabled={false}
        data={Object.keys(pagesByQuire).sort()}
        renderItem={(quire) =>
          renderItem(
            pages as Array<PageProps>,
            Number(quire.item),
            pagesByQuire[quire.item],
            navigation
          )
        }
        keyExtractor={(item) => item}
        horizontal={false}
        decelerationRate={"normal"}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
      />
    </View>
  );
}
