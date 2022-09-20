import React from "react";
import { View, Text, Dimensions } from "react-native";
// import { useSelector } from 'react-redux';
import { BarChart } from "react-native-chart-kit";


export const Graph = (bets, id) => {

  console.log('soy el log en graph:', bets);
  console.log(bets.id);

  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <BarChart
        data={{
          labels: ["Bets", "Gained", "Losed", "Total"],
          datasets: [
        {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
          ]
        }}
        width={Dimensions.get("window").width - 80} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}
