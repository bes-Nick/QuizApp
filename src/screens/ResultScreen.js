import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../components/title";

const ResultScreen = ({ navigation, route }) => {
  const { score } = route.params;

  const resultBanner =
    score > 50
      ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png"
      : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png";

  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreValueStyle}>{score}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: 300,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  buttonStyle: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonTextStyle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  scoreValueStyle: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
  },
});

export default ResultScreen;
