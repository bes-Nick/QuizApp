import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../components/title";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title titleText="QUIZAPP" />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910850.jpg?size=338&ext=jpg&ga=GA1.2.413589792.1653761945",
          }}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("QuizScreen")}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>start</Text>
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
});

export default HomeScreen;
