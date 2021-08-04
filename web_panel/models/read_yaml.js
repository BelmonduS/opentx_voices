const fs = require('fs');
const yaml = require('js-yaml');

async function read_file(file_path_inside_project){
    let file_content;

    try {
        let file_content_raw = fs.readFileSync(file_path_inside_project, 'utf8');
        file_content = yaml.load(file_content_raw);
    } catch (e) {

    }

    return file_content;
}
exports.read_file = read_file