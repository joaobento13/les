import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const searchBranco = require("../assets/Search-cinza.png");
const iconX = require("../assets/iconX.png");

export default class TxtInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={styles.boxTextSearch}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderBottomColor: "#C6C6C6",
                    borderBottomWidth: 1,
                    paddingRight: this.props.paddingRight ? this.props.paddingRight : 15,
                    paddingLeft: 15
                }}>
                    <Image style={{ width: 20, height: 20, marginLeft: 5, }}
                        resizeMode="contain" source={searchBranco} />
                    <TextInput
                        {...this.props}
                        style={styles.textSearch}

                        onChangeText={(textSearch) => {
                            this.props.handleChange(textSearch)
                            this.setState({
                                text: textSearch
                            })
                        }}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#C6C6C6"
                        autoCorrect={false}
                        value={this.state.text}
                    />
                    <TouchableOpacity
                        style={{ width: 30, height: 30, justifyContent: "center", alignItems: "flex-start", borderRadius: 90 }}
                        onPress={() => {
                            this.props.handleChange('')
                            this.setState({
                                text: ''
                            })
                        }}
                    >
                        <Image
                            source={iconX}
                            resizeMode='contain'
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxTextSearch: {
        backgroundColor: "white",
        padding: 10,

    },
    textSearch: {
        fontSize: 16,
        padding: 2,
        color: "#C6C6C6",
        width: '85%',
        marginLeft: 15,
        fontWeight: '300'
    },
})
