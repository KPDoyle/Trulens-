export const uid=()=>globalThis.crypto.randomUUID();
export const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function completeness(documents,requirements){
  const covered=requirements.filter(r=>documents.some(d=>d.category===r.category));
  return {covered:covered.length,total:requirements.length,percent:requirements.length?Math.round(covered.length/requirements.length*100):0};
}
export function csv(rows){return rows.map(row=>row.map(value=>{
  const text=String(value??'');
  return '"'+(/^[=+@\-\t\r]/.test(text)?"'":'')+text.replaceAll('"','""')+'"';
}).join(',')).join('\r\n');}
export const requirements=[
  {category:'Fire safety',name:'Fire safety strategy',detail:'Check that the strategy, supporting drawings and evidence are current and coordinated.'},
  {category:'Structural',name:'Structural design evidence',detail:'Confirm the design basis, supporting calculations and review records are present.'},
  {category:'Building regulations',name:'Building regulations compliance statement',detail:'Provide a clear account of the approach to demonstrating compliance.'},
  {category:'Construction control',name:'Construction control plan',detail:'Set out how design intent and compliance will be maintained during construction.'},
  {category:'Change control',name:'Change control plan',detail:'Describe how changes will be recorded, assessed and authorised.'},
  {category:'Reporting',name:'Mandatory occurrence reporting plan',detail:'Document the project’s reporting arrangements and responsibilities.'},
  {category:'Competence',name:'Competence declaration',detail:'Record the relevant dutyholder competence declarations.'},
  {category:'Drawings',name:'Coordinated design drawings',detail:'Confirm drawings are revision-controlled and coordinated with the written submission.'}
];
export function createProject({name,client,stage,type}){
  if(!name?.trim()) throw Error('Please enter a project name.');
  return {id:uid(),name:name.trim(),client:client?.trim()||'Independent project',stage:stage||'Gateway 2',type:type||'Residential',documents:[],issues:[],activity:[{id:uid(),date:new Date().toISOString(),text:'Project created',actor:'You'}],created:new Date().toISOString()};
}
export function seed(){
 const date=new Date().toISOString();
 const doc=(id,name,category,owner)=>({id,name,category,owner,size:Math.round(700+id*327),date,revision:'P01',sample:true});
 return {version:1,projects:[
 {id:'riverside',name:'Riverside Quarter',client:'Northbank Developments',stage:'Gateway 2',type:'Residential',sample:true,created:date,
 documents:[doc(1,'Fire strategy — Block A.pdf','Fire safety','Sarah Mitchell'),doc(2,'Structural design basis.pdf','Structural','James Carter'),doc(3,'Compliance statement.pdf','Building regulations','Alex Morgan'),doc(4,'Construction control plan.pdf','Construction control','Sarah Mitchell'),doc(5,'Change control plan.pdf','Change control','Alex Morgan'),doc(6,'General arrangement drawings.pdf','Drawings','James Carter')],
 issues:[{id:'f1',title:'Clarify the evacuation strategy',severity:'High',category:'Fire safety',document:'Fire strategy — Block A.pdf',reference:'Illustrative review · section 4.2',description:'The sample strategy refers to both simultaneous evacuation and stay put. Ask the fire engineer to confirm the intended approach and coordinate the supporting drawings.',owner:'Sarah Mitchell',status:'Open',note:''},
 {id:'f2',title:'Add the occurrence reporting plan',severity:'High',category:'Reporting',document:'Submission pack',reference:'Evidence coverage',description:'A mandatory occurrence reporting plan has not been added to this sample pack. Upload the current plan and arrange a professional review.',owner:'Alex Morgan',status:'Open',note:''},
 {id:'f3',title:'Confirm drawing revision references',severity:'Medium',category:'Drawings',document:'General arrangement drawings.pdf',reference:'Illustrative review · document coordination',description:'The sample compliance statement cites revision P00; the drawing register lists P01. Confirm that the submission references a consistent issue.',owner:'James Carter',status:'In review',note:''},
 {id:'f4',title:'Record dutyholder declarations',severity:'Medium',category:'Competence',document:'Submission pack',reference:'Evidence coverage',description:'Add the applicable competence declarations and record who checked them.',owner:'Alex Morgan',status:'Open',note:''}],
 activity:[{id:'a1',date,text:'Sample project loaded for exploration',actor:'Truelens'},{id:'a2',date,text:'6 sample document records added',actor:'Truelens'}]},
 {id:'broadgate',name:'Broadgate Exchange',client:'Exchange Property Group',stage:'Design review',type:'Commercial',sample:true,created:date,documents:[doc(7,'Structural assessment.pdf','Structural','James Carter'),doc(8,'Design drawings.pdf','Drawings','James Carter'),doc(9,'Fire engineering report.pdf','Fire safety','Sarah Mitchell')],issues:[],activity:[{id:'a3',date,text:'Sample project loaded for exploration',actor:'Truelens'}]},
 {id:'oakfield',name:'Oakfield Residences',client:'Oakfield Living',stage:'Gateway 2',type:'Residential',sample:true,created:date,documents:[],issues:[],activity:[{id:'a4',date,text:'Sample project loaded for exploration',actor:'Truelens'}]}
 ]};
}
