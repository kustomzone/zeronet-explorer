import React from 'react'

import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import { Navigation } from 'react-native-navigation'

import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import stores from '../stores'

@observer
export default class P0rtalTopBar extends React.Component {
    constructor(props) {
        super(props)

        console.log('P0rtalTopBar received props', props)
    }

    componentDidAppear() {
        console.log('RNN', 'CTB.componentDidAppear')
    }

    componentDidDisappear() {
        console.log('RNN', `CTB.componentDidDisappear`)
    }

    componentDidMount() {
        console.log('RNN', `CTB.componentDidMount`)
    }

    componentWillUnmount() {
        console.log('RNN', `CTB.componentWillUnmount`)
    }

    render() {
        console.log('stores', stores)

        return <View style={ styles.container }>
            <View style={ styles.heading }>
                <Text style={ styles.headingText }>{ stores.Counter.title }</Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row' }}>
                <TouchableOpacity style={ styles.button } onPress={ this._loadHelp.bind(this) }>
                    <Text style={ styles.buttonText }>Help</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.button } onPress={ this._closeP0rtal.bind(this) }>
                    <Text style={ styles.buttonText }>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    _closeP0rtal() {
        Navigation.mergeOptions('zeronet.P0rtal', {
            sideMenu: {
                right: {
                    visible: false
                }
            }
        })
    }

    _loadHelp() {
        Navigation.push('zeronet.P0rtal', {
            component: {
                name: 'zeronet.P0rtal.Help'
            }
        })
    }

}

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        height: 56,
        // flex: 1,
        flexDirection: 'row',
        // width: 350
        backgroundColor: 'rgba(180, 30, 30, 0.5)'
    },
    heading: {
        width: 100,
        backgroundColor: 'rgba(30, 180, 30, 0.5)'
    },
    headingText: {
        color: 'black',
        fontSize: 20
    },
    button: {
        margin: 5,
        backgroundColor: 'rgba(30, 30, 180, 0.5)'
    },
    buttonText: {
        color: 'black',
    }
})
