/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './components/splashScreen';
import MyTutorial from './components/tutorial/tutorial';
import Login from './components/login';
import RegisterAccount from './components/register';
import ForgotPassword from './components/forgotPassword';
import VerificationCode from './components/forgotPassword/verificationCode';
import CreateNewPassword from './components/forgotPassword/createNewPassword';
import Home from './components/home';
import FooterNav from './components/utils/homeFooterNav';
import EditProfile from './components/profile/edit-profile';
import ChangePassword from './components/profile/change-password';
import HelpSupport from './components/helpSupport';
import ReadArticle from './components/utils/readArticle';
import DailyTasks from './components/home/daily-tasks';
import AddReflection from './components/home/add-daily-reflection';
import DailyReflections from './components/home/daily-reflection';
import RecordsAndProgress from './components/home/records-and-progress';
import RecordsAndGraphs from './components/home/RecordsAndGraphs';
import recordProgress_1 from './screens/RecordAndProgress/recordProgress_1';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="recordAndProgress"
        screenOptions={{
          // headerShown: false,
          headerTintColor: '#2791B5',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffff',
          },
        }}>
        <Stack.Screen
          name=" "
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tutorial"
          component={MyTutorial}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={RegisterAccount} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Verification Code" component={VerificationCode} />
        <Stack.Screen
          name="Create New Password"
          component={CreateNewPassword}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={FooterNav}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Daily Tasks"
          component={DailyTasks}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Daily Reflections"
          component={DailyReflections}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Add Reflection"
          component={AddReflection}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="readArticle"
          component={ReadArticle}
        />
        {/* <Stack.Screen options={{headerShown: false}} name='recordAndProgress' component={RecordsAndProgress}/> */}
        <Stack.Screen
          options={{headerShown: false}}
          name="recordAndGraph"
          component={RecordsAndGraphs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="recordAndProgress"
          component={recordProgress_1}
        />

        <Stack.Screen
          name="Edit Profile"
          options={{headerShown: false}}
          component={EditProfile}
        />
        <Stack.Screen
          name="Change Password"
          options={{headerShown: false}}
          component={ChangePassword}
        />
        <Stack.Screen
          name="Help And Support"
          options={{headerShown: false}}
          component={HelpSupport}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
