import { config } from "./config";

const { baseUrl } = config;
export async function get(path: string, access?: string) {
  const res = await fetch(
    `${baseUrl}/${path}/`,
    access
      ? {
          headers: {},
        }
      : ({
          headers: {},
        } as any)
  );
  if (res.ok) {
    const resBody = await res.json();
    return resBody;
  } else {
    if (res.status === 401) {
    }
    throw new Error(res.statusText);
  }
}

export async function post<T>(path: string, payload?: T, access?: string) {
  const res = await fetch(
    `${baseUrl}/
  ${path}/`,
    {
      method: "POST",
      body: payload ? JSON.stringify(payload) : undefined,
      headers: {},
    }
  );
  if (res.ok) {
    const resBody = await res.json();
    return resBody;
  } else {
    if (res.status === 401) {
    }
    throw new Error(res.statusText);
  }
}
