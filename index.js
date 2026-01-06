// buat program konversi suhu, code spliting dan commit yang sesuai, di remote repo harus ada 4 commit
// r, c, k, f
// versioning
// versi 1 tidak interaktip versi 2 interaktip
// koda-b6-git1

import * as readline from "node:readline";
// import { stdin as input, stdout as output } from 'node:process';

import ctf from "./src/ctf.js";
import ctr from "./src/ctr.js";
import ctk from "./src/ctk.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan angka yang inign di konversi ", (answer) => {
  const input = Number(answer);
  console.log(`hasil konversi ${answer} ke fahrenheit adalah`, ctf( input));
  console.log(`hasil konversi ${answer} ke reamure adalah`, ctr( input));
  console.log(`hasil konversi ${answer} ke kelvin adalah`, ctk( input));
  rl.close();
});
