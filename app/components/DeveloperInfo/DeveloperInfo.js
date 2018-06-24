import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { connectAlert } from '../Alert';
import styles from './styles';

class DeveloperInfo extends Component {
    static propTypes= {
        visible: PropTypes.bool,
        onExitButtonPress: PropTypes.func,
        alertWithType: PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    
    componentWillUnmount() {
    }
    
    handleLinkPress= ()=>{
        url= 'https://github.com/buamod/SimpleWeatherApp';
        Linking.openURL(url).catch(()=>{
            this.props.alertWithType('error', 'Sorry!', 'The following link cannot be opened right now\n'+ url);
        });
    }

    render(){
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    //hide the Modal
                    this.props.onExitButtonPress();
                }}
            >
                <View style={styles.container}>
                    <View style={styles.bodyTextContainer}>
                        <Text style= {styles.bodyText}>
                            This app uses real time weather data from Open Weather Map API.
                        </Text>
                    </View>
                    <TouchableOpacity
                            onPress= {this.handleLinkPress}
                            style= {styles.button}
                    >
                        <Icon 
                            name={'logo-github'}
                            size={styles.icon.fontSize}
                            style= {styles.icon}
                        />
                        <Text style= {styles.bodyTextBold}>
                                GitHub Repository
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress= {this.props.onExitButtonPress}
                        style= {styles.button}
                    >
                        <Text style= {styles.buttonText}>
                            Exit
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default connectAlert(DeveloperInfo);