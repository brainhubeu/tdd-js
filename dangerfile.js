/* eslint-disable no-undef, quotes, import/no-extraneous-dependencies */
const licenseAuditor = require('@brainhubeu/license-auditor');

const whitelist = require('./license/whitelist');
const blacklist = require('./license/blacklist');

licenseAuditor({
  whitelistedLicenses: whitelist,
  blacklistedLicenses: blacklist,
  projectPath: `.`,
  ciManager: {
    warn,
    fail,
  },
});
