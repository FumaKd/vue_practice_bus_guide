import { ref } from "vue"

export function useTimeDataUpdate() {
    const hours = ref()
    const minutes = ref()
    const seconds = ref()
    const years = ref()
    const month = ref()
    const date = ref()
    const day = ref()
    const timeData = ref()

    update(timeData)

    return {
        hours: hours, 
        minutes: minutes,
        seconds: seconds,
        years: years,
        month: month,
        date: date,
        day: day,
        timeData: timeData
    }
    
    function update () {
        let now = new Date()
        hours.value = now.getHours()
        minutes.value = now.getMinutes()
        seconds.value = now.getSeconds()
        years.value = now.getFullYear()
        month.value = now.getMonth() + 1
        date.value = now.getDate()
        day.value = now.getDay()
        timeData.value = now
        requestAnimationFrame(update)
    }
}
