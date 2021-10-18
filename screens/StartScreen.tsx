import * as React from "react";
import { StyleSheet, ScrollView, StatusBar } from "react-native";
import { Image } from "react-native-elements";
import { Text, View, ViewWithMargin, SafeAreaView } from "../components/Themed";
import { DocumentService } from "../services/DocumentService";
import { ThumbnailSlider } from "../components/ThumbnailSlider";
import Hero from "../components/Hero";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { QuireList } from "../components/QuireList";

// import { Props } from "../types";
const IMAGE_URI =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Voynich_Manuscript_%28119%29.jpg";

export default function StartScreen({ navigation }: any) {
  const documentService = new DocumentService();
  const { t } = useTranslation();
  const pages = documentService.document().pages;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#E0DACD", "white"]}
        // style={styles.background}
      >
        <ScrollView>
          <ViewWithMargin>
            <View style={{ marginTop: 30, backgroundColor: "transparent" }}>
              <Hero></Hero>
            </View>
            <Text
              onPress={() => navigation.navigate("PageViewerScreen", {})}
              style={styles.title}
            >
              {t("read_manuscript")}
            </Text>
          </ViewWithMargin>
          <QuireList
            pages={pages}
            navigation={navigation}
          ></QuireList>
          <ViewWithMargin>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.9)"
            />
            <Text style={styles.title}>{t("page_navigation")}</Text>
          </ViewWithMargin>
          <ViewWithMargin>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
            <Text style={styles.title}>{t("show_folding")}</Text>
          </ViewWithMargin>
          <ThumbnailSlider
            pages={pages}
            navigation={navigation}
          ></ThumbnailSlider>
        </ScrollView>
      </LinearGradient>
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0)",
    marginTop: 20,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 20,
    // height: 1,
    width: "80%",
  },
});
