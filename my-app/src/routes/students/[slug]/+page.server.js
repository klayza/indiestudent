/** @type {import('./$types').PageServerLoad} */
import { students } from '$lib/data.js'
import { getPath } from '$lib/util.js'

// temp function for getting a user's data
function getUser(id) {
    return students.filter(student => student.id == id)
}

export async function load({ params }) {
    let paths = [];
    let user = getUser(params.slug);
    user = user ? user[0] : undefined;

    if (user) {
        for (const pId of user.paths) {
            let path = await getPath(pId);
            if (path) {
                paths.push(path);
            }
        }
    }

    return {
        user,
        paths
    };
}
