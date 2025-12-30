import { GET_STRING, GET_JSON } from '@/app/lib/redis'

export default async function Page() {
    const get_string_key = await GET_STRING('hello');
    const get_json_key = await GET_JSON('foo');

    return (
        <main>
            <p>Dashboard Page</p>
            <p>hello {get_string_key}</p>
            <p>foo {get_json_key}</p>
        </main>
    );
}