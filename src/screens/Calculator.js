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

    handleClickSoma = (pedra) => {
        this.setState({ [pedra.contador]: this.state.pedra.contador + 1});
    }

    handleClickSub = (pedra) => {
        if(this.state.pedra > 0) {
            this.setState({ [pedra]: this.state.pedra - 1});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.totalContainer}>
                    <Text>Total: </Text>
                    <Text>{this.state.total}</Text>
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.quartzo.contador > 0) ? this.setState({quartzo: {...this.state.quartzo, contador: this.state.quartzo.contador - 1}}): null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View>
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
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.quartzoRosa.contador > 0) ? this.setState({quartzoRosa: {...this.state.quartzoRosa, contador: this.state.quartzoRosa.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View>
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
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.rubelita.contador > 0) ? this.setState({rubelita: {...this.state.rubelita, contador: this.state.rubelita.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>Rubelita</Text>
                        <Text>{this.state.rubelita.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({rubelita: {...this.state.rubelita, contador: this.state.rubelita.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.esmeralda.contador > 0) ? this.setState({esmeralda: {...this.state.esmeralda, contador: this.state.esmeralda.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>Esmeralda</Text>
                        <Text>{this.state.esmeralda.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({esmeralda: {...this.state.esmeralda, contador: this.state.esmeralda.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>    
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={() => (this.state.safira.contador > 0) ? this.setState({safira: {...this.state.safira, contador: this.state.safira.contador - 1}}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>Safira</Text>
                        <Text> {this.state.safira.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={() => this.setState({safira: {...this.state.safira, contador: this.state.safira.contador + 1}})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={(rubi) => (this.state.rubi.contador > 0) ? this.setState({rubi: this.state.rubi.contador - 1}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>Rubi</Text>
                        <Text> {this.state.rubi.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={(rubi) => this.setState({rubi: this.state.rubi.contador + 1})}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pedraContainer, styles.quartzo]}>
                    <TouchableOpacity
                        title="-"
                        onPress={(ambar) => (this.state.ambar.contador > 0) ? this.setState({ambar: this.state.ambar.contador - 1}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>Âmbar</Text>
                        <Text> {this.state.ambar.contador}</Text>
                    </View>
                    <TouchableOpacity
                        title="+"
                        onPress={(ambar) => this.setState({ambar: this.state.ambar.contador + 1})}
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        width: 35,
        height: 35
    },
    quartzo: {
        backgroundColor: '#ff0090'
    }

});


