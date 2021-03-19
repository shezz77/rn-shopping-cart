import React from 'react';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import productsData from '../../data/dummy-data';
import { setAvailableProducts, setUserProducts } from './store/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = props => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.availableProducts);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        dispatch(setAvailableProducts(productsData))
        dispatch(setUserProducts(productsData.filter(p => p.ownerId === 'u1')));
    }

    return <FlatList data={products} renderItem={({item}) => (
        <ProductItem 
            product={item}
            onViewDetail={() => props.navigation.navigate('ProductDetail', {productId: item.id})}
            onAddToCart={() => {}}
        />
    )}/>
}

const styles = StyleSheet.create({

});

export default ProductOverviewScreen;