import { isCls } from '@gershy/clearing';

export default async (data: string | Uint8Array, te = new TextEncoder()) => {
  
  const result = await crypto.subtle.digest('sha-256', isCls(data, String) ? te.encode(data) : data);
  
  const arr: number[] = result.byteLength[toArr](n => result[n]);
  
  console.log({ result, arr });
  
  return [ ...result ];
  
};