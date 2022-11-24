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

  // Password Styles
  password: {
    height: 40,
    width: '90%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
  },

  // CheckBox Styles
  checkboxContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '3%',
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
  textBold: {
    paddingLeft: '3%',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 13,
    color: 'white',
  },
});
