// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

const util = require('@polkadot/util');

const packageInfo = require('./package-info.json');

util.detectPackage(packageInfo, () => __dirname);

exports.packageInfo = packageInfo;
