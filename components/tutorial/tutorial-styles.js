import { StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // paddingTop: StatusBar.currentHeight,
    },
  
    scrollerView: {
      // justifyContent: 'center',
    },
  
    topLogo: {
      marginTop: '10%',
      marginBottom: '10%',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 200,
      maxHeight: 200,
    },
  
    textContainer: {
      padding: '5%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '10%',
      width: '95%',
      backgroundColor: '#F5F5F5',
      borderRadius: 17,
      padding: 20,
    },
  
    containerImage: {
      maxWidth: '100%',
      minWidth: '100%',
      padding: 10,
      marginTop: 7,
    },
  
    MainButton: {
      // background: gradient(180deg, #BF6BBB 0%, #716EAA 146.9%),
      borderRadius: 25,
      height: 100,
      width: '100%',
      marginBottom: '10%',
      backgroundColor: '#fff',
    },
  
    imageButton: {
      width: '100%',
      minWidth: 200,
      maxHeight: 200,
      // backgroundImage: 'url('+require('./assets/Buttons.png')+')',
      // minWidth: '100%',
    },
  
    MainButtonUI: {
      background: '#fff',
    },

    pressable: {
      textAlign: 'center',
      width: '99%',
      image: {
          minWidth: 250,
      },
      text: {
          textAlign: 'center',
          fontSize: 18,
          color: 'white',
          paddingTop: '3%',
          paddingBottom: '3%',
      },
  },

  fieldSet:{
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#000'
},
legend:{
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF'
}
  });

export default styles;