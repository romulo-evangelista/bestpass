import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // Containers Styles
  safeArea: {
    height: '100%',
    backgroundColor: 'black',
  },
  content: {
    height: '100%',
    paddingTop: '10%',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '7%',
    paddingHorizontal: '5%',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
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
  text: {
    paddingTop: '3%',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 13,
    color: 'white',
  },
});
