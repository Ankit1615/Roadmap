import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon, MapIcon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { universalStyle } from "../theme/index";
import { TrendingBanner } from "./TrendingBanner";
import SuggestionsList from "./SuggestionsList";

const LandingPage = () => {
  const navigation = useNavigation();
  const ios = Platform.OS == "ios";
  const trendingData = [
    {
      title: "Learn everything about React Js",
      subTitle: "This is the course to pick if you are just getting into coding.",
      leftImage: require("../assets/leftFlowerBracket.png"),
      rightImage: require("../assets/pythonLogo.png"),
      topic: "react",
    },
    {
      title: "Let's make a website using Angular",
      subTitle: "This is the course to pick if you are just getting into coding.",
      leftImage: require("../assets/leftFlowerBracket.png"),
      rightImage: require("../assets/pythonLogo.png"),
      topic: "angular",
    },
  ];

  const navigateToSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={ios ? styles.safeAreaIos : styles.safeArea}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Bars3BottomLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={styles.title}>
            <Text style={universalStyle.text}>R</Text>oad
            <Text style={universalStyle.text}>M</Text>ap
            <MapIcon size={30} color="white" strokeWidth={2} />
          </Text>
          <TouchableOpacity onPress={navigateToSearch}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        <TrendingBanner data={trendingData} />
        <SuggestionsList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
  safeArea: {
    marginBottom: -3,
  },
  safeAreaIos: {
    marginBottom: -2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 4,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
  },
  scrollView: {
    paddingBottom: 10,
  },
});

export default LandingPage;
