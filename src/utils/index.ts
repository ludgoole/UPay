export const toMoney = (num = 0, type = 1) => {
  const symbol = type === 1 ? '$' : '₹'
  return `${symbol}${num.toString().replace(/(?<!.*\..*)(\d)(?=(\d{3})+($|\.))/g, '$1,')}`
}

export const capitalize = (str: string) => {
  return str.slice(0, 1).toLocaleUpperCase() + str.slice(1)
}
