/**
 * Created by Mark on 08/01/2015.
 */

var config_module = angular.module('dashboard.config', []);
var config_data = {
    'GENERAL_CONFIG': {
       'DOMINO_URL': 'http://192.168.1.66', //Domino DB Server
        'VERSION':'1.0'
    }
}
angular.forEach(config_data,function(key,value) {
    config_module.constant(value,key);
})