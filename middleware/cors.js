/*
 * Copyright (c) 2015-2016 PointSource, LLC.
 * MIT Licensed
 */
/*
 * Use the node-cors library to enable CORS on all express.js apps and endpoints.
 *
 * All config options are passed directly to the cors library.
 * See https://github.com/troygoode/node-cors#configuration-options
 */

var cors = require('cors');

exports.init = function(app, config, logger, callback) {
    var cfg = config.get('cors');

    if (cfg.originRegex) {
    	var regex = new RegExp(cfg.originRegex);
    	if (!cfg.origin) {
    		cfg.origin = regex;
    	} else if (_.isArray(cfg.origin)) {
    		cfg.origin.push(regex)
    	}
    }
    
    app.use(cors(cfg));
    logger.debug('Enabled CORS.');
    callback();
};
