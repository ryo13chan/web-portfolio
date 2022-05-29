// 最終積立金額を計算
export const calculateFinalReserveAmount = (
  // 毎月積立金額
  monthlyReserveAmount: number,
  // 積立期間
  accumulationPeriod: number,
  // 利回り（年率）
  annualYield: number
) => {
  // 元本
  // 毎月積立金額 * 12ヶ月
  const principal = monthlyReserveAmount * 12
  // 年ごとの元本
  const principalData: number[] = []
  // 年ごとの収益
  const profitData: number[] = []

  for (let i = 0; i <= accumulationPeriod; i++) {
    // 元本合計
    // １年目は元本、以降は前年の元本に元本を加算
    const totalPrincipal =
      i === 0 ? principal : principalData[i - 1] + principal
    principalData.push(totalPrincipal)

    // 収益
    // １年目は"元本合計"と"利回り（年率）"の乗算、以降は”元本合計＋前年の収益”と"利回り（年率）"の乗算
    // 小数点は切り捨て
    const profit =
      i === 0
        ? totalPrincipal * (annualYield / 100)
        : (totalPrincipal + profitData[i - 1]) * (annualYield / 100)
    profitData.push(Math.floor(profit))
  }

  // 最終積立金額
  // 最終年の"元本"と”収益”の合計
  const result =
    principalData[accumulationPeriod - 1] + profitData[accumulationPeriod - 1]

  // グラフで使用するデータ
  const chartData = {
    labels: [...Array(accumulationPeriod)].map((_, i) => `${i + 1}年目`),
    datasets: [
      {
        label: '元本',
        backgroundColor: '#42A5F5',
        data: principalData,
      },
      {
        label: '収益',
        backgroundColor: '#66BB6A',
        data: profitData,
      },
    ],
  }
  return { result, chartData }
}

// 積立期間を計算
export const calculateAccumulationPeriod = (
  // 目標金額
  targetAmount: number,
  // 毎月積立金額
  monthlyReserveAmount: number,
  // 利回り（年率）
  annualYield: number
) => {
  // 元本
  // 毎月積立金額 * 12ヶ月
  const principal = monthlyReserveAmount * 12
  // 年ごとの元本
  const principalData: number[] = []
  // 年ごとの収益
  const profitData: number[] = []

  // 積立期間
  let accumulationPeriod = 0
  // 最終年の元本＋収益が最終積立金額に達するまでループ
  while (
    targetAmount >
    (principalData.length
      ? principalData[principalData.length - 1] +
        profitData[profitData.length - 1]
      : 0)
  ) {
    // 元本合計
    // １年目は元本、以降は前年の元本に元本を加算
    const totalPrincipal =
      accumulationPeriod === 0
        ? principal
        : principalData[accumulationPeriod - 1] + principal
    principalData.push(totalPrincipal)

    // 収益
    // １年目は"元本合計"と"利回り（年率）"の乗算、以降は”元本合計＋前年の収益”と"利回り（年率）"の乗算
    // 小数点は切り捨て
    const profit =
      accumulationPeriod === 0
        ? totalPrincipal * (annualYield / 100)
        : (totalPrincipal + profitData[accumulationPeriod - 1]) *
          (annualYield / 100)
    profitData.push(Math.floor(profit))

    accumulationPeriod++
  }
  const result = accumulationPeriod

  // グラフで使用するデータ
  const chartData = {
    labels: [...Array(accumulationPeriod)].map((_, i) => `${i + 1}年目`),
    datasets: [
      {
        label: '元本',
        backgroundColor: '#42A5F5',
        data: principalData,
      },
      {
        label: '収益',
        backgroundColor: '#66BB6A',
        data: profitData,
      },
    ],
  }
  return { result, chartData }
}

// 毎月積立金額を計算
export const calculateMonthlyReserveAmount = (
  // 目標金額
  targetAmount: number,
  // 積立期間
  accumulationPeriod: number,
  // 利回り（年率）
  annualYield: number
) => {
  // // 元本
  // // 毎月積立金額 * 12ヶ月
  // const principal = monthlyReserveAmount * 12
  // // 年ごとの元本
  // const principalData: number[] = []
  // // 年ごとの収益
  // const profitData: number[] = []

  // for (let i = 0; i <= accumulationPeriod; i++) {
  //   // 元本合計
  //   // １年目は元本、以降は前年の元本に元本を加算
  //   const totalPrincipal =
  //     i === 0 ? principal : principalData[i - 1] + principal
  //   principalData.push(totalPrincipal)

  //   // 収益
  //   // １年目は"元本合計"と"利回り（年率）"の乗算、以降は”元本合計＋前年の収益”と"利回り（年率）"の乗算
  //   // 小数点は切り捨て
  //   const profit =
  //     i === 0
  //       ? totalPrincipal * (annualYield / 100)
  //       : (totalPrincipal + profitData[i - 1]) * (annualYield / 100)
  //   profitData.push(Math.floor(profit))
  // }

  // // 最終積立金額
  // // 最終年の"元本"と”収益”の合計
  // const result =
  //   principalData[accumulationPeriod - 1] + profitData[accumulationPeriod - 1]

  // // グラフで使用するデータ
  // const chartData = {
  //   labels: [...Array(accumulationPeriod)].map((_, i) => `${i + 1}年目`),
  //   datasets: [
  //     {
  //       label: '元本',
  //       backgroundColor: '#42A5F5',
  //       data: principalData,
  //     },
  //     {
  //       label: '収益',
  //       backgroundColor: '#66BB6A',
  //       data: profitData,
  //     },
  //   ],
  // }
  const result = 100
  const chartData = {
    labels: [...Array(5)].map((_, i) => `${i + 1}年目`),
    datasets: [
      {
        label: '元本',
        backgroundColor: '#42A5F5',
        data: [100, 200, 300, 400, 500],
      },
      {
        label: '収益',
        backgroundColor: '#66BB6A',
        data: [10, 20, 30, 40, 50],
      },
    ],
  }
  return { result, chartData }
}
