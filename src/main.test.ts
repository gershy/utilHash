import { assertEqual, testRunner } from '../build/utils.test.ts';
import hash from './main.ts';

// Type testing
(async () => {
  
  type Enforce<Provided, Expected extends Provided> = { provided: Provided, expected: Expected };
  
  type Tests = {
    1: Enforce<{ x: 'y' }, { x: 'y' }>,
  };
  
})();

testRunner([
  
  { name: 'basic', fn: async () => {
    
    const result  = await hash('testing time');
    // console.log({ result });
    // const result2 = await hash(Buffer.from('testing time'));
    
  }}
  
]);