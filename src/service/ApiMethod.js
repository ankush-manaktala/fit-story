import Request from "./request";

async function post(headers, url, params, token) {
  const conn = await new Request(headers, token);
  return conn.post(url, params);
}

async function get(headers, url, params, token) {
  const conn = await new Request(headers, token);
  return conn.get(url, params);
}

async function put(headers, url, params, token) {
  const conn = await new Request(headers, token);
  return conn.put(url, params);
}

async function del(headers, url, params, token) {
  const conn = await new Request(headers, token);
  return conn.delete(url, params);
}

export default { post, get, put, del };
