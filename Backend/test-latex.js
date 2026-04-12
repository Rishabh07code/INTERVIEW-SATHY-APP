const fs = require('fs');

async function testLatex() {
    try {
        const latex = `\\documentclass{article}\\begin{document}Hello world ATS friendly PDF\\end{document}`;
        const formData = new FormData();
        formData.append('filecontents', latex);
        formData.append('filename', 'test.tex');
        formData.append('engine', 'pdflatex');
        formData.append('return', 'pdf');

        const response = await fetch('https://texlive.net/cgi-bin/latexcgi', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('API failed with status ' + response.status);
        }

        const buffer = await response.arrayBuffer();
        fs.writeFileSync('output.pdf', Buffer.from(buffer));
        console.log("PDF saved successfully!");
    } catch(err) {
        console.error("Failed:", err.message);
    }
}
testLatex();
