import { fetchPostBody, fetchPostQuery } from "@/tools/httpTools"

export const getAllSubjectsHttp = (data) => {
    return fetchPostQuery('/subject/findAllSubjects', data)
}

export const addSubjectHttp = (body) => {
    return fetchPostBody('/subject/addSubject', body)
}

export const deleteSubjectHttp = (query) => {
    return fetchPostQuery('/subject/deleteSubject', query)
}

export const enableSubjectHttp = (query) => {
    return fetchPostQuery('/subject/enableSubject', query)
}

export const findSubjectHttp = (query) => {
    return fetchPostQuery('/subject/findSubject', query)
}

export const forbiddenSubject = (query) => {
    return fetchPostQuery('/subject/forbiddenSubject', query)
}

export const updateSubject = () => {
    return fetchPostBody('/subject/updateSubject', body)
}