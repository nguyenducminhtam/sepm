const ColorRed = require('./assets/red.png');
const ColorYellow = require('./assets/yellow.png');
const ColorGreen = require('./assets/green.png');
const ColorBlue = require('./assets/blue.png');
const ColorOrange = require('./assets/orange.png');
const SmallRed = require('./assets/small_red.png');
const SmallYellow = require('./assets/small_yellow.png');
const SmallGreen = require('./assets/small_green.png');
const SmallBlue = require('./assets/small_blue.png');
const SmallOrange = require('./assets/small_orange.png');

import {
  FILL_THE_BLANK,
  MULTIPLE_CHOICE,
  MULTIPLE_CHOICE_IMAGES,
  PAIR_SELECTION,
  SPELLING_ORDER,
} from '../../../environments/Routes';

export const STAGE_ONE = [
  //first level
  [
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'green', 'white'],
        correctAnswer: 'red',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Which color is yellow',
        answers: [
          {
            name: 'red',
            asset: SmallRed,
          },
          {
            name: 'blue',
            asset: SmallBlue,
          },
          {
            name: 'yellow',
            asset: SmallYellow,
          },
          {
            name: 'orange',
            asset: SmallOrange,
          },
        ],
        correctAnswer: 'yellow',
        imageAsset: null,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is the apple ?',
        possibleAnswersCount: 4,
        answers: ['green', 'red', 'yellow', 'blue'],
        correctAnswer: 'red',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'green', 'purple'],
        correctAnswer: 'green',
        imageAsset: ColorYellow,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: FILL_THE_BLANK,
        questionContent: 'The color of this banana is',
        possibleAnswersCount: 4,
        answers: ['yellow', 'green', 'black', 'white'],
        correctAnswer: 'yellow',
        imageAsset: ColorYellow,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Which is the color orange',
        answers: [
          {
            name: 'green',
            asset: SmallGreen,
          },
          {
            name: 'blue',
            asset: SmallBlue,
          },
          {
            name: 'yellow',
            asset: SmallYellow,
          },
          {
            name: 'orange',
            asset: SmallOrange,
          },
        ],
        correctAnswer: 'yellow',
        imageAsset: null,
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell this color',
        possibleAnswersCount: 4,
        answers: ['e', 'e', 'n', 'r', 'g'],
        correctAnswer: 'green',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'What color is blue',
        answers: [
          {
            name: 'green',
            asset: ColorGreen,
          },
          {
            name: 'blue',
            asset: ColorBlue,
          },
          {
            name: 'yellow',
            asset: ColorYellow,
          },
          {
            name: 'orange',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'blue',
        imageAsset: null,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: FILL_THE_BLANK,
        questionContent: 'This color is (orange fruit)',
        possibleAnswersCount: 4,
        answers: ['orange', 'white', 'blue', 'black'],
        correctAnswer: 'orange',
        imageAsset: ColorOrange,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Match the pairs',
        answers: ['red', 'green', 'blue', 'yellow'],
        imagesAsset: [
          {
            name: 'yellow',
            asset: ColorYellow,
          },
          {
            name: 'red',
            asset: ColorRed,
          },
          {
            name: 'green',
            asset: ColorGreen,
          },
          {
            name: 'blue',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],

  //second level
  [
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '03-04-2020',
        updatedAt: '03-04-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'black', 'white'],
        correctAnswer: 'red',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '08-04-2020',
        updatedAt: '08-04-2020',
        type: FILL_THE_BLANK,
        questionContent: 'This color is',
        possibleAnswersCount: 4,
        answers: ['yellow', 'blue', 'black', 'white'],
        correctAnswer: 'yellow',
        imageAsset: ColorYellow,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell this color',
        possibleAnswersCount: 4,
        answers: ['r', 'o', 'a', 'e', 'n', 'g'],
        correctAnswer: 'orange',
        imageAsset: ColorOrange,
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['yellow', 'red', 'green', 'blue'],
        imagesAsset: [
          {
            name: 'yellow',
            asset: SmallYellow,
          },
          {
            name: 'red',
            asset: SmallRed,
          },
          {
            name: 'green',
            asset: SmallGreen,
          },
          {
            name: 'blue',
            asset: SmallBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],
];
