/** @type {import('./$types').PageServerLoad} */
import { students } from '$lib/data.js'
import { getPath } from '$lib/util.js'

// temp function for getting a user's data
function getUser(id) {
    return students.filter(student => student.id == id)
}

export async function load({ params }) {
    const { user: userid } = params;
    let paths = [];
    let user = getUser(userid);

    user = user ? user[0] : undefined;


    if (user) {
        for (const pId of user.paths) {
            let path = await getPath(pId);
            if (path) {
                paths.push(path);
            }
        }
        return {
            user,
            paths
        };
    }
    return {
        status: 404,
        error: 'User or project not found'
    };
}
