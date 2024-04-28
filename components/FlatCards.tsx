import React from "react";
import { View,Text, SafeAreaView, StyleSheet ,} from "react-native";
export default function FlatCards(){

return(
        
    <View>
        <Text style={ styles.headingtext}>
            Flat Cards
        </Text>
                        <View style={styles.container}>
                            <View style={[styles.card , styles.cardOne]}>
                                <Text>
                                    PURPAL
                                </Text>
                            </View>
                            <View style={[styles.card , styles.cardTwo]}>
                                <Text>
                                    BROWN
                                </Text>
                            </View>
                            <View style={[styles.card , styles.cardThree]}>
                                <Text>
                                    BLUE
                                </Text>
                            </View>
                            <View style={[styles.card , styles.cardfour]}>
                                <Text>
                                    Orange
                                </Text>
                            </View>
                           
                            
                        </View>
    
    
    </View>
        
        



)
}
const styles = StyleSheet.create({
headingtext:{
    fontSize : 20,
    fontWeight : 'bold',
    paddingHorizontal : 135,
    paddingVertical : 10,
    color :'blue'
},

container :{ flex : 1, 
            flexDirection : 'row'
},
card :{
    flex : 1
,
        alignItems:'center',
        justifyContent:'center',
        width : 100,
        height : 100,
        borderRadius : 5,
        margin : 8

},

cardOne :{
   
    backgroundColor :'#ba55d3'
},
cardTwo :{
   
    backgroundColor :'#d2691e'
},
cardThree :{
   
    backgroundColor :'#00bfff'
},
cardfour :{
   
    backgroundColor :'orange'
}
})
