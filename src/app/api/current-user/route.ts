import { promises as fs } from 'fs';

export const GET = async (request: any, { params }: any) => {
    try {
        const file = await fs.readFile(process.cwd() + '/public/data/current-user.json', 'utf8');
        return new Response(file, { status: 200 })
    } catch (error: any) {
        return new Response(error, { status: 500 })
    }
}
