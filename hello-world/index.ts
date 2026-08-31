// Define some ANSI escape codes for styling the output
const style = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
};

// Print the customized Hello World message
console.log(`\n${style.bold}${style.cyan}🚀 Hello World!${style.reset}`);
console.log(`${style.magenta}Welcome to your new TypeScript local development environment.${style.reset}\n`);
