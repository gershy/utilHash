import '@gershy/clearing';

export default async (data: string | Uint8Array, te = new TextEncoder()) => {
  
  const result = await crypto.subtle.digest('sha-256', cl.isCls(data, String) ? te.encode(data) : data);
  return result
    [cl.toNum]()
    [cl.toStr](String[cl.base62]);
  
};