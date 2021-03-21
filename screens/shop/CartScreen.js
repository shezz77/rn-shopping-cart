import React from "react";
import { View, Button, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import {deleteItemFromCart} from './store/CartSlice'
import { addOrder } from "./store/OrderSlice";
import { resetCart } from "./store/CartSlice";

const CartScreen = (props) => {
    const dispatch = useDispatch()
  const { totalAmount } = useSelector((state) => state.cart);
  const items = useSelector((state) =>
    Object.keys(state.cart.items).map((key) => ({
      ...state.cart.items[key],
      id: key,
    }))
  );

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          disabled={items.length === 0}
          color={Colors.accent}
          title="Order Now"
          onPress={() => {
              dispatch(addOrder({items, totalAmount}));
              dispatch(resetCart());
            }}
        />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <CartItem item={item} onDeleteItem={() => dispatch(deleteItemFromCart({itemId: item.id}))} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.accent,
  },
});

export default CartScreen;
