import { fetchPostBody, fetchPostQuery } from "@/tools/httpTools"

// Knowledge
export const findKnowledgeByCnameHttp = (query) => {
    return fetchPostQuery('/knowledge/findChapterByCname', query)
}

export const findKnowledgeBySnameHttp = (query) => {
    return fetchPostQuery('/knowledge/findChapterBySname', query)
}


export const addKnowledgeHttp = (body) => {
    return fetchPostBody('/knowledge/addKnowledge', body)
}

export const deleteKnowledgeHttp = (query) => {
    return fetchPostQuery('/knowledge/deleteKnowledge', query)
}

export const updateKnowledgeHttp = (body) => {
    return fetchPostBody('/knowledge/updateKnowledge', body)
}
