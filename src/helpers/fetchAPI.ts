import absoluteUrl from "./absoluteUrl"

export default async function fetchAPI<Type>(url: string, body: string, method?: "GET" | "POST" | "PUT" | "DELETE") {
    try {
        const response = await fetch(absoluteUrl(`/api/${url}`), {
            method: method || "GET",
            body,
        })
        const data = await response.json()
        return data as { status: number, data: Type, message: string }
    } catch (error: any) {
        return { status: 500, data: null, message: error?.message } as { status: number, data: Type, message: string }
    }
}