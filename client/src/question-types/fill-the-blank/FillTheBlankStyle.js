import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  exitWrapper: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  exit: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  mediaWrapper: {
    flex: 4,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  questionWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  questionContent: {
    fontSize: 28,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  answersWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  answer: {
    marginTop: 20,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    marginRight: 12,
  },
  notChosenAnswer: {
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
  },
  chosenAnswer: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#f7ab5f',
  },
  answerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  confirmButtonWrapper: {
    position: 'absolute',
    bottom: 65,
  },
  confirmButton: {
    marginTop: 15,
    borderBottomWidth: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 16,
    paddingLeft: 16,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
  },
  confirmAnswer: {
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
    backgroundColor: '#f7ab5f',
    borderBottomColor: 'rgba(120,114,120,0.64)',
  },
  disabledConfirm: {
    borderBottomColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#afafaf',
  },
  confirmTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
