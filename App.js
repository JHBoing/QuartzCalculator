import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quartzo: 0,
            quartzoRosa: 0,
            rubelita: 0,
            esmeralda: 0,
            safira: 0,
            rubi: 0,
            ambar: 0
        }
    }

    handleClickSoma = (pedra) => {
        this.setState({ [pedra]: this.state.pedra + 1});
    }

    handleClickSub = (pedra) => {
        if(this.state.pedra > 0) {
            this.setState({ [pedra]: this.state.pedra - 1});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Quartz Calculatora</Text>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={(quartzo) => (this.state.quartzo > 0) ? this.setState({quartzo: this.state.quartzo - 1}):null}
                    />
                    <Text>Quartzo</Text>
                    <Text> {this.state.quartzo}</Text>
                    <TouchableOpacity
                        title="+"
                        onPress={(quartzo) => this.setState({quartzo: this.state.quartzo + 1})}
                    />
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={(quartzoRosa) => (this.state.quartzoRosa > 0) ? this.setState({quartzoRosa: this.state.quartzoRosa - 1}):null}
                    />
                    <Text>Quartzo Rosa</Text>
                    <Text> {this.state.quartzoRosa}</Text>
                    <TouchableOpacity
                        title="+"
                        onPress={(quartzoRosa) => this.setState({quartzoRosa: this.state.quartzoRosa + 1})}
                    />
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={(rubelita) => (this.state.rubelita > 0) ? this.setState({rubelita: this.state.rubelita - 1}):null}
                    />
                    <Text>Rubelita</Text>
                    <Text> {this.state.rubelita}</Text>
                    <TouchableOpacity
                        title="+"
                        onPress={(rubelita) => this.setState({rubelita: this.state.rubelita + 1})}
                    />
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={(esmeralda) => (this.state.esmeralda > 0) ? this.setState({esmeralda: this.state.esmeralda - 1}):null}
                    />
                    <Text>Esmeralda</Text>
                    <Text> {this.state.esmeralda}</Text>
                    <TouchableOpacity
                        title="+"
                        onPress={(esmeralda) => this.setState({esmeralda: this.state.esmeralda + 1})}
                    />
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={(safira) => (this.state.safira > 0) ? this.setState({safira: this.state.safira - 1}):null}
                    />
                    <Text>Safira</Text>
                    <Text> {this.state.safira}</Text>
                    <TouchableOpacity
                        title="+"
                        onPress={(safira) => this.setState({safira: this.state.safira + 1})}
                    />
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={(rubi) => (this.state.rubi > 0) ? this.setState({rubi: this.state.rubi - 1}):null}
                    />
                    <Text>Rubi</Text>
                    <Text> {this.state.rubi}</Text>
                    <TouchableOpacity
                        title="+"
                        onPress={(rubi) => this.setState({rubi: this.state.rubi + 1})}
                    />
                </View>
                <View style={styles.pedraContainer}>
                    <TouchableOpacity
                        title="-"
                        onPress={(ambar) => (this.state.ambar > 0) ? this.setState({ambar: this.state.ambar - 1}):null}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>Âmbar</Text>
                    <Text> {this.state.ambar}</Text>
                    <TouchableOpacity
                        title="+"
                        onPress={(ambar) => this.setState({ambar: this.state.ambar + 1})}
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
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        width: 50,
        height: 50
    }
});
