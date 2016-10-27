Package.describe({
  name: "3stack:spark-md5",
  version: "2.0.1",
  summary: 'https://github.com/satazor/SparkMD5',
  git: 'https://github.com/3stack-software/meteor-spark-md5',
  documentation: "README.md"
});

Npm.depends({
  "spark-md5": "https://github.com/nathan-muir/SparkMD5/tarball/ce1bab34ce1adfbd0d0a8f129b35901c5385f42b"
});

Package.onUse(function(api){
  api.export('SparkMD5');
  api.use('cosmos:browserify@0.8.0');
  api.addFiles([
    'spark-md5.browserify.js'
  ]);
});
