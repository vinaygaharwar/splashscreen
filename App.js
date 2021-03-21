
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  Dimensions
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
    this.animatedValue4 = new Animated.Value(0);
    this.animatedValue5 = new Animated.Value(0);
    this.animatedValue6 = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 2500
    }).start();

    Animated.spring(this.animatedValue3, {
      toValue: 1,
      friction: 4,
      delay: 3000
    }).start();

    Animated.spring(this.animatedValue4, {
      toValue: 1,
      friction: 4,
      delay: 3500
    }).start();

    Animated.spring(this.animatedValue5, {
      toValue: 1,
      friction: 4,
      delay: 4000
    }).start();

    Animated.spring(this.animatedValue6, {
      toValue: 1,
      friction: 4,
      delay: 4500
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 3000
    }).start();
  }

  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };
    const anim3 = {
      transform: [{ scale: this.animatedValue3 }]
    };
    const anim4 = {
      transform: [{ scale: this.animatedValue4 }]
    };
    const anim5 = {
      transform: [{ scale: this.animatedValue5 }]
    };
    const anim6 = {
      transform: [{ scale: this.animatedValue6 }]
    };

    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };

    return (
      <View style={{}}>
      <LinearGradient
        colors={[
          ['rgba(0,0,0,0.8)', 'transparent']
          
        ]}
        style={styles.container}
      >
        
        <Animated.View style={[styles.ring, truckStyle]}>
          <Animated.Image
            source={require("./or.png")}
            style={[
              {
                
                width: 200,
                height: 200,
                marginTop:80,
              }
            ]}
          />
        </Animated.View>

        <Animated.View style={[styles.ring, anim3]}>
          <Animated.Image
            source={require("./bl.png")}
            style={[
              {
                marginTop:-150,
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>

        <Animated.View style={[styles.ring, anim4]}>
          <Animated.Image
            source={require("./rd.png")}
            style={[
              {
                resizeMode: "contain",
                marginTop:60,
               
                marginLeft:-150,
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>

        <Animated.View style={[styles.ring, anim5]}>
          <Animated.Image
            source={require("./pu.png")}
            style={[
              {
                resizeMode: "contain",
                marginTop:-120,
                marginLeft:-120,
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>

        <Animated.View style={[styles.ring, anim6]}>
          <Animated.Image
            source={require("./pl.png")}
            style={[
              {
                resizeMode: "contain",
                marginTop:80,
                marginLeft:-250,
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>

        
        
      </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent:"center",
    marginTop:100,
    height: 500,
    flexWrap:"wrap",
    justifyContent: "center",alignItems: "center"
    
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  ring: {
   
    
    
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  }
});
