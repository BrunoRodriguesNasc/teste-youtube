import { init }from '../backend/controller/controller.js'
import 'dotenv';
(async function (){
  init()
})();

console.log(process.env.API_KEY)