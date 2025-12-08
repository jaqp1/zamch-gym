import { generateWorkout } from '../src/utils/functions.js';

async function runTests(){
  const cases = [
    { muscles:['brzuch','biceps','barki'], poison:'indywidualny', goal:'siła' },
    { muscles:['biceps'], poison:'indywidualny', goal:'siła' },
    { muscles:['góra'], poison:'góra_dół', goal:'hipertrofia' },
    { muscles:['push'], poison:'klasyczny_split', goal:'wytrzymałość' }
  ];

  for(const c of cases){
    console.log('\n=== Test case ===');
    console.log('input:', c);
    for(let i=0;i<5;i++){
      try{
        const wod = generateWorkout(c);
        console.log('result', i+1, JSON.stringify(wod, null, 2));
      }catch(e){
        console.error('error running generateWorkout', e);
      }
    }
  }
}

runTests().then(()=>console.log('\nAll tests finished')).catch(e=>console.error(e));
