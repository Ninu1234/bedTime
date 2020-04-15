import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import WriteScreen from './screens/writescreen'
import ReadScreen from './screens/readscreen'


var tabNavigator = createBottomTabNavigator({
  WriteStory:{ screen:WriteScreen},
  ReadStory:{ screen:ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/reading.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/writing.jpg")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
})

export default createAppContainer(tabNavigator)


