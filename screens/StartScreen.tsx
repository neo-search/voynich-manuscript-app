import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StatusBar, StyleSheet, Button } from "react-native";
import Hero from "../components/Hero";
import { QuireList } from "../components/QuireList";
import { SafeAreaView, Text, View, ViewWithMargin } from "../components/Themed";
import { ThumbnailSlider } from "../components/ThumbnailSlider";
import { DocumentService, Document } from "../services/DocumentService";
import "../translations/i18n";

// import { Props } from "../types";
const IMAGE_URI =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Voynich_Manuscript_%28119%29.jpg";

export default function StartScreen({ navigation }: any) {
  const [manuscript, setManuscript] = useState<Document>();
  useEffect(() => {
    const fetchManuscript = async () => {
      const result = await documentService.manuscript();
      setManuscript(result);
    };
    fetchManuscript();
  }, []);

  const documentService = new DocumentService();
  const { t } = useTranslation();
  const pages = manuscript?.pages;
  // const pages = documentService.document().pages;
  // const [color, setColor] = useState(null);
  // const array = useState(false);
  console.log("render");
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
          <QuireList pages={pages} navigation={navigation}></QuireList>
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
