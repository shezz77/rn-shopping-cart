import React from "react";
import { useEffect } from "react";
import { FlatList, StyleSheet, Platform, Button } from "react-native";
import productsData from "../../data/dummy-data";
import { setAvailableProducts, setUserProducts } from "./store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import { addToCart } from "./store/CartSlice";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";

const ProductOverviewScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.availableProducts);

  useEffect(() => {
    fetchProducts();
    setNavigationOptions();
  }, []);

  const onViewDetail = (item) => {
    navigation.navigate("ProductDetail", { productId: item.id });
  };

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
            onPress={() => navigation.navigate("Cart")}
          ></Item>
        </HeaderButtons>
      ),
    });
  };

  const fetchProducts = () => {
    dispatch(setAvailableProducts(productsData));
    dispatch(setUserProducts(productsData.filter((p) => p.ownerId === "u1")));
  };

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductItem product={item} onSelect={() => onViewDetail(item)}>
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() => onViewDetail(item)}
          />
          <Button
            color={Colors.accent}
            title="To Cart"
            onPress={() => dispatch(addToCart(item))}
          />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductOverviewScreen;
