Package.describe({
  name: "3stack:spark-md5",
  version: "2.0.0",
  summary: 'https://github.com/satazor/SparkMD5',
  git: 'https://github.com/3stack-software/meteor-spark-md5',
  documentation: "README.md"
});

Npm.depends({
  "spark-md5": "https://github.com/satazor/SparkMD5/tarball/018fee878fde6dc0a064e057b3c95cd5b017e788"
});

Package.onUse(function(api){
  api.export('SparkMD5');
  api.use('cosmos:browserify@0.8.0');
  api.addFiles([
    'spark-md5.browserify.js'
  ]);
});
