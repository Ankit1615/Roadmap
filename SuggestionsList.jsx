import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
function SuggestionsList(props) {
  return (
    <View>
      <Text className=" text-white m-4 mt-7 mb-30 text-xl font-medium">
        Suggestions
      </Text>
      <ItemList
        titleText="Angular Basics"
        titleFor="angular"
        Section="1"
        Links="4"
        Notes="NA"
        img={require("../assets/Angularlogo.png")}
      />
      <ItemList
        titleText="Fun With Java"
        titleFor="java"
        Section="1"
        Links="139"
        Notes="NA"
        img={require("../assets/javaLogo.png")}
      />
      <ItemList
        titleText="Understanding Javascript"
        titleFor="javascript"
        Section="2"
        Links="453"
        Notes="NA"
        img={require("../assets/JavascriptLogo.png")}
      />
      <ItemList
        titleText="ReactJs For Beginners"
        titleFor="react"
        Section="3"
        Links="368"
        Notes="0"
        img={require("../assets/reactLogo.png")}
      />
      <ItemList
        titleText="Working With MySql"
        titleFor="mysql"
        Section="1"
        Links="23"
        Notes="NA"
        img={require("../assets/sqlLogo.png")}
      />
    </View>
  );
}

SuggestionsList.propTypes = {};

const ItemList = ({ titleText, Section, Links, Notes, img, titleFor }) => {
  const navigation = useNavigation();
  const handleClick = async (data) => {
    navigation.navigate("Details", data);
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleClick(titleFor)}>
      <View className="flex-row items-center">
        <Text
          className="text-white"
          style={{
            fontSize: height * 0.05,
            marginRight: 5,
            color: "#5766F3",
            fontWeight: "200",
          }}
        >
          {"{"}
        </Text>
        <Image className=" mt-2 h-6 w-6 text-white" source={img} />
        <Text
          className="text-white"
          style={{
            fontSize: height * 0.05,
            marginRight: 5,
            color: "#5766F3",
            fontWeight: "200",
          }}
        >
          {"}"}
        </Text>
        <View className="mt-5">
          <Text className="text-white ml-3 mb-1">{titleText}</Text>
          <View className="flex-row">
            <Text className=" text-sm ml-3 text-neutral-500 ">
              Section: {Section}
            </Text>
            <Text className=" text-sm ml-3 text-neutral-500 ">
              Links: {Links}
            </Text>
            <Text className=" text-sm ml-3 text-neutral-500 ">
              Notes: {Notes}
            </Text>
          </View>
          <Image
            className="mt-4 ml-3"
            source={require("../assets/straightLine.png")}
            style={{ width: width * 0.76 }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SuggestionsList;
