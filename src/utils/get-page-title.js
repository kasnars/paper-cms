import defaultSettings from '@/settings'

const title = defaultSettings.title || '武汉学院试卷系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
