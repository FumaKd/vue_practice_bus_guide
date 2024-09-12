import { ref, watch, computed } from "vue" // Vueの機能をインポート
import { useGetNextBus } from "./nextBus" // バスの次の発車時刻を取得する関数をインポート

/**
 * Retrieves and manages the timetable list for bus stops.
 * @param {Ref} typeOfTable - The type of timetable (e.g., wkd, std, snd).
 * @param {Object} busInfo - Information about bus stops and timetables.
 * @param {Ref} hours - The current hour.
 * @param {Ref} minutes - The current minute.
 * @returns {Object} An object containing the stop information.
 */
export function useGetTimeTableList(typeOfTable, busInfo, hours, minutes) {
  // Initialize stop information with loading placeholders
  const stopInfo = ref(
    busInfo["バス停情報"].map((row) => {
        row.nextTime = "Now loading..." // 次の発車時刻を初期化
        row.nextRoute = "Now loading..." // 次のルートを初期化
        row.nextRouteTableId = NaN // 次のルートテーブルIDを初期化
        return row
    })
  )
  const tableInfo = busInfo["時刻表情報"] // 時刻表情報を取得
  let stopAndTableMap = makeStopAndTableMap(stopInfo, tableInfo) // バス停と時刻表のマッピングを作成

  // Compute the timetable list based on the stop and table map
  let timeTableList = computed(() => {
    return makeTimeTableList(stopAndTableMap, typeOfTable, busInfo) // 時刻表リストを作成
  })

  // Update stop information initially
  updateStopInfo(stopInfo, timeTableList, tableInfo, hours, minutes) // バス停情報を更新

  // Watch for changes in typeOfTable and seconds to update stop information
  watch([typeOfTable, minutes], () => {
    updateStopInfo(stopInfo, timeTableList, tableInfo, hours, minutes) // 秒ごとにバス停情報を更新
  })
  return {stopInfo: stopInfo} // バス停情報を返す
}

/**
 * Creates a map of bus stops and their corresponding timetable IDs.
 * @param {Ref} stopInfo - The stop information.
 * @param {Array} tableInfo - The timetable information.
 * @returns {Array} A map of stops and their timetable IDs.
 */
function makeStopAndTableMap(stopInfo, tableInfo) {
  let stopAndTableMap = []
  for (let stop of stopInfo.value) {
    stopAndTableMap.push({stop_id: stop.bus_stop_id, table_id: []}) // バス停IDと空のテーブルIDリストを追加
  }
  for (let table of tableInfo) {
    stopAndTableMap.forEach((item) => {
      if (item.stop_id === table.bus_stop_id) {
        item.table_id.push(table.time_table_id) // バス停IDに対応するテーブルIDを追加
      }
    })
  }
  return stopAndTableMap // バス停と時刻表のマッピングを返す
}

/**
 * Creates a list of timetables for each bus stop.
 * @param {Array} stopAndTableMap - The map of stops and their timetable IDs.
 * @param {Ref} typeOfTable - The type of timetable (e.g., weekday, weekend).
 * @param {Object} busInfo - Information about bus stops and timetables.
 * @returns {Array} A list of timetables for each bus stop.
 */
function makeTimeTableList(stopAndTableMap, typeOfTable, busInfo) {
  let timeTableList = []
  for (let stop of stopAndTableMap) {
    timeTableList.push(
      {
        stop_id: stop.stop_id,
        time_table: busInfo["発車時刻情報"]
                      .filter((row) => row.weekday === typeOfTable.value) // 曜日に基づいてフィルタリング
                      .filter((row) => stop.table_id.includes(row.time_table_id)) // テーブルIDに基づいてフィルタリング
      }
    )
  }
  return timeTableList // 時刻表リストを返す
}

/**
 * Updates the stop information with the next bus departure time and route.
 * @param {Ref} stopInfo - The stop information.
 * @param {Ref} timeTableList - The list of timetables for each bus stop.
 * @param {Array} tableInfo - The timetable information.
 * @param {Ref} hours - The current hour.
 * @param {Ref} minutes - The current minute.
 */
function updateStopInfo(stopInfo, timeTableList, tableInfo, hours, minutes) {
  for (let timeTable of timeTableList.value) {
    stopInfo.value.forEach((item) => {
      if (item.bus_stop_id === timeTable.stop_id) {
        let itemInfo = useGetNextBus(timeTable.time_table, hours, minutes) // 次のバス情報を取得
        let routeInfo = tableInfo.find((row) => row.time_table_id == itemInfo.time_table_id) // ルート情報を取得
        item.nextTime = itemInfo.departure_time // 次の発車時刻を設定
        item.nextRoute = `${ routeInfo.route_name }系統${ routeInfo.destination }` // 次のルートを設定
        item.nextRouteTableId = itemInfo.time_table_id // 次のルートテーブルIDを設定
      }
    })
  }
}
