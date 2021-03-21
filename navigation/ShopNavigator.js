import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import UserProductScreen from "../screens/user/UserProductScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

const DETAULT_STACK_SCREEN_OPTIONS = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
};

const ProductNavigatorStack = createStackNavigator();
const OrderNavigatorStack = createStackNavigator();
const AdminNavigatorStack = createStackNavigator();

function ProductNavigator() {
  return (
    <ProductNavigatorStack.Navigator
      screenOptions={DETAULT_STACK_SCREEN_OPTIONS}
    >
      <ProductNavigatorStack.Screen
        name={"ProductOverview"}
        component={ProductOverviewScreen}
      />
      <ProductNavigatorStack.Screen
        name={"ProductDetail"}
        component={ProductDetailScreen}
      />
      <ProductNavigatorStack.Screen name={"Cart"} component={CartScreen} />
    </ProductNavigatorStack.Navigator>
  );
}

function OrderNavigator() {
  return (
    <OrderNavigatorStack.Navigator screenOptions={DETAULT_STACK_SCREEN_OPTIONS}>
      <OrderNavigatorStack.Screen name={"Orders"} component={OrderScreen} />
    </OrderNavigatorStack.Navigator>
  );
}

function AdminNavigator() {
  return (
    <AdminNavigatorStack.Navigator screenOptions={DETAULT_STACK_SCREEN_OPTIONS}>
      <AdminNavigatorStack.Screen name={"User Products"} component={UserProductScreen} />
      <AdminNavigatorStack.Screen name={"Edit Product"} component={EditProductScreen} />
    </AdminNavigatorStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"product"}
        drawerContentOptions={{
          activeTintColor: Colors.primary,
        }}
      >
        <Drawer.Screen
          options={{
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={23}
                color={drawerConfig.tintColor}
              />
            ),
          }}
          name="Product"
          component={ProductNavigator}
        />
        <Drawer.Screen
          options={{
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={23}
                color={drawerConfig.tintColor}
              />
            ),
          }}
          name="Order"
          component={OrderNavigator}
        />
         <Drawer.Screen
          options={{
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-create" : "ios-create"}
                size={23}
                color={drawerConfig.tintColor}
              />
            ),
          }}
          name="Admin"
          component={AdminNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
