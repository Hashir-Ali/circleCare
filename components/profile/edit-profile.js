import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar } from 'react-native';

import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


const EditProfile = ({navigation})=>{

    
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(false);
          DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
          });
          // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

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
                <View style={{flex: 5, paddingLeft: 20}}>
                    <Pressable onPress={() =>
                        navigation.navigate('Home', {name: ' '})
                        }>
                        <Image source={require('../../assets/back_icon.png')} />
                    </Pressable>
                </View>
                <View style={{flex: 10}}>
                    <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '600', color: '#8853A7', lineHeight: 20}}>Edit Profile</Text>
                </View>
            </View>
            {/* Top Bar End */}
            
            {/* Profile Fields Start */}
            <View style={styles.loginView}>
                <TextInput
                    editable
                    maxLength={20}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={styles.loginInput}
                    placeholder={'First Name'}
                />
                <TextInput
                    editable
                    maxLength={20}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={styles.loginInput}
                    placeholder={'Last Name'}
                />
                
                <TextInput
                    editable
                    maxLength={20}
                    // onFocus={showDatepicker}
                    onPressOut={showDatepicker}
                    // onChangeText={text => onChangeText(text)}
                    value={date.toLocaleString().split(',')[0]}
                    style={styles.loginInput}
                    placeholder={'Date of birth'}
                />
                {/* </Pressable> */}
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    />
                )}
                
                <TextInput
                    editable
                    maxLength={20}
                    style={styles.loginInput}
                    placeholder={'Email'}
                />
                <TextInput
                    editable
                    maxLength={20}
                    style={styles.loginInput}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
                <TextInput
                    editable
                    maxLength={20}
                    style={styles.loginInput}
                    placeholder={'Confirm Password'}
                    secureTextEntry={true}
                />
            </View>

                
            <Pressable style={styles.pressable}>
                <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                    <Text style={styles.pressable.text}>Update</Text>
                </ImageBackground>
            </Pressable>
                
            {/* Profile Fields end */}
        </View>
    );
}

const styles = StyleSheet.create({
    loginView: {
        width: '90%',
        textAlign: 'center',
        justifyContent: 'center',
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
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        width: '90%',
        top: 80,
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

export default EditProfile;