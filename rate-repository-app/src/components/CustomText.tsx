import { Text } from "react-native"
import { theme } from "../../theme"
import React, { ReactNode } from 'react'
import { useFonts } from 'expo-font';


export default ({customParams,children}:{customParams: Record<string,Object | number | string>,children: ReactNode}) => {
    const [fontsLoaded] = useFonts({
        'Roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
        'Arial': require('../../assets/fonts/ARIAL.ttf'),
        'Lugrasimo-Regular':require('../../assets/fonts/Lugrasimo-Regular.ttf')
      });


    if(!fontsLoaded) return null

    return(
        <Text style={{fontFamily:'Roboto',...customParams}}>{children}</Text>
    )
}