import { fetchPostBody, fetchPostQuery } from "@/tools/httpTools"

export const checkWrongQuestionHttp = (query) => {
    return fetchPostQuery('/paper/checkWrongQuestion', query)
}

export const createPaperHttp = (body) => {
    return fetchPostBody('/paper/createPaper', body)
}

export const revisePaperHttp = (query) => {
    return fetchPostQuery('/paper/revisePaper', query)
}

export const writeAnswerHttp = (body) => {
    return fetchPostBody('/paper/writeAnswer', body)
}

export const findWrongQuestionByIdHttp = (query) => {
    return fetchPostQuery('/paper/findWrongQuestionById',query)
}