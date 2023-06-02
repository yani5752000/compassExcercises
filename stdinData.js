process.stdin.setEncoding('utf8');

process.stdin.on('data', data => {
  console.log(`You typed ${data.toString()}`);
});

process.stdin.on('end', () => {
    process.stdout.write('end');
   });