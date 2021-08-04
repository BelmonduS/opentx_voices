const appRoot = require("app-root-path");
const shell = require('shelljs');
const path = require('path');

async function parse(language_obj, yaml_file_path, tts_engine, voice_name){
    console.log("wwww");
    for (const [master_key, master_value] of Object.entries(language_obj)) {
        console.log(`${master_key}: `);
        for (const [translate_key, translate_value] of Object.entries(master_value)) {
            console.log(`${translate_key}: ${translate_value}`);
            let audio_save_path = generate_audio_save_path(yaml_file_path, master_key, translate_key, tts_engine, voice_name)
            let only_dir = path.dirname(audio_save_path);
            shell.mkdir('-p', only_dir);
            const tts = require(appRoot + '/models/tts_engine/' + tts_engine);
            await tts.generate_sound(translate_value, 'pl', 'Male', audio_save_path)
        }
    }
}
exports.parse = parse

function generate_audio_save_path(yaml_file_path, master_key, translate_key, tts_engine, voice_name){
    let audio_save_path = '';

    let directory_from_yaml = yaml_file_path.split('.yaml')[0];
    directory_from_yaml = directory_from_yaml.replace('translations/','generated/')
    audio_save_path += directory_from_yaml
    audio_save_path += '/' + tts_engine
    audio_save_path += '/' + voice_name
    if(master_key === 'system'){
        audio_save_path += '/' + master_key
    }
    audio_save_path += '/' + translate_key + ".wav"

    return audio_save_path;
}