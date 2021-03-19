
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

const ProductNavigatorStack = createStackNavigator();

function ProductNavigator() {
    return (
        <NavigationContainer>
            <ProductNavigatorStack.Navigator
                options={{
                    headerStyles: {
                        backgraoundColor: Platform.OS === 'android' ? Colors.primary : "",
                        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                    }
                }}  
            >
                <ProductNavigatorStack.Screen name={'ProductOverview'} component={ProductOverviewScreen}/>
                <ProductNavigatorStack.Screen name={'ProductDetail'} component={ProductDetailScreen}/>
            </ProductNavigatorStack.Navigator>
        </NavigationContainer>
    )
}

// function RootNavigator() {
//     return (
//         <NavigationContainer>

//         </NavigationContainer>
//     )
// }

export default ProductNavigator;