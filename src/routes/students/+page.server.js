// /** @type {import('./$types').PageServerLoad} */
// export async function load() {
//     return {students};
// };

import { students } from '$lib/data.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        students
    };
}