const appRoot = require('app-root-path');
const express = require('express');


const read_yaml = require(appRoot + '/models/read_yaml');
const logic_generate_file_voice_package = require(appRoot + '/models/logic_generate_file_voice_package');


module.exports = {

    company_add_user: async function (req, res) {
        let return_obj = {};
        return_obj.success = true;
        return_obj.error = "";

        let yaml_file_path = 'translations/tx16s/2.3.9/pl/pro.yaml';
        let yaml_content;
        try{
            yaml_content = await read_yaml.read_file(yaml_file_path);
        } catch(err){
            console.log(err)
        }
        try{
            let test = await logic_generate_file_voice_package.parse(yaml_content, yaml_file_path, 'google', 'test');
        } catch(err){
            console.log(err)
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(return_obj));
    },



};
