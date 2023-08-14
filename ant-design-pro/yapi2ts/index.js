#!/usr/bin/env node
const consola = require('consola');
const ora = require('ora');
const Generator = require('./Generator');
const write = require('./write');
// const { getConfig } = require('../shared/project');

// const { yapi2ts } = getConfig();

const run = async () => {
  const cwd = process.cwd();
  let generator;
  let spinner;
  try {
    generator = new Generator({}, { cwd });
    spinner = ora('正在获取数据并生成代码...').start();
    const output = await generator.generate();
    // console.log('output:', output);
    spinner.stop();

    consola.success('获取数据并生成代码完毕');
    await write(output);
    const filePath = Object.keys(output)
      .map((v) => output[v].filePath)
      .join('\n');
    // consola.success('写入文件完毕')
    consola.success(`已生成文件 \n${filePath} `);

    process.exit();
  } catch (err) {
    spinner?.stop();
    consola.error(err);
  }
};
run();
