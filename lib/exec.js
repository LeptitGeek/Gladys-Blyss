const Promise = require('bluebird');


module.exports = function(params){

	// if module serial is not present, we cannot contact the arduino
	if(!gladys.modules.serial || typeof gladys.modules.serial.sendCode !== 'function') {
		sails.log.error(`You need to install the serial module in Gladys.`);
		return Promise.reject(new Error('DEPENDENCY_MISSING'));
	}
	else { 
	    var code = parseInt(params.deviceType.identifier); 
	    gladys.modules.serial.sendCode(`{"function_name":"SendRadioCode","code":"${code}"}%`);
	}
	
	return Promise.resolve();
};
