import React,{useState} from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';


const AddReflection = ({navigation})=>{

    const [messageText, changeMessageText] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);


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
        <View style={{flex: 2,display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: 'white'}}>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'default'}
                showHideTransition={'fade'}
                hidden={false}
            />
            {/* Top Bar */}
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10}}>
                <View style={{flex: 4, paddingLeft: 20}}>
                    <Pressable onPress={() =>
                        navigation.navigate('Home', {name: ' '})
                        }>
                        <Image source={require('../../assets/back_icon.png')} />
                    </Pressable>
                </View>
                <View style={{flex: 8}}>
                    <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '600', color: '#8853A7', lineHeight: 20}}>Daily Reflection</Text>
                </View>
            </View>
            {/* Top Bar End */}

            <View style={{display: 'flex', flexDirection: 'row',  justifyContent: 'flex-end', marginTop: 15}}>
                <View style={{flex: 4, paddingLeft: 20, paddingTop: 5}}>
                    <Text style={{ color: '#0C212C', fontSize: 15, fontWeight: 500, lineHeight: 19}}>{date.toLocaleString().split(',')[0]}</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 100}}>
                    <TouchableOpacity 
                        onPress={()=>showDatepicker()}
                    >
                        <Icon name="calendar" size={25} color='black'/>
                    </TouchableOpacity>
                    
                </View>

                {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                        />
                    )}
                   
            </View>
            {/* Content Section */}
            <View style={style.loginView}>
                <Text style={{marginTop: 10, marginBottom: 20, width: 248, color: '#000000', fontFamily: 'General Sans Variable', fontSize: 20, fontWeight: 500, lineHeight: 25, alignSelf: 'stretch'}}>Let us know your thoughts for today...</Text>
                <View>
                    {/* <Text style={{color: '#8853A7', fontFamily: 'General Sans Variable', fontSize: 20, fontWeight: 500, lineHeight: 25}}>Message</Text> */}
                    <TextInput style={style.loginInput}
                        multiline
                        numberOfLines={14}
                        maxLength={40}
                       value={messageText}
                       onChange={value=>changeMessageText(value)}
                       placeholder='Enter here'
                    />
                </View>
            </View>
            {/* Content Section End */}
            <View style={{flex: 10, paddingLeft: 10, paddingRight: 10, justifyContent: 'center', marginTop: 80}}>
              
                <Pressable style={style.pressable}>
                    <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={style.pressable.image}>
                        <Text style={style.pressable.text}>Send</Text>
                    </ImageBackground>
                </Pressable>
            </View>
            
            
        </View>
    );
}

const style = StyleSheet.create({
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
        textAlign: 'center',
        width: '90%',
        top: 20,
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
export default AddReflection;