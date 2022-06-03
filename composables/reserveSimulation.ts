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

  for (let i = 0; i < accumulationPeriod; i++) {
    // 元本合計
    // １年目は元本、以降は"元本 * 積立期間"に"前年の収益"を加算
    const totalPrincipal =
      principal * (i + 1) + (i === 0 ? 0 : profitData[i - 1])
    principalData.push(totalPrincipal)

    // 収益
    // "元本合計"と"利回り（年率）"の乗算
    // 小数点は切り捨て
    const profit = totalPrincipal * (annualYield / 100)
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
    // １年目は元本、以降は"元本 * 積立期間"に"前年の収益"を加算
    const totalPrincipal =
      principal * (accumulationPeriod + 1) +
      (accumulationPeriod === 0 ? 0 : profitData[accumulationPeriod - 1])
    principalData.push(totalPrincipal)

    // 収益
    // "元本合計"と"利回り（年率）"の乗算
    // 小数点は切り捨て
    const profit = totalPrincipal * (annualYield / 100)
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
// 減債基金係数を使用
// ※減債基金係数を使用した関係上、複利の計算は年始に行う想定
export const calculateMonthlyReserveAmount = (
  // 目標金額
  targetAmount: number,
  // 積立期間
  accumulationPeriod: number,
  // 利回り（年率）
  annualYield: number
) => {
  // 減債基金係数
  const sinkingFundFactor =
    Math.round(
      (annualYield /
        100 /
        ((1 + annualYield / 100) ** accumulationPeriod - 1)) *
        100000000000
    ) / 100000000000

  // 毎年積立金額
  // 目標額 * 減債基金係数
  const yearlyReserveAmount = targetAmount * sinkingFundFactor
  // 毎月積立金額
  const monthlyReserveAmount = yearlyReserveAmount / 12

  // 元本
  const principal = yearlyReserveAmount
  // 年ごとの元本
  const principalData: number[] = []
  // 年ごとの収益
  const profitData: number[] = []

  for (let i = 0; i < accumulationPeriod; i++) {
    // 元本合計
    // １年目は元本、以降は"元本"に"前年の元本 + 前年の収益"を加算
    const totalPrincipal =
      principal + (i === 0 ? 0 : principalData[i - 1] + profitData[i - 1])
    principalData.push(totalPrincipal)
    // 収益
    // １年目は0、以降は"(前年の元本合計 + 前年の収益)  * 利回り（年率）"
    // 小数点は切り捨て
    const profit =
      i === 0
        ? 0
        : (principalData[i - 1] + profitData[i - 1]) * (annualYield / 100)
    profitData.push(profit)
  }
  const result = Math.ceil(monthlyReserveAmount * 10000)

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
