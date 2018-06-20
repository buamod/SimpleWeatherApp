import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  list = [
    {
      title: 'Location',
      icon: 'place',
    },
  ];

  handleLocationPress = ()=>{
    const { navigation } = this.props;
    const settingsData = navigation.getParam('settingsData', null);
    if (settingsData != null){
      locationSettingsData = settingsData.location;
      this.props.navigation.navigate('LocationSettings', {...locationSettingsData});
    }else{
      this.props.navigation.navigate('LocationSettings');
    }
  }

  render() {
    return (
      <ScrollView>
        <List>
          {
            this.list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress= {this.handleLocationPress}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

export default Settings;