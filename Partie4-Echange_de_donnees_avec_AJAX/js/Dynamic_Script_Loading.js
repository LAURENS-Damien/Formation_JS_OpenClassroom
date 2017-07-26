/*------------------------------------------- Un premier exemple -------------------------------------------*/
// Dans une page HTML, on charge un fichier JavaScript qui exécute une fonction
function sendDSLJS() {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'js/dsl_script.js';

    document.body.appendChild(scriptElement);
}

function receiveMessage(message) {
    console.log(message);
}

/*------------------------------------------- Avec des variables et du PHP -------------------------------------------*/
function sendDSLPHP() {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'dsl_script.php?nick=' + prompt('Quel est votre pseudo ?');

    document.body.appendChild(scriptElement);
}


/*------------------------------------------- Le DSL et le format JSON -------------------------------------------*/
// Charger du JSON
function sendDSLJSON() {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'dsl_script_json.php';

    document.body.appendChild(scriptElement);
}

function receiveMessageJSON(json) {
    var tree = '',
        nbItems, i;

    for (node in json) {
        tree += node + "\n";
        nbItems = json[node].length;

        for (i = 0; i < nbItems; i++) {
            tree += '\t' + json[node][i] + '\n';
        }
    }

    console.log(tree);
}