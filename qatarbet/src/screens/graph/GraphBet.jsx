import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import getStats from "./logic/userStat";

export const GraphBet = ({bets, userId}) => {

  let data = getStats(bets, userId)

  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', margin: 10, borderTopWidth: 1, borderColor: '#E4E4E4', paddingTop:20}}>Estadísticas</Text>
      <Text style={{textAlign: 'center'}}>Apuestas del usuario</Text>
      <PieChart
        data={data}
        width={Dimensions.get("window").width - 60}
        height={220}
        chartConfig={{
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          overflow: 'hidden',
          backgroundColor: '#550065',
        }}
        accessor={"value"}
        paddingLeft={"15"}
        absolute
      />
    </View>
  )
}
