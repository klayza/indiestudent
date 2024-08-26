import { error } from '@sveltejs/kit';

export async function getPath(id) {
  try {
    const response = await import(`../lib/paths/${id}.json`);
    return response.default;
  } catch (err) {
    throw error(404, `Path with id ${id} not found.`);
  }
}
