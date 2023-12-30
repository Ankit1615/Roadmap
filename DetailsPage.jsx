import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme, universalStyle } from "../theme/index";
import {
  ChevronLeftIcon,
  HeartIcon,
  LinkIcon,
} from "react-native-heroicons/outline";
import fetchTopic from "../api/topicApiCall";

const ios = Platform.OS == "ios";
var { width, height } = Dimensions.get("window");
var topMargin = ios ? "" : "mt-3";

export const DetailsPage = () => {
  const { params: item } = useRoute();

  const [isFavourite, toggleFavourite] = useState(false);
  const [topicData, setTopicData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getTopicDetails();
    console.log(item);
  }, [item]);

  const getTopicDetails = async () => {
    const data = await fetchTopic(item);
    console.log("data console: ", data);
    if (data) setTopicData(data);
  };

  const handelFavourite = () => {
    toggleFavourite(!isFavourite);
  };

  const text = "Angular";

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1"
      style={{ backgroundColor: "#111111" }}
    >
      <View className="w-full ">
        <SafeAreaView
          className={
            "z-20 w-full flex-row justify-between items-center px-4 flex-row justify-between items-center mx-4" +
            topMargin
          }
        >
          <TouchableOpacity
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <Text className="text-white  text-3xl font-bold items-center">
            Details
          </Text>
          <TouchableOpacity onPress={handelFavourite}>
            <HeartIcon color={isFavourite ? "#70CFCB" : "white"} size="35" />
          </TouchableOpacity>
        </SafeAreaView>
        <View
          style={{ backgroundColor: "#282836" }}
          className="m-4 rounded-md p-4 mt-10"
        >
          <Text className="text-white text-2xl" style={{textTransform: 'capitalize'}}>
            {item > 10 ? item.slice(0, 10) + "..." : item}
          </Text>
        </View>
        <DetailsSection item={topicData} />
        <Lessons item={topicData} />
      </View>
    </ScrollView>
  );
};


DetailsPage.propTypes = {}

const DetailsSection = ({ item }) => {
  return (
    <View className="ml-4 mt-2">
      <Image source={require("../assets/straightLine.png")} style={{}} />
      <View
        className="flex-row justify-between mr-4"
        style={{ marginTop: height * 0.02 }}
      >
        <Categories
          text="Sections"
          count={
            item?.publicGetGlobalTopic?.latestGlobalGuide?.sections?.length || 0
          }
        />
        <Categories
          text="Links"
          count={item?.publicGetGlobalTopic?.links?.length}
        />
        <Categories
          text="Notes"
          count={item?.publicGetGlobalTopic?.notesCount?.length ?? 0}
        />
      </View>
      <Image
        className="mt-5"
        source={require("../assets/straightLine.png")}
        style={{}}
      />
    </View>
  );
};

const Categories = ({ text, count }) => {
  return (
    <View
      style={{
        borderColor: "#7C7B92",
        padding: width * 0.02,
        width: width * 0.295,
      }}
      className=" rounded-xl border-2 items-center"
    >
      <Text className="text-base" style={{ color: "#7C7B92" }}>
        {text}
      </Text>
      <Text className="text-white mt-2 text-base">{count}</Text>
    </View>
  );
};

const Lessons = ({ item }) => {
  const text = "Introduction to Programming";
  const links = item?.publicGetGlobalTopic?.links || [];

  const handleClick = async (link) => {
    const supported = await Linking.canOpenURL(
      `${link.protocol}://` + link.url
    );

    if (supported) {
      await Linking.openURL(`${link.protocol}://` + link.url);
    } else {
      console.error("Can't open the URL");
    }
  };

  return (
    <>
      <Text className="text-white m-4 mt-7 text-xl font-medium">Lessons</Text>
      {links.map((data, index) => {
        return (
          <TouchableWithoutFeedback onPress={() => handleClick(data)} key={index}>
            <View
              className="m-4 mt-2 rounded-xl p-4 border-2 "
              style={{
                borderColor: "#7C7B92",
              }}
            >
              <View className="flex-row items-center">
                <View
                  style={{
                    padding: width * 0.018,
                    backgroundColor: "#282836",
                  }}
                  className="rounded-3xl"
                >
                  <LinkIcon
                    size="15"
                    color=""
                    style={{ color: "#5766F3" }}
                    strokeWidth={2}
                  />
                </View>
                <View>
                  <Text className="text-white text-base ml-3">
                    {data.title.length > 33
                      ? data.title.slice(0, 33) + "..."
                      : data.title}
                  </Text>
                  <Text className=" text-sm ml-3 text-neutral-400 ">
                    Source:{" "}
                    {data.url.length > 20
                      ? data.url.slice(0, 33) + "..."
                      : data.url}
                  </Text>
                  {/* <Text className="text-white text-base ml-2 mt-2">ankit</Text> */}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </>
  );
};
