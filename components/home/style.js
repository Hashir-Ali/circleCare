import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8853A7',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputField: {
    marginBottom: 20,
    borderRadius: 5,
    height: 40,
    width: 320,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#f3f3f3',
    fontSize: 18,
  },
  Circlecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'blue',
    marginVertical: 10,
  },
});

export default style;
