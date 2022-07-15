
/**
 * @description: 判断数据类型
 * @param {any} data
 * @return {String} 数据类型
 */
const DataType = (data) => {
  let str = Object.prototype.toString.call(data)
  str = str.replaceAll('[', '').replaceAll(']', '')
  str = str.split(' ')[1].toLowerCase()
  return str
}

/**
 * @description: 深克隆
 * @param {any} original: 原始数据
 * @param {*} hashMap: 哈希map
 * @return {any} 深克隆后的数据
 */
const CloneDeep = (original, hashMap = new WeakMap()) => {
  const type = DataType(original)

  if (!['object', 'array'].includes(type)) {
    return original
  }

  let res = (type === 'object') ? {} : []
  
  if (hashMap.has(original)) {
    return hashMap.get(original)
  }

  hashMap.set(original, res)

  for (let k in original) {
    if (Object.hasOwn(original, k)) {
      res[k] = CloneDeep(original[k], hashMap)
    }
  }

  return res
}


export default CloneDeep