export const STATUS_ENUM = [
  {
    label:'启用',
    value:true
  },
  {
    label:'禁用',
    value:false
  },
]

export const DIFF_ENUM = [
  {
    label:'简单',
    value:1
  },
  {
    label:'中等',
    value:2
  },
  {
    label:'困难',
    value:3
  }
]

export const QUESTION_TYPE_ENUM = [
  {
    label:'单选',
    value:1
  },
  {
    label:'多选',
    value:2
  },
  {
    label:'判断',
    value:3
  },
  {
    label:'填空',
    value:4
  },
  {
    label: '简答',
    value: 5
  },
  {
    label: '编程',
    value: 6
  },
]


export const getDiffLabel = (val) => {
  return DIFF_ENUM.find(item => item.value === val).label
}

export const getQuesTypeLabel = (val) => {
  return QUESTION_TYPE_ENUM.find(item => item.value === val).label
}