import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const QuizScreen = ({ navigation }) => {
  const [ques, setQues] = useState(0);
  const [questions, setQuestions] = useState();
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url = "https://opentdb.com/api.php?amount=10&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz({});
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
    if (ques === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate("ResultScreen", {
      score: score,
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "700" }}>Loading..</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parentStyle}>
            <View style={styles.topStyle}>
              <Text style={styles.quetionStyle}>
                Q. {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.optionStyle}>
              <TouchableOpacity
                style={styles.optionButtonStyle}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.optionTextStyle}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButtonStyle}
                onPress={() => handleSelectedOption(options[1])}
              >
                <Text style={styles.optionTextStyle}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButtonStyle}
                onPress={() => handleSelectedOption(options[2])}
              >
                <Text style={styles.optionTextStyle}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButtonStyle}
                onPress={() => handleSelectedOption(options[3])}
              >
                <Text style={styles.optionTextStyle}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomStyle}>
              {/* <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>SKIP</Text>
            </TouchableOpacity> */}
              {ques !== 9 && (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={handleNextPress}
                >
                  <Text style={styles.buttonTextStyle}>SKIP</Text>
                </TouchableOpacity>
              )}

              {ques === 9 && (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={handleShowResult}
                >
                  <Text style={styles.buttonTextStyle}>SHOW RESULTS</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  topStyle: {
    marginVertical: 16,
  },
  optionStyle: {
    marginVertical: 16,
    flex: 1,
  },
  bottomStyle: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonStyle: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  quetionStyle: {
    fontSize: 28,
  },
  optionTextStyle: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButtonStyle: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parentStyle: {
    height: "100%",
  },
});

export default QuizScreen;
