export const linkRegex = () => new RegExp("^https?://")

export const hasHash = str => {
  if (!str) {
    return false
  }

  if (str.indexOf("#") > -1) {
    return true
  } else {
    return false
  }
}

export const hasMailTo = str => {
  if (!str) {
    return false
  }

  if (str.indexOf("mailto:") > -1) {
    return true
  } else {
    return false
  }
}

export const getRandom = (arr, num = 1) => {
  const res = []

  for (let i = 0; i < num; ) {
    const random = Math.floor(Math.random() * arr.length)
    if (res.indexOf(arr[random]) !== -1) {
      continue
    }

    res.push(arr[random])
    i++
  }

  return res
}

export const getRelatedPosts = (arr, currentPostId, num = 3) => {
  if (!arr || !currentPostId || arr.length <= 3) {
    return []
  }

  const excludeCurrent = arr.filter(item => item.node.id !== currentPostId)

  if (!excludeCurrent.length) {
    return []
  }

  return getRandom(excludeCurrent, num)
}

export const maxChar = (str, count = 70) => {
  if (!str) {
    return str
  }

  const end = str.length > count ? "..." : ""

  return `${str.slice(0, count)}${end}`
}
