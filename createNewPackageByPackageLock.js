/**
 * create new package.json by package-lock.json
 * @param {Object} package package.json file content
 * @param {Object} packageLock package-lock.json file content
 * @return {String} new package.json file content
 */
function createNewPackageByPackageLock(package, packageLock) {
  package.dependencies = Object.entries(packageLock.dependencies)
                               .reduce((deps, [dep, { version }]) => Object.assign(deps, { [dep]: version }), {});
  return JSON.stringify(package, null, 2);
}

// example
let package = {
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/xxxxxx.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/xxxxxx/issues"
  },
  "homepage": "https://github.com/xxxxxx#readme"
};

let packageLock = {
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "base64-arraybuffer": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/base64-arraybuffer/-/base64-arraybuffer-0.2.0.tgz",
      "integrity": "sha512-7emyCsu1/xiBXgQZrscw/8KPRT44I4Yq9Pe6EGs3aPRTsWuggML1/1DTuZUuIaJPIm1FTDUVXl4x/yW8s0kQDQ=="
    },
    "base64-js": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.1.tgz",
      "integrity": "sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g=="
    }
  }
};

console.log(createNewPackageByPackageLock(package, packageLock));
