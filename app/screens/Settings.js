import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Location"
            rightIcon={
              <Icon name={'md-locate'} style={{fontSize: 20, color: 'blue'}}/>
            }
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;