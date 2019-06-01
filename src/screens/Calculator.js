import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';



export default class Calculator extends React.Component {
 
    static navigationOptions = {
        title: 'Quartz Calculator',
      };

    constructor(props) {
        super(props);
        this.state = {
            quartzo: {
                valor: 1,
                contador: 0
            },
            quartzoRosa:{
                valor: 0,
                contador: 0
            },
            rubelita:{
                valor: 2,
                contador: 0
            },
            esmeralda: {
                valor: 3,
                contador: 0
            },
            safira: {
                valor: 4,
                contador: 0
            },
            rubi: {
                valor: 6,
                contador: 0
            },
            ambar: {
                valor: 8,
                contador: 0
            },
            total: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.totalContainer}>
                    <Text>Total: </Text>
                    <Text>{this.state.total}</Text>
                </View>
                <View style={[styles.pedraContainer, styles.quartzo]}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.quartzo.contador > 0) ? this.setState({quartzo: {...this.state.quartzo, contador: this.state.quartzo.contador - 1}}): null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantidadePedraContainer}>
                        <Text>Quartzo</Text>
                        <Text>{this.state.quartzo.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({ quartzo:  {...this.state.quartzo, contador: this.state.quartzo.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pedraContainer, styles.quartzoRosa]}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.quartzoRosa.contador > 0) ? this.setState({quartzoRosa: {...this.state.quartzoRosa, contador: this.state.quartzoRosa.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantidadePedraContainer}>
                        <Text>Quartzo Rosa</Text>
                        <Text>{this.state.quartzoRosa.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({quartzoRosa: {...this.state.quartzoRosa, contador: this.state.quartzoRosa.contador + 1 }})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pedraContainer, styles.rubelita]}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.rubelita.contador > 0) ? this.setState({rubelita: {...this.state.rubelita, contador: this.state.rubelita.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantidadePedraContainer}>
                        <Text style={styles.corBranca}>Rubelita</Text>
                        <Text style={styles.corBranca}>{this.state.rubelita.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({rubelita: {...this.state.rubelita, contador: this.state.rubelita.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pedraContainer, styles.esmeralda]}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.esmeralda.contador > 0) ? this.setState({esmeralda: {...this.state.esmeralda, contador: this.state.esmeralda.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantidadePedraContainer}>
                        <Text style={styles.corBranca}>Esmeralda</Text>
                        <Text style={styles.corBranca}>{this.state.esmeralda.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({esmeralda: {...this.state.esmeralda, contador: this.state.esmeralda.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>    
                </View>
                <View style={[styles.pedraContainer, styles.safira]}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.safira.contador > 0) ? this.setState({safira: {...this.state.safira, contador: this.state.safira.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantidadePedraContainer}>
                        <Text style={styles.corBranca}>Safira</Text>
                        <Text style={styles.corBranca}>{this.state.safira.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({safira: {...this.state.safira, contador: this.state.safira.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pedraContainer, styles.rubi]}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.rubi.contador > 0) ? this.setState({rubi: {...this.state.rubi, contador: this.state.rubi.contador - 1}}  ):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantidadePedraContainer}>
                        <Text style={styles.corBranca}>Rubi</Text>
                        <Text style={styles.corBranca}>{this.state.rubi.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({rubi:{...this.state.rubi, contador: this.state.rubi.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pedraContainer, styles.ambar]}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.ambar.contador > 0) ? this.setState({ambar:{...this.state.ambar, contador: this.state.ambar.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantidadePedraContainer}>
                        <Text style={styles.corBranca}>Âmbar</Text>
                        <Text style={styles.corBranca}> {this.state.ambar.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({ambar: {...this.state.ambar, contador: this.state.ambar.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    pedraContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    totalContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    quantidadePedraContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        color: 'white'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        width: 40,
        height: 40,
        fontSize: 100
    },
    quartzo: {
        backgroundColor: '#F1F0EA'
    },
    quartzoRosa: {
        backgroundColor: '#F9D5E1'
    },
    rubelita: {
        backgroundColor: '#FF5E93'
    },
    esmeralda: {
        backgroundColor: '#419D78'
    },
    safira: {
        backgroundColor: '#54577C'
    },
    rubi: {
        backgroundColor: '#8C1C13'
    },
    ambar: {
        backgroundColor: '#E0A458'
    },
    corBranca: {
        color: 'white'
    }
});


