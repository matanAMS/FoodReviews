import React from 'react'
import { View, Text, Button,Image, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Linking } from 'react-native'
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper/src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from './StarRating';
import MainTabScreen from './MainTabScreen';



const HomeScreen = ({navigation}) => {
    const theme = useTheme()

    return( 
        <ScrollView style={styles.container}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <View style={styles.sliderContainer}>
            <Swiper autoplay horizontal={false} height={200} activeDotColor="#FF6347" >
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/Images/food_banner1.png')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/Images/food_banner2.png')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/Images/Food-baner3.png')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
            </Swiper    >
            </View> 
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn}  onPress={() =>navigation.navigate('ReviewListScreen')} >
                <View style={styles.categoryIcon}>
                    <Ionicons name="ios-restaurant" size={35} color="FF6347"/>    
                </View>
                    <Text style={styles.categoryBtnTxt} >מסעדות</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() =>navigation.navigate ("ReviewListScreen")} >
                <View style={styles.categoryIcon}>
                    <MaterialCommunityIcons name="food-for-drink" size={35} color="FF6347" />
                </View>
                    <Text style={styles.categoryBtnTxt} >מרכז מסעדות</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() =>navigation.navigate ("ReviewListScreen")} >
                <View style={styles.categoryIcon}>
                    <MaterialCommunityIcons name="food" size={35} color="FF6347"/>
                </View>
                    <Text style={styles.categoryBtnTxt} >המבורגריות</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsWrapper} >
                <Text style={{ 
                    alignSelf: 'center', 
                    fontSize: 18, 
                    fontWeight: 'bold',
                    color: '#333'
                     }} >Recently Viewed</Text>
                
                <View style={styles.card} >
                    <TouchableOpacity style={styles.categoryBtn} onPress={() =>{Linking.openURL('https://bobvoyage.net/kamakura/')}}>
                    <View style={styles.cardImgWrapper} >
                        <Image source={require('../assets/Images/kamakura_restaurant.png')} resizeMode="cover" style={styles.cardImg} />
                    </View>
                    </TouchableOpacity>
                    <View style={styles.cardInfo} >
                        <Text style={styles.cardTitle}>kamakura restaurant</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails} >מסעדה יפנית עם ניחוחות מיפן ששווה להגיע</Text>
                    </View>
                </View>
                
                
                <View style={styles.card} >
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => {Linking.openURL('https://butchery.co.il/')}}>
                    <View style={styles.cardImgWrapper} >
                        <Image source={require('../assets/Images/butchery_de_bariloche.png')} resizeMode="cover" style={styles.cardImg} />
                    </View>
                    </TouchableOpacity>
                    <View style={styles.cardInfo} >
                        <Text style={styles.cardTitle}>butchery de bariloche restaurant</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails} >מסעדת הבשרים עם שלל הבשרים הכי טובים בארץ</Text>
                    </View>
                </View>
                
                
                <View style={styles.card} >
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { Linking.openURL('https://burgersaloon.co.il/')}}>
                    <View style={styles.cardImgWrapper} >
                        <Image source={require('../assets/Images/Burger-Saloon.png')} resizeMode="cover" style={styles.cardImg} />
                    </View>
                    </TouchableOpacity>
                    <View style={styles.cardInfo} >
                        <Text style={styles.cardTitle}>Burger Saloon restaurant</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails} >מההמבורגרים הטעימים בארץ שווה להגיע</Text>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    );
};


export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer:{
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    wrapper: {},
    slide:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7',
        borderRadius: 50
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35'
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center'
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    cardImgWrapper: {
        flex: 1
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff'
    },
    cardTitle: {
        fontWeight: 'bold'
    },
    cardDetails: {
        fontSize: 12,
        color: '#444'
    }
});