import React from "react";
import { View,Text, SafeAreaView, StyleSheet, ScrollView ,} from "react-native";

export default function FancyCardsTwo(){

return(



    <View>
    <Text style={styles.headingtext}>
        Trending  Places 
    </Text>
                <ScrollView horizontal={true}  style= {styles.container}> 
                    
                    <View style={[styles.cards , styles.ElevatedCard]}>
                       
                    </View>
                    <View style={[styles.cards , styles.ElevatedCardone]}>
                        
                    </View>
                    <View style={[styles.cards , styles.ElevatedCardtwo]}>
                      
                    </View>
                    <View style={[styles.cards , styles.ElevatedCardthree]}>
                        
                    </View>
                    <View style={[styles.cards , styles.ElevatedCardfour]}>
                      
                      </View>
                      <View style={[styles.cards , styles.ElevatedCardfive]}>
                          
                      </View>
                   
                    
                </ScrollView>

</View>


    )




}


const styles = StyleSheet.create({
    headingtext:{
        fontSize : 20,
        fontWeight : 'bold',
        paddingHorizontal : 120,
        color:'red'
        
    }, 
    container :{ 
        padding :8
},
    cards :{
        flex : 1
    ,
            alignItems:'center',
            justifyContent:'center',
            width : 100,
            height : 250,
            borderRadius : 500,
            margin : 8,
           
    
    },
    
     ElevatedCard :{ 
        backgroundColor :'#ba55d3',
        elevation : 5,
      
        
    },
    
    ElevatedCardone :{
       
        backgroundColor :'orange',
        elevation:5,
       
    }, 
    
    ElevatedCardtwo :{
        elevation:5,
        backgroundColor :'yellow',
    },
    ElevatedCardthree :{
       
        backgroundColor :'blue',
        elevation:5,
    },

    ElevatedCardfour :{
       
        backgroundColor :'grey',
        elevation:5,
    },

        ElevatedCardfive :{
       
        backgroundColor :'red',
        elevation:5,
    }
       })