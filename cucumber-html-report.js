const report = require('multiple-cucumber-html-reporter');
const jsonfilePath='cypress/cucumber-json';
report.generate({
    jsonDir: jsonfilePath,
    reportPath: './reports/cucumberHtmlReport.html',
    metadata: {
        browser: {
            name: 'chrome',
            version: '94'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        },
    },
});