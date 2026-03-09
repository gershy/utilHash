import { isCls } from '@gershy/clearing';

export default async (data: string | Uint8Array, te = new TextEncoder()) => {
  
  const result = await crypto.subtle.digest('sha-256', isCls(data, String) ? te.encode(data) : data);
  return result
    [toNum]()
    [toStr](String[base62]);
  
};