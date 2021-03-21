import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import OrderItem from '../../components/shop/OrderItem';

const OrderScreen = ({navigation}) => {

    useEffect(() => {
        setNavigationOptions()
    }, [])

    const setNavigationOptions = () => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title="Menu"
                    iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                    onPress={() => navigation.toggleDrawer()}
                  ></Item>
                </HeaderButtons>
              ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => navigation.navigate('Cart')}
              ></Item>
            </HeaderButtons>
          ),
        });
      };

    const orders = useSelector(state => state.order.orders);

    return (
        <FlatList data={orders} renderItem={({item}) => <OrderItem item={item}/>}/>
    )
}

const styles = StyleSheet.create({

});

export default OrderScreen;