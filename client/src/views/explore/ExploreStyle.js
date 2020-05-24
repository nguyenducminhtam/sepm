import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#efc458',
    width: windowWidth,
  },
  goHome: {
    marginLeft: 20,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  goBack: {
    marginLeft: 20,
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  cameraWrapper: {
    flex: 4,
    height: windowHeight -150,
    width: windowWidth,
  },
  camera: {
    flex: 4,
    height: windowHeight -150,
    width: windowWidth,
  },
  goToBook: {
    width: 55,
    height: 55,
    marginRight: 30,
    resizeMode: 'contain',
  },
  exploreFooter: {
    height: 175,
    backgroundColor: '#efc458',
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captureWrapper: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitWrapper: {
    width: 80,
    height: 80,
    borderBottomRightRadius: 160,
    borderBottomWidth: 10,
    borderRightWidth: 10,
    borderColor: '#F7ab5f',
    backgroundColor: '#ffffff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exit: {
    marginLeft: 20,
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  exitAnalyze: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
  },
  loading: {
    marginTop: 20,
  },
  lookUp: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
});
