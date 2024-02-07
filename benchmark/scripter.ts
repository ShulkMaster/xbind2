import { createWriteStream } from 'fs';

type Arguments = [number, number, number, number, number];

function generateFileName(args: number[]): string {
  const keys = ['c', 'p', 'n', 'l', 'a'];
  let fileName = '';
  keys.forEach((key, index) => {
      fileName += `${key}${args[index]}-`;
  });
  fileName = fileName.slice(0, -1);

  return `test/${fileName}.hbt`;
}

// Tomar argumentos de la línea de comandos (excluyendo los dos primeros argumentos
const args = process.argv.slice(2);
const numbers = args.map(Number);
const hasInvalidNumber = numbers.some(isNaN);

if (hasInvalidNumber) {
  console.error('Error: Todos los argumentos deben ser números.');
  process.exit(1);
}

const finalNumbers = numbers.map(Math.abs);
const fileName = generateFileName(finalNumbers);


// Verificar que se hayan proporcionado los 5 argumentos
if (args.length !== 5) {
  console.error('Error: Se requieren exactamente 5 argumentos.');
  process.exit(1);
}

const stream = createWriteStream(fileName);
stream.on('finish', () => {
  console.log(`Archivo  ${fileName} escrito exitosamente.`);
});

stream.on('error', (error) => {
  console.error('Error al escribir el archivo:', error);
});

writeComponent(finalNumbers as Arguments);

function writeComponent(cArgs: Arguments): void {
  const components = cArgs[0];
  for (let i = 0; i < components; i++) {
    stream.write(`component component${i} {\n`);
    writeProps(cArgs);
    stream.write('  render (\n');
    writeTemplate(cArgs[2], 0);
    stream.write('  );\n}\n');
  }
  stream.end();
}

function randomNum(): number {
  return Math.trunc(Math.random() * 101);
}

function writeExp(n: number): string {
  const buff: string[] = [randomNum().toString()];
  const opts = ['+', '-', '*'];
  for (let i = 0; i < (n - 1); i++) {
    const opt = opts[i % 3];
    buff.push(opt);
    buff.push(randomNum().toString());
  }
  buff.push(';\n');
  return buff.join(' ');
}

function writeProps(cArgs: Arguments): void {
  const props = cArgs[1];
  for (let i = 0; i < props; i++) {
    const exp = writeExp(props);
    stream.write(`  prop prop${i}: number = `);
    stream.write(exp);
  }
}

function writeTemplate(nodes: number, level: number): void {
  const indent = ' '.repeat(level * 2 + 4);

  for (let i = 0; i < nodes; i++) {
    stream.write(indent);
    stream.write('<div');
    writeAttributes(finalNumbers[4]);
    stream.write('>\n');
    if (level < finalNumbers[3]) {
      writeTemplate(nodes, level + 1);
    }
    stream.write(indent);
    stream.write('</div>\n');
  }
}

function writeAttributes(n: number): void {
  const buff: string[] = [];
  for (let i = 0; i < n; i++) {
    buff.push(` class="className${i}"`);
  }
  stream.write(buff.join(''));
}
