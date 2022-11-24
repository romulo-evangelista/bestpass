import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // Containers Styles
  safeArea: {
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
    paddingTop: '30%',
  },
  footer: {
    marginTop: '50%',
  },

  // Text Styles
  title: {
    fontFamily: 'Staatliches',
    fontSize: 44,
    color: 'white',
  },
  text: {
    paddingTop: '3%',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 13,
    color: 'white',
  },
});
