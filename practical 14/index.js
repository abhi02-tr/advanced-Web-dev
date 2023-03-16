const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const options = {
    maxFileSize: 2 * 1024
};
http.createServer((req, res) => {
    if(req.url == '/uploadFile') {
        let form = new formidable.IncomingForm(options);
        form.parse(req, (err, fields, files) => {
            if(err) { 
                res.write('File size exceed..');
             };
            fs.rename(files.file.filepath, 'C:/Collage file/sem 6/advanced-Web-dev/practical 14/assets/' + files.file.originalFilename, (err) => {
                if(err) throw err;
                res.write('File uploaded and moved.');
                res.end();
            });
        });
    }
    else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(`
            <form action='uploadFile' method='post' enctype='multipart/form-data'>
                <input type='file' name='file'><br>
                <input type='submit'>
            </form>
        `);
    }
}).listen(3000);