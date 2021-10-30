import * as React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageProps } from "../services/DocumentService";
import { QuireRow } from "./QuireRow";

const renderItem = (
  pages: Array<PageProps>,
  index: number,
  pagesQuireRow: Array<number>,
  navigation: any
) => <QuireRow pages={pages} index={index} pagesRow={pagesQuireRow} navigation={navigation} />;

const groupByQuireRow = function (pages: Array<PageProps>, pagesRow: Array<PageProps>) {
  return pagesRow.reduce(function (quireRowMap: any, page) {
    const quireRow = page.quirerow;
    quireRowMap[quireRow] = quireRowMap[quireRow] || [];
    quireRowMap[quireRow].push(pages.indexOf(page));
    return quireRowMap;
  }, {});
};

export function QuireView({
  pages,
  pagesQuire,
  quire,
  navigation,
}: {
  pages: Array<PageProps>;
  pagesQuire: Array<Number>;
  navigation: any;
  quire: number;
}) {
  const quireRowMap = groupByQuireRow(pages, 
    pagesQuire.map((p) => pages[p.valueOf()])
  );
  return (
    <View>
      <Text>Quire: {Number(quire)}</Text>
      <FlatList<string>
        style={{ margin: 0, padding: 0 }}
        pagingEnabled={false}
        data={Object.keys(quireRowMap).sort()}
        renderItem={(quireRow) => renderItem(pages, Number(quireRow.item), quireRowMap[quireRow.item], navigation)}
        keyExtractor={(item) => item}
        horizontal={false}
        decelerationRate={"normal"}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
      />
      {/* {rows.map((row) => {
        var pagesRow = pagesQuire.filter((p) => p.quireRow == row);
        return (
          <QuireRow
            key={row}
            pages={pages}
            pagesRow={pagesRow}
            navigation={{ navigation }}
          ></QuireRow>
        );
      })} */}
    </View>
  );
}
