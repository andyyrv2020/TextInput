import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Button } from 'react-native';
import EventCard from './EventCard';

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./data.json').events;
        this.setState({ events })
    }

    render() {
        return (
            <View>
                <View style={{ flex: 16, width: 800, alignSelf: 'center' }}>

                    <FlatList
                        data={this.state.events}
                        renderItem={({ item }) => <EventCard eventItem={item} />}>
                    </FlatList>

                </View>

                <View style={{ flex: 1, width: 800, alignSelf: 'center', margin: 15 }}>

                    <Button onPress={() => this.props.navigation.navigate('EventForm')}
                        title='Add Event'
                        color='#a8a8a8'
                    />
                </View>
            </View>
        )
    }
}

export default EventList;