import { View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
 export default function ElevatedCards  () {
    return(
            <View>
                    <Text style={styles.headingtext}>
                        ElevatedCards
                    </Text>
                                <ScrollView horizontal={true}  style= {styles.container}> 
                                    
                                    <View style={[styles.cards , styles.ElevatedCard]}>
                                        <Text>
                                                Tap
                                        </Text>
                                    </View>
                                    <View style={[styles.cards , styles.ElevatedCardone]}>
                                        <Text>
                                                me
                                        </Text>
                                    </View>
                                    <View style={[styles.cards , styles.ElevatedCardtwo]}>
                                        <Text>
                                                to
                                        </Text>
                                    </View>
                                    <View style={[styles.cards , styles.ElevatedCardthree]}>
                                        <Text>
                                                The
                                        </Text>
                                    </View>
                                    <View style={[styles.cards , styles.ElevatedCardfour]}>
                                        <Text>
                                                scroll
                                        </Text>
                                    </View>
                                    <View style={[styles.cards , styles.ElevatedCardfive]}>
                                        <Text>
                                                Awsii 
                                        </Text>
                                    </View>
                                    <View style={[styles.cards , styles.ElevatedCardsix]}>
                                        <Text>
                                                 Rajpoot
                                        </Text>
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
            height : 100,
            borderRadius : 5,
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
       
        backgroundColor :'pink',
        elevation:5,
    },
    ElevatedCardfive :{
        elevation:5,
        backgroundColor:'green'
       
    },
    ElevatedCardsix :{
       
        backgroundColor :'orange',
        elevation:5,
    },
    })