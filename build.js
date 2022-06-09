const fs = require('fs');
const path = require('path');
const { RESOURCEPATH } = require('./config');
const CODEPATH = `./${RESOURCEPATH}/codes`;
let globalIndex = 0;
function uuid() {
    globalIndex++;
    return globalIndex;
}

function star() {
    const p = path.join(__dirname, CODEPATH);
    if (fs.existsSync(p)) {
        const files = fs.readdirSync(p);
        const list = files.filter(f => {
            const p = path.join(__dirname, `${CODEPATH}/${f}`);
            const stat = fs.statSync(p);
            return stat.isDirectory();
        }).map(f => {
            const p = path.join(__dirname, `${CODEPATH}/${f}`);
            return getChildren(p, f);
        });
        saveExamples(list);
    } else {
        saveExamples([]);
    }
}

function saveExamples(data) {
    fs.writeFileSync(path.join(__dirname, `./${RESOURCEPATH}/examples.json`), JSON.stringify(data));
}


function getChildren(p, fileName) {
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
        const readmePath = `${p}/readme.md`;
        let title = fileName;
        if (fs.existsSync(readmePath)) {
            title = fs.readFileSync(readmePath).toString();
        };
        const files = fs.readdirSync(p);
        return {
            title: `${title}`,
            path: getFilePath(p),
            key: uuid(),
            children: files.filter(f => {
                return f !== 'readme.md';
            }).map(f => {
                return getChildren(`${p}/${f}`, f);
            })
        };
    } else {
        return getHtmlFile(p, fileName);
    }
}

function getHtmlFile(p, fileName) {
    const text = fs.readFileSync(p).toString();
    return {
        title: `${getHtmlTitle(text) || fileName}`,
        // fileName: fileName,
        path: getFilePath(p),
        // html: text,
        key: uuid(),
        isFile: true
    }
}

function getHtmlTitle(text) {
    if (!text) {
        return;
    }
    text = text.split('<title>');
    if (!text[1]) {
        return;
    };
    text = text[1].split('</title>');
    return text[0];
}


function getFilePath(p) {
    p = p.split('resources');
    if (p[1]) {
        p = p[1];
        while (p.indexOf('\\') > -1) {
            p = p.replace('\\', '/');
        }
        return p;
    }
    return '';
}

star();
