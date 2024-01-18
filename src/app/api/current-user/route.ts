import { promises as fs } from 'fs';

export const GET = async () => {
    try {
        const file = await fs.readFile(process.cwd() + '/public/data/current-user.json', 'utf8');
        return new Response(JSON.stringify({ data: JSON.parse(file), status: 200 }), { status: 200 })
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error?.message, status: 500 }), { status: 500 })
    }
}
