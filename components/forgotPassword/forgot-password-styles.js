import { StyleSheet } from "react-native";
// import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyItems: 'center',
        textAlign: 'center',
        // paddingTop: StatusBar.currentHeight,
        width: '100%',
        height: '100%'
      },
      
      ScrollView: {
          width: '100%',
          textAlign: 'center',
      },

      mailInput: {
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E7EAEB',
      },

      pressable: {
        flex: 4,
        justifyContent: 'center',
        textAlign: 'center',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100%',
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
});


export default styles;