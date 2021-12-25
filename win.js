const electronInstaller = require('electron-winstaller');

async function  main() {
    // NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.
    try {
        await electronInstaller.createWindowsInstaller({
            appDirectory: 'dist/electron-quick-start-win32-x64',
            outputDirectory: './out',
            authors: 'My App Inc.',
            exe: 'myapp.exe'
        });
        console.log('It worked!');
    } catch (e) {
        console.log(`No dice: ${e.message}`);
    }
}


main();