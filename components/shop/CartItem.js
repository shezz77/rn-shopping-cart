import React from 'react';
import { Text, StyleSheet, View, TouchableNativeFeedback, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = ({item, onDeleteItem}) => {
    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.qty}>{item.quantity}</Text>
                <Text style={styles.title}>{item.productTitle}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.title}>${item.sum.toFixed(2)}</Text>
                <TouchableNativeFeedback onPress={onDeleteItem} style={styles.deleteButton}>
                    <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} size={23} color="red"/>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qty: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },

    deleteButton: {
        marginLeft: 20
    }
});

export default CartItem;