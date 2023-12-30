import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { universalStyle } from "../theme/index";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
export const TrendingBanner = ({ data }) => {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("Details", item);
  };

  return (
    <View style={{ marginTop: height * 0.08 }}>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <TrendingBannerCard
            item={item}
            handleClick={() => handleClick(item.topic)}
          />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.9}
        slideStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

const TrendingBannerCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick} >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
          paddingTop:15,
          paddingBottom:30,
          backgroundColor: "#282836",
          borderRadius: 8,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white", fontSize: 16, marginBottom: 15 }}>
            <Text style={universalStyle.secondaryColor}>{item.title}</Text>
          </Text>
          <Text style={{ color: "white", flexWrap: "wrap" }}>
            {item.subTitle}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Image
            source={require("../assets/leftFlowerBracket.png")}
            style={{
              width: width * 0.04,
              height: height * 0.07,
              marginRight: 5, // Adjust margin as needed
            }}
          />
          <Image
            source={require("../assets/pythonLogo.png")}
            style={{
              width: width * 0.04,
              height: height * 0.07,
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};


TrendingBanner.propTypes = {}