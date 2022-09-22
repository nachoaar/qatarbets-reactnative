import React from "react";
import { View, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";


export const GraphMatch = (props) => {

  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', margin: 10, borderTopWidth: 1, borderColor: '#E4E4E4', paddingTop:20}}>Estadísticas</Text>
      <Text style={{textAlign: 'center'}}>Puntos entre equipos</Text>
      <BarChart
        data={{
          labels: [props.home_code, props.away_code],
          datasets: [
        {
            data: [
              props.home_group_points,
              props.away_group_points
            ]
          }
          ]
        }}
        width={Dimensions.get("window").width - 80}
        height={200}
        yAxisSuffix="P"
        chartConfig={{
          backgroundGradientFrom: "#550065",
          backgroundGradientTo: "#6D0082",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 10,
          backgroundColor: 'yellow',
          borderRadius: 15
        }}
      />
    </View>
  )
}
