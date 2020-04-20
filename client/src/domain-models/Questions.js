export const questions = [
  {
    id: 'q1',
    level: 'level-1',
    stage: 'stage-1',
    status: 'new',
    attemptCount: 0,
    createdAt: '03-04-2020',
    updatedAt: '03-04-2020',

    type: 'multipleChoice',
    interactType: 'radioButton',

    questionContent: 'What is this ?',
    possibleAnswersCount: 4,
    answers: ['rulers', 'papers', 'pencils', 'erasers'],
    correctAnswer: 'rulers',
    imagesAsset: ['catURI', 'dogURI', 'windowURI', 'houseURI'],
    correctAnswerCount: 1,
  },
  {
    id: 'q2',
    level: 'level-1',
    stage: 'stage-1',
    status: 'new',
    attemptCount: 0,
    createdAt: '08-04-2020',
    updatedAt: '08-04-2020',

    type: 'fillTheBlank',
    interactType: 'radioButton',

    questionContent: 'This is a',
    possibleAnswersCount: 4,
    answers: ['grape', 'watermelon', 'banana', 'citrus'],
    correctAnswer: 'banana',
    imagesAsset: ['grapeURI', 'watermelonURI', 'bananaURI', 'citrusURI'],
    correctAnswerCount: 1,
  },
  {
    id: 'q3',
    level: 'level-1',
    stage: 'stage-1',
    status: 'new',
    attemptCount: 0,
    createdAt: '14-04-2020',
    updatedAt: '14-04-2020',

    type: 'spellingOrder',
    interactType: 'radioButton',

    questionContent: 'Spell this word',
    possibleAnswersCount: 4,
    answers: ['e', 'r', 'g', 'e', 'n'],
    correctAnswer: 'green',
    imagesAsset: ['greenURI'],
    correctAnswerCount: 1,
  },
  {
    id: 'q4',
    level: 'level-1',
    stage: 'stage-1',
    status: 'new',
    attemptCount: 0,
    createdAt: '14-04-2020',
    updatedAt: '14-04-2020',

    type: 'pairSelection',
    interactType: 'radioButton',

    questionContent: 'Choose the pairs',
    answers: ['apple', 'banana', 'orange', 'lemon'],
    imagesAsset: [
      {
        name: 'apple',
        asset: require('./stage-1/level-1/assets/apple.png'),
      },
      {
        name: 'banana',
        asset: require('./stage-1/level-1/assets/banana.png'),
      },
      {
        name: 'orange',
        asset: require('./stage-1/level-1/assets/orange.png'),
      },
      {
        name: 'lemon',
        asset: require('./stage-1/level-1/assets/lemon.png'),
      },
    ],
    correctAnswerCount: 1,
  },
];
