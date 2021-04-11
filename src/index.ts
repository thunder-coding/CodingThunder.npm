#!/usr/bin/env node
import boxen from 'boxen'
import figlet from 'figlet'

let text: string;
let name: string;

name = figlet.textSync("Yaksh Bariya", "ANSI Shadow")
if(process.stdout.columns < 96)
name = figlet.textSync("Yaksh", "ANSI Shadow")

text = name
text += '\n'
text += '\n'
text += 'Hello World 👋,'
text += '\n'
text += '   A young developer who loves to code'
console.log(boxen(text, { padding: 1, borderStyle: 'bold',dimBorder: true, float: 'center' }))

