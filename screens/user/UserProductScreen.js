import React, { useEffect } from "react";
import { FlatList, Platform, StyleSheet, Button, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./../../components/shop/ProductItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
import { removeItemFromCart } from "../shop/store/CartSlice";
import { deleteProduct } from "../shop/store/ProductSlice";

const UserProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userProducts } = useSelector((state) => state.products);

  useEffect(() => {
    setNavigationOptions();
  }, []);

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
            title="Edit Product"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => navigation.navigate('Edit Product')}
          ></Item>
        </HeaderButtons>
      ),
    });
  };


  const deleteConfirmation = (item) => {
    Alert.alert('Are you sure', 'Do you realy want to delete this product', [
      {text: 'No', style: 'default'},
      {text: 'Yes', style: 'destructive', onPress: () => deleteHandler(item)}
    ])
  }

  const deleteHandler = (item) => {
    dispatch(deleteProduct(item.id));
    dispatch(removeItemFromCart(item.id));
  }

  return (
    <FlatList
      data={userProducts}
      renderItem={({ item }) => (
        <ProductItem
          product={item}
          onSelect={() => {}}
        >
          <Button color={Colors.primary} title="Edit" onPress={() => navigation.navigate('Edit Product', {id: item.id})} />
          <Button color={Colors.accent} title="Delete" onPress={() => deleteConfirmation(item)} />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default UserProductScreen;


