import React, {useState} from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar, } from 'react-native';

import { ButtonGroup} from 'react-native-elements';

const RecordsAndProgress = ({navigation})=>{
    // for button groups.
    const [selectedIndex, changeSelctedIndex] = useState(0);
    const buttons = ['My Records', 'Show Report'];

    return (
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around',  height: "100%", backgroundColor: 'white'}}>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'default'}
                showHideTransition={'fade'}
                hidden={false}
            />
            {/* Top Bar */}
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10}}>
                <View style={{flex: 3, paddingLeft: 20}}>
                    <Pressable onPress={() =>
                        navigation.navigate('Home', {name: ' '})
                        }>
                        <Image source={require('../../assets/back_icon.png')} />
                    </Pressable>
                </View>
                <View style={{flex: 10}}>
                    <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '600', color: '#8853A7', lineHeight: 20}}>Record And Progress</Text>
                </View>
            </View>
            {/* Top Bar End */}
            
            {/* Profile Fields Start */}
            <View style={styles.loginView}>
                <ButtonGroup
                    onPress={value=> changeSelctedIndex(value)}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 40, borderWidth: 1, borderRadius: 20, marginBottom: 16}}
                    buttonStyle={{borderRadius: 20}}
                    buttonContainerStyle={{backgroundColor: 'rgba(246, 246, 246, 1)', borderRightWidth: 0, color: '#f3f3f3'}}
                    selectedButtonStyle={{backgroundColor: 'white'}}
                    selectedTextStyle={{ color: "#0C212C" }}
                    textStyle={{color: '#576B74'}}
                />
                {selectedIndex === 0? (
                    <>
                        <TextInput
                            editable
                            maxLength={20}
                            style={styles.loginInput}
                            placeholder={'Update Blood Pressure (Systole)'}
                        />
                        <TextInput
                            editable
                            maxLength={20}
                            style={styles.loginInput}
                            placeholder={'Update Blood Pressure'}
                        />
                        <TextInput
                            editable
                            maxLength={20}
                            style={styles.loginInput}
                            placeholder={'SugarLevel (mg)'}
                        />
                        <TextInput
                            editable
                            maxLength={20}
                            style={styles.loginInput}
                            placeholder={'Sleeping Hours'}
                            // secureTextEntry={true}
                        />
                        <TextInput
                            editable
                            maxLength={20}
                            style={styles.loginInput}
                            placeholder={'Weight'}
                            // secureTextEntry={true}
                        />
                        <Pressable style={styles.pressable}>
                            <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                                <Text style={styles.pressable.text}>Save</Text>
                            </ImageBackground>
                        </Pressable>
                    </>
                ) : (
                    <>
                    
                    </>
                ) }
            </View>
            {/* Profile Fields end */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 10,
      backgroundColor: '#FFFFF',
      padding: 8,
      height: '100%',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    loginView: {
        flex: 20,
        width: '90%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
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
    pressable: {
        textAlign: 'center',
        width: '90%',
        // marginBottom: 100,
        top: 270,
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
  });
export default RecordsAndProgress;