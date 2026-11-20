import { mkdir, copyFile, readdir, rm } from 'node:fs/promises';
await rm('dist', {recursive:true, force:true});
await mkdir('dist',{recursive:true});
for (const file of await readdir('public')) await copyFile(`public/${file}`,`dist/${file}`);
console.log('Built Truelens into dist/');
