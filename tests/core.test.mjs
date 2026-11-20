import test from 'node:test';
import assert from 'node:assert/strict';
import {completeness,csv,createProject,escapeHTML,seed,requirements} from '../public/core.js';
test('coverage measures evidence categories without implying approval',()=>{
 const p=seed().projects[0]; assert.equal(completeness(p.documents,requirements).percent,75);
 assert.equal(completeness([...p.documents,p.documents[0]],requirements).percent,75);
 assert.equal(completeness([],requirements).percent,0);
});
test('projects validate and start with independent empty records',()=>{
 assert.throws(()=>createProject({name:' '}));
 const p=createProject({name:' Test ',client:'Client'});assert.equal(p.name,'Test');assert.equal(p.documents.length,0);assert.ok(p.id);
});
test('exports quote delimiters and neutralise spreadsheet formulas',()=>{
 assert.equal(csv([['Name','Note'],['=1+1','a"b,c']]),'"Name","Note"\r\n"\'=1+1","a""b,c"');
});
test('user-controlled HTML is escaped',()=>assert.equal(escapeHTML('<script>"&'), '&lt;script&gt;&quot;&amp;'));
