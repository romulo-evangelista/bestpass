import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // Containers Styles
  safeArea: {
    height: '100%',
    backgroundColor: 'black',
  },
  container: {
    height: '100%',
    backgroundColor: 'black',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '7%',
  },
  content: {
    padding: '5%',
    paddingTop: '10%',
  },
  footer: {
    marginTop: '50%',
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
