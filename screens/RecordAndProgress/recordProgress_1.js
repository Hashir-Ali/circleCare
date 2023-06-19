import React from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';

export default function recordProgress_1() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View style={{flex: 1}}>
      <Text>recordProgress_1</Text>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    </View>
  );
}
