// const c=require("chalk");
// console.log(c.red("hi"))
//this did'nt work so we will use a bit new way of importing and doing stuff.
//for thius we have to crewate a mjs file 
//node --experimental-modules index.mjs write this in termuinal.
// import chalk from "chalk";

// console.log(chalk.red("hi"))


//create a command line interface that lets user specify a filepath and the nodejs process counts the number of words inside it.
console.log(__dirname+"/a.txt");
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const lines = data.split('\n').length;
                console.log(`There are ${lines} lines in ${file}`);
            }
        });
    });
program 
    .command('count_words')
    .description('counts no. of words in a file')
    .argument('<file>','file to check')
    .action((file)=>{
        fs.readFile(file,'utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                // const wrds=data.split('').length;
                let tot=0;
                for(let i=0;i<data.length;i++){
                    if(data[i]===" "){
                        tot++;
                    }
                }
                console.log(tot+1)
                console.log(`there are ${tot} words in ${file}`);
            }
        })
    })

program.parse();
