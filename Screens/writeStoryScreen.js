import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Header2 from "../components/Header2"

export default class WriteStoryScreen extends React.Component {

    submitStory = () => {

       console.log("working")
    }

    constructor() {
        super()

        this.state = {
            author: '',
            title: '',
            body: ''
        }
    }
    render() {
        return (

            <View>

                <Header2 />
                <TextInput

                    onChangeText={(text) => {

                        this.setState({

                         author: text

                        })

                    }}

                    style={styles.textInputStyle}
                    placeholder='Author'
                />

                <TextInput

                    style={styles.textInputStyle}
                    placeholder='Title'

                    onChangeText={(text) => {

                        this.setState({

                            title: text

                        })
                    }}

                />
                <TextInput

                    style={styles.textInputStyle2}
                    placeholder='WriteStoryHere'

                    onChangeText={(text) => {

                        this.setState({

                            body: text

                        })
                    }}
                />

                <TouchableOpacity style={{ borderWidth: 6, borderColor: 'lightgrey', height: 60, width: 300, borderRadius: 20, backgroundColor: 'grey', alignSelf: 'center', marginTop: 60 }} onPress={this.submitStory}>

                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, alignSelf: 'center', marginTop: 4}}>Submit</Text>

                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    textInputStyle: {

        borderWidth: 3,
        justifyContent: 'center',
        width: '40%',
        height: 50,
        alignSelf: 'center',
        marginTop: 50
    },

    textInputStyle2: {

        height: 200,
        width: '40%',
        alignSelf: 'center',
        marginTop: 50,
        borderWidth: 3
    }
})