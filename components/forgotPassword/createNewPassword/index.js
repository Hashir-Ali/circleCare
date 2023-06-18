import { View, Text, Image, Pressable, ImageBackground, TextInput, SafeAreaView, ScrollView} from 'react-native';
import styles from './create-new-password-styles';
const CreateNewPassword = ({navigation})=> {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 25}}>
                    <Text style={{color: '#4E4D4F', fontWeight: 'bold', fontSize: 28}}>Create New Password</Text>

                    <Text style={{color: '#576B74'}}>Make a new password that's different from your old password.</Text>

                    <View style={{marginTop: '10%'}}>
                        <TextInput
                            editable
                            secureTextEntry={true}
                            maxLength={40}
                            // onChangeText={text => onChangeText(text)}
                            // value={value}
                            style={styles.loginInput}
                            placeholder={'Old Password'}
                        />
                        <TextInput
                            editable
                            secureTextEntry={true}
                            maxLength={40}
                            // onChangeText={text => onChangeText(text)}
                            // value={value}
                            style={styles.loginInput}
                            placeholder={'Create New Password'}
                        />
                        <TextInput
                            editable
                            secureTextEntry={true}
                            maxLength={40}
                            // onChangeText={text => onChangeText(text)}
                            // value={value}
                            style={styles.loginInput}
                            placeholder={'confirm New Password'}
                        />
                    </View>

                    <View style={{width: '100%', textAlign: 'center', justifyContent: 'center', justifyItems: 'center'}}>
                        <Pressable style={styles.pressable}>
                            <ImageBackground source={require( '../../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                                <Text style={styles.pressable.text}>Create New Password</Text>
                            </ImageBackground>
                        </Pressable>
                        {/* <View><Text style={{color: '#8B8B8B', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%'}}>Don't have an account? <Text style={{color: '#313131', fontWeight: 'bold'}} >Sign Up</Text></Text></View> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default CreateNewPassword;
