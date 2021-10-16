import React from "react";

import { Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

// const ICON_COLOR = "#B96F58";
// const ICON_COLOR = "#6D8D68";
const ICON_COLOR = "white";
const TEXT_COLOR = "white";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        borderRadius: 14,
        // borderWidth: 4,
        // fontSize: 18,
        // fontFamily: "Gill Sans",
        // textAlign: "center",
        // margin: 10,
        margin: 0,
        paddingVertical: 16,
        flexDirection: "row",
        // border:12
        // color: "#ffffff",
        backgroundColor: "#B96F58",
        flexWrap: "wrap",
      }}
    >
      <View style={{ alignContent: "center", width: 70, marginLeft: 12 }}>
        {/* <FontAwesome
          name="university"
          size={32}
          style={{ textAlign: "center" }}
          color="#AB9B7A"
        /> */}
        <AntDesign
          name="book"
          size={40}
          style={{ textAlign: "center" }}
          color={ICON_COLOR}
        />
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <Text
          style={{
            color: TEXT_COLOR,
            textAlign: "center",
            marginTop: 5,
            // textDecorationStyle: "dotted",
            // fontWeight: "bold",
            // fontStyle: "italic",
          }}
        >
          {t("history")}
        </Text>
      </View>
      <View style={{ alignContent: "center", marginLeft: 12, width: 70 }}>
        {/* <FontAwesome
          name="university"
          style={{ textAlign: "center" }}
          size={32}
          color="#AB9B7A"
        /> */}

        {/* <AntDesign name="questioncircleo" size={24} color="black" /> */}
        <AntDesign
          name="questioncircleo"
          style={{ textAlign: "center" }}
          size={40}
          color={ICON_COLOR}
        />
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <Text style={{ color: TEXT_COLOR, textAlign: "center", marginTop: 5 }}>
        {t("faq")}
        </Text>
      </View>
      <View style={{ alignContent: "center", marginLeft: 12, width: 70 }}>
        {/* <FontAwesome
          name="university"
          style={{ textAlign: "center" }}
          size={32}
          color="#A18F6A"
        /> */}
        <FontAwesome
          name="reddit"
          style={{ textAlign: "center" }}
          size={40}
          color={ICON_COLOR}
        />
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <Text style={{ color: TEXT_COLOR, textAlign: "center", marginTop: 5 }}>
        {t("reddit_forum")}
        </Text>
      </View>
      <View style={{ alignContent: "center", marginLeft: 12, width: 70 }}>
        {/* <FontAwesome
          name="university"
          style={{ textAlign: "center" }}
          size={32}
          color="#A18F6A"
        /> */}
        <SimpleLineIcons
          name="note"
          style={{ textAlign: "center" }}
          size={40}
          color={ICON_COLOR}
        />
        {/* <FontAwesome
          name="reddit"
          style={{ textAlign: "center" }}
          size={40}
          color="#A18F6A"
        /> */}
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <Text style={{ color: TEXT_COLOR, textAlign: "center", marginTop: 5 }}>
          {t("my_notes")}
        </Text>
      </View>
      <View style={{ alignContent: "center", marginLeft: 12, width: 70 }}>
        {/* <FontAwesome
          name="university"
          style={{ textAlign: "center" }}
          size={32}
          color="#A18F6A"
        /> */}

        <AntDesign
          name="heart"
          style={{ textAlign: "center" }}
          size={40}
          color={ICON_COLOR}
        />
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <Text
          style={{
            // color: ICON_COLOR,
            textAlign: "center",
            marginTop: 5,
            color: TEXT_COLOR,
          }}
        >
          {t("premium")}
        </Text>
      </View>
    </View>
  );
};
export default Hero;
