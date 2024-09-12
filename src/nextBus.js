export function useGetNextBus(timeTable, hours, minutes) {
  let departutreInfo = timeTable[0]
  let minError = Infinity
  let [hoursNow, minutesNow] = [hours.value, minutes.value]

  for (let row of timeTable) {
    let timeError
    let [hoursArrived, minutesArrived] = row.departure_time.split(":").map(Number)
    if (hoursNow > 2 && hoursArrived >= 0 && hoursArrived <= 2) hoursArrived += 24
    timeError = (hoursArrived * 60 + minutesArrived) - (hoursNow * 60 + minutesNow)
    if (timeError > 0 && timeError < minError) {
      minError = timeError
      departutreInfo = row
    } 
  }
  return departutreInfo
}
