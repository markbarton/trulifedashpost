/**
 * Created by Mark on 11/02/2015.
 */

var app=angular.module("dashboard")
app.factory('DominoFactory',function DominoFactory($http,GENERAL_CONFIG){

    return{
        postOptions:postOptions,
        runQueryAgent:runQueryAgent
    }

    function postOptions(optionsData){
        return $http({
            method: 'POST',
            url: GENERAL_CONFIG.DOMINO_URL + '/org/orderconfig.nsf/DashboardOptions?createdocument',
            data:optionsData
        });
    }


    function runQueryAgent(unid){
        console.log("unid = " + unid)
        return $http({
            method: 'GET',
            url:GENERAL_CONFIG.DOMINO_URL + '/org/orderconfig.nsf/Report2?openagent&unid='+unid
        });
    }

})