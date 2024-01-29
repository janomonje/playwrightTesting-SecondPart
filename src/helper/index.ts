let reporter = require("cucumber-html-reporter");

let options = {
  theme: "bootstrap",
  jsonFile: "./test-result/report/cucumber-report.json",
  output: "./test-result/report/bootstrap_cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Linux Mint 21.1",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
  failedSummaryReport: true,
};

reporter.generate(options);

//more info on `metadata` is available in `options` section below.

//to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
