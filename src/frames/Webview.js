import React from 'react'

import {
    // Button,
    StyleSheet,
    ScrollView,
    Text,
    View,
    WebView
} from 'react-native'

import { Navigation } from 'react-native-navigation'

import { Button } from 'react-native-elements'

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props)

        console.log('Webview received props', props)

        this.state = {
            debug: 'loading...'
        }
    }

    render() {
        const source = {
            uri: 'https://github.com/d14na/zeronet-explorer/blob/master/README.md'
            // uri: 'https://github.com/d14na/zeronet-explorer/'
        }

        return <View style={ styles.container }>
            <WebView
                source={ source }
                style={ styles.webview } />

            <View style={ styles.footer }>
                <Button
                    title='<'
                    style={ styles.footerButton } />

                <Button
                    title='>'
                    style={ styles.footerButton } />

                <Button
                    title='History'
                    style={ styles.footerButton } />
            </View>
        </View>
    }

    componentDidMount() {
        console.info('Webview has loaded.')

        // this._goDownload()

        // console.log('triple 3', peer0.triple(3))
        // const net = require('net')
        // console.log('net', net)

        Navigation.mergeOptions(this.props.componentId, {
          topBar: {
            rightButtons: [
              {
                id: 'myDynamicButton',
                title: 'My Button'
              }
            ]
          }
        })
    }

    async _goDownload() {
        const net = require('net')
        const peer0 = require('peer0')

        console.log('Making download request from Peer0')

        let response = await peer0.download(net)
        console.log('peer0 awaiting response', response)

        this.setState({ debug: response })

    }

    _loadWebview() {
        console.log('open webview')

        // Navigation.showModal({
        //   stack: {
        //     children: [{
        //       component: {
        //         name: 'zeronet.Webview',
        //         passProps: {
        //           text: 'stack with one child'
        //         },
        //         options: {
        //             topBar: {
        //                 visible: false,
        //                 // animate: false,
        //                 drawBehind: true
        //             }
        //         }
        //       }
        //     }]
        //   }
        // })

        Navigation.push(this.props.componentId, {
            component: {
                name: 'zeronet.Webview',
                options: {
                    topBar: {
                        visible: false,
                        animate: false,
                        drawBehind: true
                    }
                }
            }
        })
    }

    _removeButton() {
        Navigation.mergeOptions(this.props.componentId, {
          topBar: {
            rightButtons: []
          }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    webview: {
        flex: 1,
        width: '100%',
        // height: '100%'
    },
    footer: {
        flexDirection: 'row',
        width: 350,
        height: 50
    },
    footerButton: {
        flex: 1,
        width: 100
    }
})

export default WelcomeScreen