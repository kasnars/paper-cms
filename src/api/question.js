import { fetchPostQuery } from "@/tools/httpTools"

export const getAllQuestionHttp = (data) => {
    return fetchPostQuery('/question/findAllQuestion', data)
}