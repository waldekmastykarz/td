const packageJSON = require('../package.json');
const cliAadAppId: string = '123';

export default {
  applicationName: `CLI for Microsoft To Do v${packageJSON.version}`,
  cliAadAppId: process.env.CLIMICROSOFTTODO_AADAPPID || cliAadAppId,
  tenant: process.env.CLIMICROSOFTTODO_TENANT || 'common'
};