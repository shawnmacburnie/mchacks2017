import React, { Component } from 'react';
import { View, DeviceEventEmitter, Text } from 'react-native';
import Beacons from 'react-native-ibeacon';
import BluetoothState from 'react-native-bluetooth-state';

export default class BeaconLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bluetoothState: '',
            beacon: null,
        };
    }

    componentWillMount() {

        const region = {
            identifier: 'Estimotes',
            uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
        };
        Beacons.requestWhenInUseAuthorization();
        Beacons.startRangingBeaconsInRegion(region);
        // Beacons.startUpdatingLocation();
    }

    componentDidMount() {
        const { beaconCallback } = this.props;
        var subscription = DeviceEventEmitter.addListener('beaconsDidRange',beaconCallback);
        BluetoothState.subscribe(
            bluetoothState => {
                this.setState({ bluetoothState: bluetoothState });
            }
        );
        BluetoothState.initialize();
    }
    render() {
        return (
            <View />
        );
    }
}