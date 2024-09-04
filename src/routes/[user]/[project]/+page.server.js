/** @type {import('./$types').PageServerLoad} */
import { students } from '$lib/data.js';

function getProject(userid, projectid) {
    let thisStudent = students.find(student => student.id === userid);
    
    if (thisStudent) {
        let project = thisStudent.projects.find(project => project.id === projectid);
        // return { user: thisStudent, project };
        return { project };
    }

    return null;
}

export async function load({ params }) {
    const { user: userid, project: projectid } = params;

    const result = getProject(userid, projectid);

    if (result) {
        return result;
    }

    return {
        status: 404,
        error: 'User or project not found'
    };
}