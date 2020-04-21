import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './MultipleChoiceStyle';
import {questions} from '../../domain-models/Questions';
import Cheers from '../cheers/Cheers';
import {readText} from '../../helpers/TextToSpeech';

const multipleChoiceQuestion = questions.filter(
  question => question.type === 'multipleChoice',
)[0];
const {questionContent, answers, correctAnswer} = multipleChoiceQuestion;

const MultipleChoice = () => {
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });
  const [cheers, setCheers] = useState({display: false, sad: false});

  // only read once when screen is rendered
  useEffect(() => {
    //it's async so I have to add then (() => {}) otherwise eslint will complain
    readText(questionContent).then(() => {});
  }, []);

  const resetAnswerState = () => {
    setCurrentAnswer({answer: null, index: null});
  };

  const handleAnswerPressed = (index, answer) => {
    if (currentAnswer.index === index) {
      resetAnswerState();
    } else {
      setCurrentAnswer({answer: answer, index: index});
    }
  };

  const handleAnswerCheck = answer => {
    if (correctAnswer !== answer) {
      setCheers({display: true, sad: true});
    } else {
      setCheers({display: true, sad: false});
    }
    resetAnswerState();
  };

  return (
    <View style={styles.container}>
      {cheers.display && <Cheers cheers={cheers.display} sad={cheers.sad} />}
      {!cheers.display && (
        <>
          <View style={styles.assetsWrapper}>
            <Text>Box</Text>
            <Text>Box 2</Text>
          </View>
          <View style={styles.questionWrapper}>
            <Text
              onPress={() => readText(questionContent)}
              style={styles.questionContent}>
              {questionContent}
            </Text>
          </View>
          <View style={styles.answersWrapper}>
            {answers.map((ans, index) => (
              <TouchableOpacity
                activeOpacity={0}
                onPress={() => handleAnswerPressed(index, ans)}
                style={
                  currentAnswer.index === index
                    ? [styles.answer, styles.chosenAnswer]
                    : [styles.answer, styles.notChosenAnswer]
                }
                key={ans}>
                <Text
                  style={
                    currentAnswer.index === index
                      ? styles.chosenAnswerTitle
                      : styles.answerTitle
                  }>
                  {ans}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={
                currentAnswer.answer === null
                  ? [styles.confirmButton, styles.disabledConfirm]
                  : [styles.confirmButton, styles.confirmAnswer]
              }
              disabled={currentAnswer.answer === null}
              onPress={() => handleAnswerCheck(currentAnswer.answer)}>
              <Text style={styles.confirmTitle}> Confirm </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default MultipleChoice;
