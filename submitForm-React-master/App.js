{/*
Diego Guzman
02/11/2020
Project 1
V1.0
*/}

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, Button, KeyboardAvoidingView, Alert } from 'react-native';

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
    ID: '',
    Name: '',
    Major: '',
    Goal: ''
    };
  }

  clear() {
    this.setState({
    ID: '',
    name: '',
    major: '',
    goal: ''
    });
  }

  submitForm() {
    alert("Student information has been submitted:\n" + this.state.ID + "\n" + this.state.name + "\n" + this.state.major + "\n" + this.state.goal);

 }




  render() {
    return (
    <ScrollView>
        {/*View Container*/}
        <View style={styles.container}>
            <Text style={styles.header}> University of Delaware </Text>
            <Text style={{paddingBottom: 25, color: 'white', fontSize: 18}}> Fill in the information below: </Text>
        </View>
            {/* Text Fields */}
            <View style={styles.form}>
                <KeyboardAvoidingView behavior="padding" enable keyboardVerticalOffset='250'>
                    <Text style={{fontWeight: 'bold'}}>Student ID: </Text>
                    <TextInput style={{height: 30, borderBottomWidth: 0.5}} placeholder="Enter Student ID Here (ex. 7654321)" onChangeText={(ID) => this.setState({ID})} value={this.state.ID}/>

                    <Text style={{paddingTop: 30, fontWeight: 'bold' }}>Name: </Text>
                    <TextInput style={{height: 40, borderBottomWidth: 0.5}} placeholder="Enter Student Name Here" onChangeText={(name) => this.setState({name})} value={this.state.name}/>

                     <Text style={{paddingTop: 30, fontWeight: 'bold'}}>Major: </Text>
                     <TextInput style={{height: 40, borderBottomWidth: 0.5}} placeholder="Enter Your Major Here" onChangeText={(major) => this.setState({major})} value={this.state.major}/>


                    <Text style={{paddingTop: 30, fontWeight: 'bold'}}>Goal: </Text>
                    <TextInput style={{height: 40, borderBottomWidth: 0.5}} placeholder="Enter Your Goal Here" onChangeText={(goal) => this.setState({goal})} value={this.state.goal}/>
                </KeyboardAvoidingView>

                {/* buttons */}
                <View style={styles.buttons}>
                    <View  style={{marginBottom: 15, backgroundColor: "blue"}}>
                        <Button title="Submit" color="white" onPress={this.submitForm.bind(this)} />
                    </View>

                    <View style={{marginBottom: 15, backgroundColor: "blue"}}>
                        <Button title="Clear" color="white" onPress={this.clear.bind(this)}/>
                    </View>

                </View>

            </View>

    </ScrollView>

    );
  }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#053bff',
        paddingTop: 15
    },

    header: {
        padding: 30,
        fontSize: 30,
        color: 'yellow',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },

    form: {
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#053bff'

    },

    buttons: {
    paddingTop: 45,
    width: 350,
    }


});



