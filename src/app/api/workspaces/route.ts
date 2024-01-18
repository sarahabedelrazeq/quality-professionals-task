import { promises as fs } from 'fs';

export const GET = async () => {
    try {
        const file = await fs.readFile(process.cwd() + '/public/data/workspaces.json', 'utf8');

        return new Response(JSON.stringify({ data: JSON.parse(file), status: 200 }))
    } catch (error: any) {
        return new Response(error, { status: 500 })
    }
}

export const POST = async (request: any) => {
    const body = await request.json();

    try {
        if (body && body.name && body.users?.length) {
            const file = await fs.readFile(process.cwd() + '/public/data/workspaces.json', 'utf8');
            fs.writeFile(process.cwd() + '/public/data/workspaces.json', JSON.stringify([...JSON.parse(file), body]));
            return new Response(JSON.stringify({ status: 200 }), { status: 200 })
        }
        return new Response(JSON.stringify({ message: 'You should add the workspace name and add at least one user', status: 400 }), { status: 400 })
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error?.message, status: 500 }), { status: 500 })
    }
}
