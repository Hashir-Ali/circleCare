import { StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      justifyItems: 'center',
      textAlign: 'center',
      // paddingTop: StatusBar.currentHeight,
    },
  
    topLogo: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 300,
      maxHeight: 250,
    },

    pressable: {
        textAlign: 'center',
        width: '80%',
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

    footer: {
        textAlign: 'center',      
        color: '#8B8B8B',
        width: '100%',
        darkA: {
            color: '#363636',
        }
    },
  });

export default styles;