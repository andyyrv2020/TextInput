import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

class EventForm extends Component {

    state = {
        title: '',
        events: [],
        date: Date.now()
    };

    componentDidMount() {
        const events = require("./data.json").events;
        this.setState({ events });
    }

    processForm() {
        alert(this.state.title);
        this.state.events.push({
            title: this.state.title,
            date: this.state.date
        });
        this.props.navigation.navigate('EventList')
    }


    render() {
        return (
            <View>
                <TextInput
                    placeholder='Event Title'
                    value={this.state.title}
                    style={styles.input}
                    onChangeText={(value) => { this.setState({ title: value }); }}
                ></TextInput>

                <TextInput
                    placeholder='Event Date'
                    style={styles.input}
                    value={this.state.date}
                    onChangeText={(value) => { this.setState({ date: value }); }}
                ></TextInput>

                <Button title='Add'
                    onPress={() => this.processForm()}
                />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: '1em',
        paddingVertical: '0.5em',
        marginVertical: '1em',
        marginHorizontal: '2em'

    }
});
export default EventForm;