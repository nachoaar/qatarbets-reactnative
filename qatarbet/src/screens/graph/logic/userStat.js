import graphObject from "./graphObject"


export default function getStats(bets, userId){

    let data = graphObject(bets)

    let sortedData = data.sort((a,b) => Number(a.date) - Number(b.date))
    let user = []
    if(userId){

        let index = sortedData.findIndex((bet) => bet.userId  === userId)

        let gained = 0
        let losed = 0
        let counter = 0
        let total = 0

        for(let i = index ;i < sortedData.length;i++){

            if(sortedData[i]?.userId === userId){
                total += sortedData[i]?.money_bet

                if(sortedData[i]?.final_profit !== 0){
                    gained += sortedData[i]?.final_profit
                }else{
                    losed += sortedData[i]?.money_bet
                }
                counter++
            }
        }

        user.push({
            name:"total", 
            value: total, 
            color: '#FFBF00',
            legendFontColor: '#FFF',
            legendFontSize: 15,
        })
        user.push({
            name: "gained", 
            value: gained,
            color: '#D20A46',
            legendFontColor: '#FFF',
            legendFontSize: 15,
        })
        user.push({
            name: "losed", 
            value: losed,
            color: '#82ca9d',
            legendFontColor: '#FFF',
            legendFontSize: 15,
        })
        user.push({
            name: "bets", 
            value: counter,
            color: '#fff',
            legendFontColor: '#FFF',
            legendFontSize: 15,
        })
    }
    return user
}