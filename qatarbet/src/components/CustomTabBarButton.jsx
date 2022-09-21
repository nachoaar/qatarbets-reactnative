import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


const CustomTabBarButton = (props) => {

  const {children, accessibilityState, onPress} = props;

  let iconName;

  if (children.props.children[0].props.route.name === 'Match') {
    iconName = 'football-outline';
  } else if (children.props.children[0].props.route.name === 'Gambler') {
    iconName = 'people-outline';
  } else if (children.props.children[0].props.route.name === 'Bet') {
    iconName = 'card-outline';  
  }

  if(accessibilityState.selected) {

    return (
      <View style={styles.btnWrapper}>
        <Pressable onPress={onPress} style={styles.activeBtn}>
          <Icon name={iconName} size={35} style={styles.active} />
        </Pressable>
      </View>
    )

  } else {

    return (
      <Pressable onPress={onPress} style={styles.inactiveBtn}>
        <Icon name={iconName} size={30} style={styles.inactive} />
      </Pressable>
    )

  }

}

export default CustomTabBarButton

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white',
  }, 
  activeBtn: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inactiveBtn: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    color: '#D20A46'
  },
  inactive: {
    color: '#7A7A7A'
  },
})