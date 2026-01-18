import { generateWorkout } from '../src/utils/functions.js';

function summarize(wod){
  const muscles = new Set();
  for(const ex of wod){
    if(ex && ex.muscles) ex.muscles.forEach(m=>muscles.add(m));
  }
  return Array.from(muscles);
}

async function run(){
  const input = { muscles:['brzuch','biceps','barki'], poison:'indywidualny', goal:'siła' };
  console.log('Running repeated tests for', input);
  for(let i=0;i<20;i++){
    const wod = generateWorkout(input);
    console.log(`\nRun ${i+1}: exercises=${wod.map(e=>e.name).join(', ')}`);
    console.log('Covered muscles:', summarize(wod).join(', '));
  }
}

run().then(()=>console.log('\nDone')).catch(e=>console.error(e));
