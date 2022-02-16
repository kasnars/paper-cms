import { fetchPostAll, fetchPostBody, fetchPostQuery } from "@/tools/httpTools"

export const getAllQuestionHttp = (data) => {
    return fetchPostQuery('/question/findAllQuestion', data)
}

export const addQuestionHttp = (body) => {
    return fetchPostBody('/question/addQuestion', body)
}

export const deleteQuestionHttp = (query) => {
    return fetchPostQuery('/question/deleteQuestion', query)
}

export const disableQuestionHttp = (query) => {
    return fetchPostQuery('/question/disableQuestion', query)
}

export const enableQuestionHttp = (query) => {
    return fetchPostQuery('/question/enableQuestion', query)
}

export const updateQuestionHttp = (body) => {
    return fetchPostBody('/question/updateQuestion', body)
}

export const findQuestionByQuestionCodeHttp = (query) => {
    return fetchPostQuery('/question/findQuestionByQuestionCode', query)
}

export const findQuestionHttp = (query) => {
    return fetchPostQuery('/question/findQuestion', query)
}