import React, {useState} from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import {Appbar, Button, Picker, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {ButtonGroup} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  10,
  15,
  8,
  20,
  12,
  18,
  16, // Example data for high and low values
];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function recordProgress_1() {
  const navigation = useNavigation();

  const [Text, setText] = useState('');
  // for button groups.
  const [selectedIndex, changeSelctedIndex] = useState(0);
  const buttons = ['My Records', 'Show Report'];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: 'Pain Analogue',
      value: 'Pain Analogue',
    },
    {label: 'Pain Analogue2', value: 'Pain Analogue2'},
  ]);

  const _goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content style={styles.headerText} title="Records &  Progress" />
      </Appbar.Header>

      {/* Profile Fields Start */}
      <View style={styles.loginView}>
        <ButtonGroup
          onPress={value => changeSelctedIndex(value)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{
            height: 40,
            borderWidth: 1,
            borderRadius: 20,
            marginBottom: 16,
          }}
          buttonStyle={{borderRadius: 20}}
          buttonContainerStyle={{
            backgroundColor: 'rgba(246, 246, 246, 1)',
            borderRightWidth: 0,
            color: '#f3f3f3',
          }}
          selectedButtonStyle={{backgroundColor: 'white'}}
          selectedTextStyle={{color: '#0C212C'}}
          textStyle={{color: '#576B74'}}
        />
        {selectedIndex === 0 ? (
          <>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                marginTop: 20,
                marginBottom: 60,
                borderRadius: 20,
                height: 40,
                width: 320,
                alignSelf: 'center',
                justifyContent: 'center',
                color: '#f3f3f3',
                fontSize: 2,
              }}
            />
            <TextInput
              label="Update Blood Pressure (Systole)"
              value={Text}
              onChangeText={text => setText(text)}
              style={styles.inputField}
            />

            <TextInput
              label="Update Blood Pressure "
              value={Text}
              onChangeText={text => setText(text)}
              style={styles.inputField}
            />
            <TextInput
              label="Sugar level (mg) "
              value={Text}
              onChangeText={text => setText(text)}
              style={styles.inputField}
            />
            <TextInput
              label="Sleeping Hours "
              value={Text}
              onChangeText={text => setText(text)}
              style={styles.inputField}
            />
            <TextInput
              label="Weight "
              value={Text}
              onChangeText={text => setText(text)}
              style={styles.inputField}
            />

            <Button
              style={{
                marginTop: 20,
                borderRadius: 20,
                height: 40,
                width: 250,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#BF6BBB',
                color: '#f3f3f3',
                fontSize: 2,
              }}
              mode="contained"
              onPress={() => navigation.navigate('recordAndGraph')}>
              check Next screen
            </Button>
          </>
        ) : (
          <>
            <Button
              style={{
                marginTop: 20,
                borderRadius: 20,
                height: 40,
                width: 250,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#BF6BBB',
                color: '#f3f3f3',
                fontSize: 2,
              }}
              mode="contained"
              onPress={() => navigation.navigate('recordAndGraph')}>
              check Next screen
            </Button>
          </>
        )}
      </View>
    </View>
  );
}
