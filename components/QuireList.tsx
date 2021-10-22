import * as React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { PageProps } from "../services/DocumentService";
import { QuireView } from "./QuireView";

const renderItem = (
  pages: Array<PageProps>,
  quire: number,
  pagesQuire: Array<Number>,
  navigation: any
) => {
  return (<QuireView pages={pages} pagesQuire={pagesQuire} navigation={navigation} quire={quire} />)
}

const groupByQuire = function(pages: Array<PageProps>) {
  return pages.reduce(function(quireMap : any, page) {
    const quire = page.quire;
    quireMap[quire] = quireMap[quire] || [];
    quireMap[quire].push(pages.indexOf(page));
    return quireMap;
  }, {})
}

export function QuireList({
  pages,
  navigation,
}: {
  pages: Array<PageProps>;
  navigation: any;
}) {
  const pagesByQuire = groupByQuire(pages);
  return (
    <View>
      <FlatList<string>
        style={{ margin: 0, padding: 0 }}
        pagingEnabled={false}
        data={Object.keys(pagesByQuire).sort()}
        renderItem={(quire) => renderItem(pages, Number(quire.item), pagesByQuire[quire.item], navigation)}
        keyExtractor={(item) => item}
        horizontal={false}
        decelerationRate={"normal"}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
      />
      {/* {quires.map((quire) => {
        var pagesQuire = pages.filter((p) => p.quire == quire);
        return (
          <QuireView
            key={quire}
            pages={pages}
            pagesQuire={pagesQuire}
            navigation={{ navigation }}
            quire={quire}
          ></QuireView>
        );
      })} */}
    </View>
  );
}
