import { StyleSheet } from "react-native";
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
        width: '100%',
      },
      
      ScrollView: {
          width: '100%',
          textAlign: 'center',
      },
    
      topLogo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20%',
        maxWidth: 300,
        maxHeight: 250,
      },
  
      loginText: {
          flex: 1,
          color: '#4E4D4F',
          fontSize: 28,
          fontWeight: 600,
          lineHeight: 36,
          textAlign: 'center',
          marginTop: '15%',
          marginBottom: '10%',
      },

      loginView: {
        width: '90%',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid black',
        sideLines: {
            
            textAlign: 'center',
        },
        text:{
            flex: 1,
        },
        loginButtons: {
           width: '100%',
           textAlign: 'center',
           flex: 1,
           flexDirection: 'row',
        }
    },

    loginInput: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E7EAEB',
    },

    fieldSet:{
        marginTop: 30,
        margin: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,

        alignItems: 'center',
        borderColor: '#CCCCCC',
        borderBottom: 'none'
    },

    legend:{
        position: 'absolute',
        top: -10,
        left: '33%',
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
        paddingLeft: '5%',
        paddingRight: '5%',
        color: '#CCCCCC',
    },

    genderInput: {
        borderWidth: 1, borderColor: '#E7EAEB', marginBottom: 10, 
    },
    genderInputOpen: {
        borderWidth: 1, borderColor: '#E7EAEB', marginBottom: '40%'
    },

    maritalInputOpen: {
        borderWidth: 1, borderColor: '#E7EAEB', marginBottom: '55%',
    },
    
    pressable: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        marginTop: '20%',
        darkA: {
            color: '#363636',
        }
    },
});


export default styles;