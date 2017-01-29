import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    ListView
} from 'react-native';
import AudioExample from './newAudioExample';
global.___DEV___ = false
import Permissions from 'react-native-permissions';
var Speech = require('react-native-speech');
console.disableYellowBox = true;
export default class Main extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            data: ['row 1', 'row 2'],
            record: false,
        };
    }
    componentDidMount() {
        Permissions.requestPermission("microphone")
            .then(res => console.log(res));

    }

    renderRow(rowData) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, padding: 5, }}>
                <View style={{ flex: 1 }}>
                    <Text>Item: Hey </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Cost: There</Text>
                </View>
            </View>
        );
    }
    renderCost() {
        if (this.state.data.length > 0) {
            cost = 0;
            for (index in this.state.data) {
                cost += 1;
            }
            return (
                <Text style={{ textAlign: 'center', fontSize: 40 }}>Total Cost: {cost}</Text>
            );
        }
        return null;
    }
    initDisplay() {
        if (false) {
            return (
                <View />
            );
        }
        const _this = this;
        const title = "Joe's Coffee Bean's";
        return (
            <View style={styles.container}>
                <AudioExample record={_this.state.record} onStart={() => { _this.setState({ record: false }) } } />
                <Text style={{ textAlign: 'center', fontSize: 20 }}>
                    {title}
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', borderRadius: 5, backgroundColor: '#0760ef', width: 300, }}>
                        <TouchableOpacity onPress={() => { _this.setState({ record: true }) } }>
                            <Text style={{ fontSize: 100, textAlign: 'center', padding: 10 }}>Speak</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ borderWidth: 1, marginTop: 20 }} />
            </View>
        );
    }

    render() {
        return this.initDisplay();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    }
});
