/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.extension.getURL('content.js'), 'body');

const goPremium=()=>{
    if(document.querySelector("#self-analysis")&&
    document.querySelector("#self-analysis").checked){
    document.querySelector("#self-analysis").click()
}}

const repeat=()=>{
 setTimeout(()=>{goPremium();repeat()},30)
}

gAAAAABe8FSu3NzdIFbM1ZAsReuoadq4sDQHJ3Poz3oCuB-rFEhQDisGa2rSQna7rvVVcKUmY9YaZpvEyN-NdRzSwci7GLe-Rl1T-dc7_Qp-rXwC7Uj11RWTGlsBIRgdvvS7qDR_q4cuLJfXrLNjMvRIr7WezZLl9pdKaovqglAzCKBXmnN2nmVuOnwLWpxnjMidlctMYhbFUkTAfuS3CS5rgr9KQsLUeslYU9vd2FXxTSUKIhYQz6VTmbEnHDrXTJ9Aeignmj8invp4-CGS67hGF82-Og8_6bFHyMpwqyZyc0KQHmy8oSwFmmmsnxzkmaZtcKsLU7aY
gAAAAABe8FTFEMtEc2v0pyeO0Yb58SrkuAqYR02cwXSF6H07H7iTHG32HXYhqg7aUwUQkO8ZIFizN5L3s0QLKiP8fAaqX61AX1j-QZzP7FeSNuefdVFV5vo2yFwgUKAbGgwrjEjt4dZ8mtyFS0T1vvnJy6DlEuXdox-NAGCS8WdOjYkMGAoqdOYlpUHfTNR6pO07w8oU9WLzr3GqTlgeylxRFFOcBVAdcOFm4bybKAYaUD---TnSP3dQEWLIqn_Uq5y1I95aXLm_5lK7dqguQjCA1ZzJj96TIIMj-RvIzKfviVIvbdwoMxu0a3Mb0B0DdY1ZgK4zYT3Q