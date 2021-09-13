"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `よ＿よ。\r\nScaffolding with${chalk.bgGreen(
          " generator-vscode-webpack"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "What name should be used for the extension?",
        default: /[\w .-]+$/i.exec(this.destinationPath())[0]
      },
      {
        type: "input",
        name: "version",
        message: "What initial version should be used by the extension?",
        default: "1.0.0"
      },
      {
        type: "input",
        name: "description",
        message: "Describe the intended purpose of the extension:",
        default: ""
      },
      {
        type: "input",
        name: "author",
        message: "What's your name?",
        default: ""
      },
      {
        type: "input",
        name: "author_email",
        message: "What's your email address?",
        default: ""
      },
      {
        type: "input",
        name: "author_homepage",
        message: "What's your homepage?",
        default: ""
      },
      {
        type: "input",
        name: "homepage",
        message: "What's the URL of the project homepage?",
        default: ""
      },
      {
        type: "input",
        name: "repo",
        message: "What's the repository URL of the project?",
        default: ""
      },
      {
        type: "input",
        name: "license",
        message: "Which license should the package use?",
        default: "MIT"
      }
    ];

    // To access props later use this.props.someAnswer;
    this.props = await this.prompt(prompts);
  }

  writing() {
    this.log(yosay("Writing scaffold content..."));

    this.fs.copyTpl(
      this.templatePath("gitignore"),
      this.destinationPath(".gitignore"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("vscodeignore"),
      this.destinationPath(".vscodeignore"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("readme.md"),
      this.destinationPath("readme.md"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("webpack.config.js"),
      this.destinationPath("webpack.config.js"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("src/index.ts"),
      this.destinationPath("src/index.ts"),
      this.props
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }

  end() {
    yosay(`${chalk.bold.greenBright(" SCAFFOLDING COMPLETE!")}`);
  }
};
