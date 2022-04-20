import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EventCard({ eventItem }) {
    return (
        <View style={styles.eventCard}>
            <Text style={styles.title}>{eventItem.title} - {eventItem.date}</Text>
            <Text style={styles.description}>{eventItem.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        border: '2px solid gray ',
        borderColor: '#FAE407',
        margin: '0.2rem',
        padding: '1.1rem',
        backgroundColor: '#a8a8a8',
        width: '100%'
    },
    title: { //имената на евентите
        fontSize: '1rem',
        color: '#010000'
    }
})