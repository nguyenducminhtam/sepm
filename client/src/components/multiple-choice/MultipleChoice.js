import React, {useState, useEffect} from 'react';
import Proptypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './MultipleChoiceStyle';
import Cheers from '../cheers/Cheers';
import {readText} from '../../helpers/TextToSpeech';
import {
  MULTIPLE_CHOICE,
  MULTIPLE_CHOICE_IMAGES,
} from '../../../environments/Routes';

const MultipleChoice = ({question, type}) => {
  const {questionContent, answers, correctAnswer, imageAsset} = question;
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });
  const [cheers, setCheers] = useState({display: false, sad: false});

  useEffect(() => {
    resetCurrentAnswer();
    readText(questionContent);
  }, [question, questionContent]);

  const resetCurrentAnswer = () => {
    setCurrentAnswer({answer: null, index: null});
    setCheers({display: null, sad: false});
  };

  const handleAnswerPressed = (index, answer) => {
    if (type === MULTIPLE_CHOICE) {
      if (currentAnswer.index === index) {
        resetCurrentAnswer();
      } else {
        readText(answer);
        setCurrentAnswer({
          answer: answer,
          index: index,
        });
      }
    } else {
      if (currentAnswer.index === index) {
        resetCurrentAnswer();
      } else {
        readText(answer.name);
        setCurrentAnswer({
          answer: answer.name,
          index: index,
        });
      }
    }
  };

  const handleAnswerCheck = () => {
    if (correctAnswer !== currentAnswer.answer) {
      setCheers({display: true, sad: true});
    } else {
      setCheers({display: true, sad: false});
    }
  };

  return (
    <View style={styles.container}>
      {cheers.display && (
        <Cheers
          cheers={cheers.display}
          sad={cheers.sad}
          correctAnswer={correctAnswer}
        />
      )}
      {!cheers.display && (
        <>
          {type === MULTIPLE_CHOICE && (
            <View style={styles.assetsWrapper}>
              <TouchableWithoutFeedback
                onPress={() => readText(questionContent)}>
                <Image style={styles.image} source={imageAsset} />
              </TouchableWithoutFeedback>
            </View>
          )}
          <View style={styles.questionWrapper}>
            <Text
              onPress={() => readText(questionContent)}
              style={styles.questionContent}>
              {questionContent}
            </Text>
          </View>
          <View
            style={
              type === MULTIPLE_CHOICE
                ? styles.answersWrapper
                : styles.imageAnswersWrapper
            }>
            {type === MULTIPLE_CHOICE &&
              answers.map((answer, index) => (
                <TouchableOpacity
                  activeOpacity={0}
                  onPress={() => handleAnswerPressed(index, answer)}
                  style={
                    currentAnswer.index === index
                      ? [styles.answer, styles.chosenAnswer]
                      : [styles.answer, styles.notChosenAnswer]
                  }
                  key={answer}>
                  <Text
                    style={
                      currentAnswer.index === index
                        ? styles.chosenAnswerTitle
                        : styles.answerTitle
                    }>
                    {answer}
                  </Text>
                </TouchableOpacity>
              ))}
            {type === MULTIPLE_CHOICE_IMAGES &&
              answers.map((answer, index) => (
                <TouchableOpacity
                  key={index}
                  style={
                    currentAnswer.index === index
                      ? [styles.answerImage, styles.chosenAnswerImage]
                      : [styles.answerImage, styles.notChosenAnswerImage]
                  }
                  onPress={() => handleAnswerPressed(index, answer)}>
                  <Image style={styles.imageContent} source={answer.asset} />
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
              onPress={() => handleAnswerCheck()}>
              <Text style={styles.confirmTitle}> Confirm </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

MultipleChoice.propTypes = {
  question: Proptypes.object.isRequired,
  type: Proptypes.string.isRequired,
};

export default MultipleChoice;
