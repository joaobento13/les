import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TxtInput from '../components/TxtInput';

const img1 = require("../assets/carro1.png");
const img2 = require("../assets/carro2.png");

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: '',
            lstCarros: [
                { id: 1, nome: 'Fiat Palio', image: img1, tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' },
                { id: 2, nome: 'Hyundai Tucson', image: img2, tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' },
                { id: 3, nome: 'Fiat Palio', image: img1, tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' },
                { id: 4, nome: 'Hyundai Tucson', image: img2, tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' },
                { id: 5, nome: 'Fiat Palio', image: img1, tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' },
                { id: 6, nome: 'Hyundai Tucson', image: img2, tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' },
                { id: 7, nome: 'Fiat Palio', image: img1, tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' },
                { id: 8, nome: 'Hyundai Tucson', image: img2, tipo: "Flex", ano: "2010", otherInfo: "157.097 km", preco: 'R$ 33.900,00', radio: 'Rádio', cambio: 'Câmbio Automático', trava: 'Trava Elétrica' }
            ],
            user: {}
        }
    }

    componentWillMount() {
        let user = this.props.navigation.state.params.usuario
        let objUser = {}
        if (user.type === "login") {
            objUser = this.props.lstUsuarios.find(userX => userX.email === user.email.toLowerCase())
        } else {
            objUser = user
        }

        this.setState({ user: objUser })
    }

    goToLogin = () => {
        const { navigate } = this.props.navigation;
        navigate('Login')
    }

    goToCarro = (pCarro) => {
        const { navigate } = this.props.navigation;
        navigate('Carro', { carro: pCarro, user: this.state.user })
    }

    handleChange = e => {
        this.setState({ textSearch: e });
    }


    filterCarsByText = (searchText) => {
        if (!searchText) return this.state.lstCarros

        let text = searchText.toLowerCase();

        let lstCarrosFilter = this.state.lstCarros.filter(item => {
            let nome = item.nome ? item.nome.toLowerCase() : '';
            let tipo = item.tipo ? item.tipo.toLowerCase() : '';
            let ano = item.ano ? item.ano.toLowerCase() : '';
            let preco = item.preco ? item.preco.toLowerCase() : '';
            let otherInfo = item.otherInfo ? item.otherInfo.toLowerCase() : '';

            let searched = (nome.indexOf(text) !== -1) || (tipo.indexOf(text) !== -1) || (ano.indexOf(text) !== -1) || (preco.indexOf(text) !== -1) || (otherInfo.indexOf(text) !== -1);

            return searched;
        }).map(item => {
            return item;
        });

        return lstCarrosFilter;
    };

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

    renderSearch = () => {
        return (
            <TxtInput
                placeholder={`Ex.: Cobalt 1.6 automático branco`}
                handleChange={this.handleChange.bind(this)}
            />
        )
    }

    _renderItem = (obj) => {
        let carro = obj.item;

        return (
            <View style={{ backgroundColor: "#F7F7F7", flex: 1, height: 260, marginHorizontal: 10, marginVertical: 10 }} key={carro.id}>
                <TouchableOpacity onPress={() => this.goToCarro(carro)}>
                    <Image
                        source={carro.image}
                        resizeMode='contain'
                        style={{ width: '100%' }}
                    />
                    <Text style={{ paddingHorizontal: 10, color: "#184E88", fontSize: 11, marginTop: 5 }}>{carro.nome}</Text>
                    <View style={{ paddingHorizontal: 5, flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                        <View style={{ backgroundColor: "#C6C6C6", flex: 0.8, height: 13, borderRadius: 10, marginHorizontal: 3 }}>
                            <Text style={{ color: "white", fontSize: 10, textAlign: "center" }}>
                                {carro.tipo}
                            </Text>
                        </View>
                        <View style={{ backgroundColor: "#C6C6C6", flex: 0.8, height: 13, borderRadius: 10, marginHorizontal: 3 }}>
                            <Text style={{ color: "white", fontSize: 10, textAlign: "center" }}>
                                {carro.ano}
                            </Text>
                        </View>
                        <View style={{ backgroundColor: "#C6C6C6", flex: 1.4, height: 13, borderRadius: 10, marginHorizontal: 3 }}>
                            <Text style={{ color: "white", fontSize: 10, textAlign: "center" }}>
                                {carro.otherInfo}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ paddingHorizontal: 10, color: "#184E88", fontSize: 11, marginTop: 25 }}>{carro.preco}</Text>
                    <View style={{ backgroundColor: "#2783E8", borderRadius: 10, marginTop: 10, width: '70%', marginLeft: '15%', height: 20, justifyContent: "center" }}>
                        <Text style={{ color: 'white', fontSize: 9, textAlign: "center" }}>MAIS INFORMAÇÕES</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderList = () => {
        let cars = this.filterCarsByText(this.state.textSearch)

        return (
            <FlatList
                style={{ flex: 1 }}
                numColumns={2}
                data={cars}
                renderItem={item => this._renderItem(item)}
            />
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
                    {this.renderSearch()}
                    {this.renderList()}
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.ConfigReducer.login,
        lstUsuarios: state.ConfigReducer.lstUsuarios
    };
};

export default connect(
    mapStateToProps,
    {}
)(HomeScreen);