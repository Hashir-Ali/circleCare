import { useState } from 'react';
import { View, Text, Image, Pressable, ImageBackground, TextInput} from 'react-native';
import styles from './forgot-password-styles';

const ForgotPassword = ({navigation})=>{
    const [userMail, setUserMail] = useState();
    
    return (
    <View style={styles.container}>
        <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 25}}>
            <Text style={{color: '#4E4D4F', fontWeight: 'bold', fontSize: 28}}>Forgot Password</Text>

            <Text style={{color: '#576B74'}}>Kindly enter your email so we can send you a verification.</Text>
            <TextInput
                editable
                maxLength={40}
                onChangeText={text => setUserMail(text)}
                value={userMail}
                style={styles.mailInput}
                placeholder={'Email'}
                textContentType={'emailAddress'}
                autoComplete={'email'}
                inputMode={'email'}
            />
        </View> 
        
        <Pressable style={styles.pressable} onPress={() =>
            navigation.navigate('Verification Code', {
                userMail: userMail,
              }, {name: ' '})
        }>
            <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                <Text style={styles.pressable.text}>Send Verification</Text>
            </ImageBackground>
        </Pressable>

    </View>
    );
}

export default ForgotPassword;