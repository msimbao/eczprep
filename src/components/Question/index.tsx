import { View,Text, Dimensions } from 'react-native';
import Animated, { Keyframe, runOnJS } from 'react-native-reanimated';

import { useState } from 'react';
import { Option } from '../Option';
import { styles } from './styles';

type QuestionProps = {
  title: string;
  alternatives: string[];
  answer: string;
  correct: number;
}

type Props = {
  question: QuestionProps;
  alternativeSelected?: number | null;
  setAlternativeSelected?: (value: number) => void;
  onUnmount: () => void;
  showAnswer: boolean;
  answered: boolean;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export function Question({
  question,
  alternativeSelected,
  setAlternativeSelected,
  onUnmount,
  showAnswer,
  answered,
}: Props) {
  const enteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        { translateX: SCREEN_WIDTH },
        { rotate: '90deg' }
      ],
    },
    70: {
      opacity: 0.3,
    },
    100: {
      opacity: 1,
      transform: [
        { translateX: 0 },
        { rotate: '0deg' }
      ],
    }
  });

  const exitingKeyframe = new Keyframe({
    from: {
      opacity: 1,
      transform: [
        { translateX: 0 },
        { rotate: '0deg' }
      ],
    },
    to: {
      opacity: 0,
      transform: [
        { translateX: -SCREEN_WIDTH },
        { rotate: '-90deg' }
      ],
    }
  });

  return (
    <Animated.View
      style={styles.container}
      entering={enteringKeyframe.duration(400)}
      exiting={exitingKeyframe.duration(400).withCallback(finished => {
        'worklet';

        if (finished) {
          runOnJS(onUnmount)();
        }
      })}
    >
      <Text style={styles.title}>
        {question.title}
      </Text>


      {
        question.alternatives.map((alternative, index) => (

          <View>
        {(index == question.correct) && showAnswer ? (
        <Text style={styles.answer}>
          {question.answer}
            </Text>
          ) : (
            <Text></Text>
          )}

        <Option
            key={index}
            title={alternative}
            checked={alternativeSelected === index}
            correct = {question.correct === index}
            wrong = {question.correct != index}
            answered = {answered}
            onPress={() => setAlternativeSelected && setAlternativeSelected(index)}
          />
          </View>




        ))
      }
    </Animated.View>
  );
}
