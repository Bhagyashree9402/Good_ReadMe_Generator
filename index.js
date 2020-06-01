const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const token = "d2204d4ef5bf4183fc0a0a9ddd1e261949c38116";

inquirer.prompt({
    message: "Enter your github username",
    name: "username"
}).then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    const emailUrl = `https://api.github.com/users/${username}/events/public`;

    axios.get(queryUrl).then(function (res) {
        //const gitEmail = res.data.email;
        const gitProfile = res.data.avatar_url;
        var gitEmail = "";
        axios.get(emailUrl).then(function (res1) {
            gitEmail = res1.data[0].payload.commits[0].author.email;
        })
        inquirer.prompt([{
            type: "input",
            name: "project_title",
            message: "what is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "write a brief description of your project "
        },

        {
            type: "list",
            name: "license",
            message: "what kind of license should your project have?",
            choices: ["MIT", "Apache", "GPL", "Mozilla"],
        },

        {
            type: "input",
            name: "installation",
            message: "what command should be run to install dependencies?",

        },
        {
            type: "input",
            name: "usage",
            message: "Describe the usage of project?",
        },
        {
            type: "input",
            name: "contribution",
            message: "what does the user need to know about contributing to the repo?"
        },
        {
            type: "input",
            name: "test",
            message: "specify the tests done on the project?",
        },

        ]).then(function (response) {

            // console.log(response.project_title);
            // console.log(response.description);
            // console.log(responselicense);
            // console.log(response.installation);
            // console.log(rseponse.usage);
            // console.log(response.contribution);
            // console.log(response.test);

            fs.writeFile("readme.md", "# " + response.project_title + "\n", function (error) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("success");

                }

            })


            fs.appendFile("readme.md", "\n" + "![alt text](https://img.shields.io/badge/license-" + response.license + "-green)" + "\n"
                + "\n" + "![alt text](" + gitProfile + ") \n"
                + "\n" + "### email:" + gitEmail + "\n"
                + "\n" + "## Description" + "\n" + response.description + "\n"
                + "\n" + "## Table of Content" + "\n" + "- License" + "\n" + "- Usage" + "\n" + "- Installation" + "\n" + "- Contribution" + "\n"
                + "\n" + "## License" + "\n" + response.license + "\n"
                + "\n" + "## Usage" + "\n" + response.usage + "\n"
                + "\n" + "## Installation" + "\n" + response.installation + "\n"
                + "\n" + "## Contribution" + "\n" + response.contribution + "\n"
                + "\n" + "## tests" + "\n" + response.test + "\n", function (error) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log("success");

                    }

                })


            // fs.appendFile("readme.md", "\n" + "![alt text](" + gitProfile + ") \n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }

            // })

            // fs.appendFile("readme.md", "\n" + "### email:" + gitEmail + "\n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }

            // })



            // fs.appendFile("readme.md", "\n" + "## Description" + "\n" + response.description + "\n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }
            // })

            // fs.appendFile("readme.md", "\n" + "## Table of Content" + "\n" + "- License" + "\n" + "- Usage" + "\n" + "- Installation" + "\n" + "- Contribution" + "\n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }
            // })


            // fs.appendFile("readme.md", "\n" + "## License" + "\n" + response.license + "\n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }
            // })

            // fs.appendFile("readme.md", "\n" + "## Usage" + "\n" + response.usage + "\n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }
            // })

            // fs.appendFile("readme.md", "\n" + "## Installation" + "\n" + response.installation + "\n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }
            // })

            // fs.appendFile("readme.md", "\n" + "## Contribution" + "\n" + response.contribution + "\n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }
            // })

            // fs.appendFile("readme.md", "\n" + "## tests" + "\n" + response.test + "\n", function (error) {
            //     if (error) {
            //         console.log(error);
            //     }
            //     else {
            //         console.log("success");

            //     }
            // })

        })
    })
})












// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
