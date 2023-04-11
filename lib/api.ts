export async function fetchJSON<T>(uri: URL | string): Promise<T> {
  return (await fetch(`${import.meta.env.API_SELF}${uri.toString()}`)).json() as T
}