import { fetchPostQuery } from "@/tools/httpTools"

export const getAllSubjectsHttp = (data) => {
    return fetchPostQuery('/subject/findAllSubjects', data)
}