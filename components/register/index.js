import {Platform, SafeAreaView, ScrollView, View, Image, Text, TextInput, Pressable, ImageBackground} from "react-native";
import styles from "./register-styles";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
// import CheckBox from '@react-native-community/checkbox';
// import DateTimePicker from '@react-native-community/datetimepicker';

const RegisterAccount  = ({navigation})=> {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Male', value: 'bananna'},
        {label: 'Female', value: 'apple'},
        {label: 'Prefer not to say', value: 'Lemon'}
    ]);

    const [maritalStatusItems, setMaritalStatusItems] = useState([
        {label: 'Single', value: 'Single'},
        {label: 'Married', value: 'Married'},
        {label: 'Divorced', value: 'Divorced'},
        {label: 'Prefer not to Say', value: 'Prefer not to say'},
        
    ]);
    const [openMarital, setOpenMarital] = useState(false);
    const [maritalValue, setMaritalValue] = useState(null);

    // const [toggleCheckBox, setToggleCheckBox] = useState(false);


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
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <Image style={styles.topLogo} source={require('../../assets/logo-small.png')}/>
                <Text style={styles.loginText}>Sign Up</Text>

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

                    <DropDownPicker
                        placeholder="Gender"
                        style={open? styles.genderInputOpen : styles.genderInput}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
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

                    
                    {/* <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    /> */}


                    <DropDownPicker
                        placeholder="Marital Status"
                        style={openMarital? styles.maritalInputOpen : styles.genderInput}
                        open={openMarital}
                        value={maritalValue}
                        items={maritalStatusItems}
                        setOpen={setOpenMarital}
                        setValue={setMaritalValue}
                        setItems={setMaritalStatusItems}
                    />  

                    <TextInput
                        editable
                        maxLength={20}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={styles.loginInput}
                        placeholder={'Email'}
                    />
                    <TextInput
                        editable
                        maxLength={20}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={styles.loginInput}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                    <TextInput
                        editable
                        maxLength={20}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={styles.loginInput}
                        placeholder={'Confirm Password'}
                        secureTextEntry={true}
                    />
                    
                </View>
                <View style={styles.fieldSet}>
                    <Text style={styles.legend}>or sign in using</Text>
                </View>
                
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 9, justifyContent: 'center'}}>
                    <Image source={require('../../assets/google.png')} />
                    <Image source={require('../../assets/facebook.png')} />
                    <Image source={require('../../assets/icloud.png')} />
                </View>
                

                <View style={{padding: '5%', color: '#222222'}}>
                    <Text style={{textAlign: 'center'}}>By Signing up you agree to our <Text style={{color: '#000000', fontWeight:'600'}}>Privacy & Policy</Text> and <Text style={{color: '#000000', fontWeight:'600'}}>Terms & Conditions</Text></Text>
                </View>
                
                
                <View style={{width: '100%', textAlign: 'center', justifyContent: 'center', justifyItems: 'center'}}>
                    <Pressable style={styles.pressable}>
                        <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                            <Text style={styles.pressable.text}>Sign In</Text>
                        </ImageBackground>
                    </Pressable>
                    <View><Text style={{color: '#8B8B8B', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%'}}>Have an account? <Text style={{color: '#313131', fontWeight: 'bold'}} onPress={()=> navigation.navigate('Login', {name: ' '})}>Sign In</Text></Text></View>
                </View>
                
                <Text style={styles.footer}>Powerex`d By <Text style={styles.footer.darkA}>NTAM Group</Text></Text>
            


            </ScrollView>
        </SafeAreaView>
    );
}

export default RegisterAccount;