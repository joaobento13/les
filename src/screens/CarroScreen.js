import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native'
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const imageDefault = require("../assets/image.png");

class CarroScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carro: { id: 1, nome: 'Fiat Palio', tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' },
            user: {}
        }
    }

    componentWillMount() {
        let carro = this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.carro ? this.props.navigation.state.params.carro : this.state.carro
        this.setState({ carro, user: this.props.navigation.state.params.user })
    }

    goBack = () => {
        const { goBack } = this.props.navigation;
        goBack()
    }

    goToSite = () => {
        Linking.canOpenURL('https://www.google.com.br/').then(supported => {
            if (supported) {
                Linking.openURL('https://www.google.com.br/');
            } else {
                console.log("Não foi possível acessar a URL: " + this.state.url);
            }
        })
    }

    goToLogin = () => {
        const { navigate } = this.props.navigation;
        navigate('Login')
    }

    _setValue = (pValor, pVariable) => {
        this.setState({ [pVariable]: pValor });
    }

    renderHeader = () => {
        return (
            <View style={{ backgroundColor: 'white', flex: 1, flexDirection: "row" }}>
                <Text style={{ flex: 0.3, color: "#184E88", fontSize: 34, marginTop: 15, marginLeft: 10, fontWeight: '600' }}>LES</Text>
                <View style={{ flex: 0.7, paddingVertical: 20, paddingHorizontal: 15 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", backgroundColor: "#184E88", borderRadius: 5, height: 30 }}>
                        <Text style={{ flex: 1, color: "white", fontSize: 11, marginTop: 10, marginLeft: 10 }}>Olá, <Text style={{ fontWeight: '600' }}>{this.state.user.nome}</Text></Text>
                        {/* <Text style={{ flex: 1, color: "white", fontSize: 11, marginTop: 10, marginLeft: 10 }}>Minha Conta</Text> */}
                        <TouchableOpacity onPress={this.goToLogin}>
                            <Text style={{ flex: 1, color: "white", fontSize: 11, marginTop: 10, marginRight: 10, textAlign: "right" }}>SAIR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    renderBack = () => {
        return (
            <View>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={{ color: '#184E88', fontSize: 11, textAlign: "left", marginLeft: 10 }}>{`<`} Voltar para a página de resultados</Text>
                </TouchableOpacity>
            </View >
        )
    }

    renderBody = () => {
        return (
            <View style={{ marginTop: 40 }}>
                <Text style={{ marginLeft: 20, marginBottom: 10, fontSize: 16, fontWeight: '600' }}>{this.state.carro.nome}</Text>
                <Image
                    source={imageDefault}
                    resizeMode='contain'
                    style={{ width: '100%' }}
                />
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                    <TouchableOpacity onPress={this.goToSite} style={{ width: '30%', backgroundColor: '#184E88', marginRight: 30, borderRadius: 5, height: 30, marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ color: "white", textAlign: "center" }}>COMPRE JÁ</Text></TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20, marginTop: 10, borderWidth: 1, borderColor: '#184E88', borderRadius: 3, width: "40%" }}>
                    <Text style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}>{this.state.carro.tipo}</Text>
                    <Text style={{ marginLeft: 10, marginBottom: 10 }}>{this.state.carro.ano}</Text>
                    <Text style={{ marginLeft: 10, marginBottom: 10 }}>{this.state.carro.otherInfo}</Text>
                    <Text style={{ marginLeft: 10, marginBottom: 10 }}>{this.state.carro.preco}</Text>
                    <Text style={{ marginLeft: 10, marginBottom: 10 }}>{this.state.carro.radio}</Text>
                    <Text style={{ marginLeft: 10, marginBottom: 10 }}>{this.state.carro.cambio}</Text>
                    <Text style={{ marginLeft: 10, marginBottom: 10 }}>{this.state.carro.trava}</Text>

                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <SafeAreaView />
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={true}
                    automaticallyAdjustContentInsets={false}
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode='on-drag'
                    enableResetScrollToCoords={false} behavior="position" extraHeight={150}
                >
                    {this.renderHeader()}
                    {this.renderBack()}
                    {this.renderBody()}
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.ConfigReducer.login
    };
};

export default connect(
    mapStateToProps,
    {}
)(CarroScreen);
