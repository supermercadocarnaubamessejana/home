/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function letra( id ) {
    var valor_inicial = "120%";
    document.getElementById( id ).style.fontSize = valor_inicial;
}

function tamanhofonte( op, id ) {
    var incremento = 2;  
    var local_alterado = document.getElementById( id ).style.fontSize;
    local_alterado = parseInt(local_alterado.replace(/%/,""));

    switch( op ) {
        
        case "mais": local_alterado += incremento; break;
            case "menos": local_alterado -= incremento; break;
                case "padrao": local_alterado = "120"; break;
    }
    
    document.getElementById( id ).style.fontSize = local_alterado + '%';
}


