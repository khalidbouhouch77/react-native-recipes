import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import tw from "twrnc"

export default function WelcomeScreen() {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 2000)
    }, [])

    return (
    <View style={tw`flex-1 justify-center items-center space-y-10 bg-green-500`}>
        <StatusBar style='light' />
        <View style={tw`bg-white/20 rounded-full p-10`} >
            <View style={tw`bg-white/20 rounded-full p-8`} >
                <Image source={require('./../assets/adaptive-icon.png')} 
                    style={{width:200, height:200}} />
            </View>
        </View>

        <View style={tw`flex items-center space-y-2`} >
            <Text style={tw`text-6xl font-bold text-white tracking-widest`}>
                وصفات رمضان
            </Text>
            <Text style={tw`text-lg font-medium text-white tracking-widest`}>
                رمضان يجمعنا
            </Text>
        </View>

      </View>
    );
  }