import React, { Component, PropTypes } from 'react';
import {Modal, Text, TouchableOpacity, View, Image } from 'react-native';

import styles from './styles';

class DeveloperInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
        };
    }

    componentDidMount() {
    }
    
    componentWillUnmount() {
    }

    onExitButtPress= () => {
        this.setModalVisible(!this.state.modalVisible);
    }
    render(){
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                        alert('Please close developer info first');
                }}
            >
                <View style={styles.container}>
                    <View style={styles.bodyTextContainer}>
                        <Text style= {styles.bodyText}>
                            This app is developed by
                        </Text>
                        <Text style= {styles.bodyTextBold}>
                            Ali Ba Wazir
                        </Text>
                    </View>
                    <Image
                        source= {require('./images/alibawazir.jpg')}
                        resizeMode= 'contain'
                        style={styles.developerImage}
                    />
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

DeveloperInfo.PropTypes= {
    visible: PropTypes.bool,
    onExitButtonPress: PropTypes.func,
};

export default DeveloperInfo;