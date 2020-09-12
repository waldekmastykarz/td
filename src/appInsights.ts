const packageJSON = require('../package.json');
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

import * as appInsights from 'applicationinsights';
const config = appInsights.setup('abc');
config.setInternalLogging(false, false);
// append -dev to the version number when ran locally
// to distinguish production and dev version of the CLI
// in the telemetry
const version: string = `${packageJSON.version}${fs.existsSync(path.join(__dirname, `..${path.sep}src`)) ? '-dev' : ''}`;
appInsights.defaultClient.commonProperties = {
  version: version,
  node: process.version
};
appInsights.defaultClient.context.tags['ai.session.id'] = crypto.randomBytes(24).toString('base64');
delete appInsights.defaultClient.context.tags['ai.cloud.roleInstance'];
delete appInsights.defaultClient.context.tags['ai.cloud.role'];

export default appInsights.defaultClient;