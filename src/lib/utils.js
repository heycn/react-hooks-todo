const autoAddZero = value => value < 10 ? '0' + value : value

const formatDateTime = timeStamp => {
  const _date = new Date(timeStamp)
  const year = _date.getFullYear(),
        month = _date.getMonth() + 1,
        date = _date.getDate(),
        hours = autoAddZero(_date.getHours()),
        minutes = autoAddZero(_date.getMinutes()),
        seconds = autoAddZero(_date.getSeconds())

  return `${year}年${month}月${date}日 ${hours}:${minutes}:${seconds}`
}

export { formatDateTime }