const calls=[];
global.Chart = function(ctx,cfg){ calls.push(cfg.type); this.destroy=()=>{}; };
function mkEl(){return {innerHTML:'',style:{},classList:{add(){},remove(){},contains(){return false}},dataset:{},querySelectorAll(){return []},querySelector(){return mkEl()},set onclick(v){},set onchange(v){},value:''};}
const els={};
global.document={
  getElementById:(id)=>{els[id]=els[id]||mkEl();return els[id];},
  querySelector:()=>mkEl(), querySelectorAll:()=>[],
};
global.window={};
try{ require('./dash.js'); console.log('JS RAN OK. Chart types:', calls); }
catch(e){ console.log('JS ERROR:', e.message); console.log(e.stack.split('\n').slice(0,5).join('\n')); }
