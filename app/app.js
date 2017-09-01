/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            userPwd: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row'}}>
                    <View style={styles.textView}>
                        <Text style={styles.welcome}>
                            用户名：
                        </Text>
                    </View>
                    <TextInput
                        placeholder="请输入用户名"
                        underlineColorAndroid="transparent"
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({userName: text})}
                        value={this.state.userName}
                    />
                </View>

                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={styles.textView}>
                        <Text style={styles.welcome}>
                            密码：
                        </Text>
                    </View>
                    <TextInput
                        placeholder="请输入密码"
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({userPwd: text})}
                        value={this.state.userPwd}
                    />
                </View>

                <View style={{marginTop: 20}}>
                    <Button title="登录" onPress={this.clickBtn}/>
                </View>

            </View>
        );
    }

    clickBtn = () => {
        let userName = this.state.userName;
        let userPwd = this.state.userPwd;
        Alert.alert(`${userName}:${userPwd}`);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 100
    },
    welcome: {
        fontSize: 15,
        textAlign: 'right',
        marginLeft: 10,
        width: 80,
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    inputStyle: {
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        marginRight: 40,
        height: 40
    }
});

