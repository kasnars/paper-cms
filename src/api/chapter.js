import { fetchPostBody, fetchPostQuery } from "@/tools/httpTools"

export const findChapterHttp = (query) => {
    return fetchPostQuery('/chapter/findChapter', query)
}

export const addChapterHttp = (body) => {
    return fetchPostBody('/chapter/addChapter', body)
}

export const deleteChapterHttp = (query) => {
    return fetchPostQuery('/chapter/deleteChapter', query)
}

export const updateChapterHttp = (body) => {
    return fetchPostBody('/chapter/updateChapter', body)
}
