import { useRef, useState, useEffect } from 'react';
import { View, Text, Image, Pressable, ImageBackground, TextInput} from 'react-native';
import styles from './verification-code-styles';

const VerificationCode = ({route, navigation})=>{
    const { userMail, ...otherData } = route.params;

    const code1Field = useRef(null);
    const code2Field = useRef(null);
    const code3Field = useRef(null);
    const code4Field = useRef(null);
    const code5Field = useRef(null);
    const code6Field = useRef(null);

    const [remainingTime, setRemainingTime] = useState(10);
    const [timerRunning, setTimerRunning] = useState(true);

    useEffect(() => {
        let interval = setInterval(() => {
            if(remainingTime > 0){
                setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
            }else{
                setTimerRunning(false);
            }
            
        }, 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [remainingTime]);

    useEffect(() => {
        if (remainingTime === 0) {
            // Timer has reached 0, perform any desired action
            // For example, display a message or trigger a callback function
            // You can customize this behavior based on your requirements
            //   console.log('Timer has reached 0');
            setTimerRunning(false);
        }
      }, [remainingTime]);

    return (
        <View style={styles.container}>
            <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 25}}>
                <Text style={{color: '#4E4D4F', fontWeight: 'bold', fontSize: 28}}>Let's Verify You</Text>

                <Text style={{color: '#576B74'}}>We've sent a 6 digit verification code to <Text style={{fontWeight: 'bold'}}> {userMail} </Text>.</Text>
                
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingTop: '14%'
                }}>
                    <TextInput
                        ref={code1Field}
                        editable
                        secureTextEntry={true}
                        maxLength={1}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={styles.codeInput}
                        placeholder={''}
                        inputMode={'numeric'}
                        onKeyPress={() =>  code2Field.current.focus()}
                    />
                    <TextInput
                        ref={code2Field}
                         editable
                         secureTextEntry={true}
                         maxLength={1}
                         // onChangeText={text => onChangeText(text)}
                         // value={value}
                         style={styles.codeInput}
                         inputMode={'numeric'}
                         onKeyPress={() =>  code3Field.current.focus()}
                    />
                    <TextInput
                        ref={code3Field}
                        editable
                        secureTextEntry={true}
                        maxLength={1}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={styles.codeInput}
                        inputMode={'numeric'}
                        onKeyPress={() =>  code4Field.current.focus()}
                    />
                    <TextInput
                        ref={code4Field}
                         editable
                         secureTextEntry={true}
                         maxLength={1}
                         // onChangeText={text => onChangeText(text)}
                         // value={value}
                         style={styles.codeInput}
                         inputMode={'numeric'}
                         onKeyPress={() =>  code5Field.current.focus()}
                    />
                    <TextInput
                        ref={code5Field}
                         editable
                         secureTextEntry={true}
                         maxLength={1}
                         // onChangeText={text => onChangeText(text)}
                         // value={value}
                         style={styles.codeInput}
                         inputMode={'numeric'}
                         onKeyPress={() =>  code6Field.current.focus()}
                    />
                    <TextInput
                        ref={code6Field}
                        editable
                        secureTextEntry={true}
                        maxLength={1}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={styles.codeInput}
                        inputMode={'numeric'}
                        onKeyPress={() =>  code6Field.current.blur()}
                    />
                </View>
            </View> 

            <View>
                <Text style={{color: '#8B8B8B', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%'}}>Didn't get the code? 
                    <Text style={{color: '#313131', fontWeight: 'bold'}} >
                    <Text onPress={()=>{setRemainingTime(10); setTimerRunning(true);}} disabled={timerRunning? true : false}> Resend it...</Text> {!timerRunning ? ' ' : remainingTime+ 's' }
                    </Text>
                </Text>
            </View>
            
            
            <Pressable style={styles.pressable} onPress={() =>
                navigation.navigate('Create New Password', {name: ' '})
            }>
                <ImageBackground source={require( '../../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                    <Text style={styles.pressable.text}>confirm</Text>
                </ImageBackground>
            </Pressable>

        </View>
    );
};
export default VerificationCode;