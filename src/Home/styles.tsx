import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // Containers Styles
  safeArea: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  content: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '20%',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  footer: {
    width: '100%',
  },
  background: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    zIndex: -1,
  },

  // Text Styles
  title: {
    fontFamily: 'Staatliches',
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
    paddingBottom: '5%',
  },
  text: {
    paddingTop: '3%',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 13,
    color: 'white',
  },
});
