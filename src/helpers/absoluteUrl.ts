export default function absoluteUrl(path: string) {
    try {
        return `${window.location.origin}${path}`;
    } catch {
        if (process.env.NEXT_PUBLIC_APP_ENV === "local") {
            return `${process.env.NEXT_PUBLIC_APP_URL}${process.env.Port || "3000"
                }${path}`;
        }
        return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
    }
}