"use strict";

const SSRCaching = require("electrode-react-ssr-caching");

process.on("SIGINT", () => {
  process.exit(0);
});

// require("mongoose").connect("mongodb://localhost:27017/test");
require("mongoose").connect("mongodb://heroku_jm3xskkx:t4hehqcfa6ehd9voavfp1g41qb@ds127260.mlab.com:27260/heroku_jm3xskkx");


const electrodeConfippet = require("electrode-confippet");
const staticPathsDecor = require("electrode-static-paths");
const support = require("electrode-archetype-react-app/support");

require.extensions[".css"] = () => {
  return;
};

const cacheConfig = {
  components: {
    SSRCachingTemplateType: {
      strategy: "template",
      enable: true
    },
    SSRCachingSimpleType: {
      strategy: "simple",
      enable: true
    }
  }
};

support.load()
  .then(() => {
    const config = electrodeConfippet.config;

    SSRCaching.enableCaching();
    SSRCaching.setCachingConfig(cacheConfig);

    require("electrode-server")(config, [staticPathsDecor()]);  // eslint-disable-line
  });
