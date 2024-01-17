export default async function fetchAPI<Type>(url: string) {
    try {
        const response = await fetch(`/api/${url}`)
        const data = await response.json()
        return { status: 200, data } as { status: number, data: Type }
    } catch (error: any) {
        return { status: 500, data: null } as { status: number, data: Type }
    }
}