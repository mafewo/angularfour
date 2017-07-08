export module Filtros {
    export function cortarTexto() {
        return function(input, limit){
        return (input.length > limit && limit !== 0) ? input.substr(0, limit) + '...' : input;
        };
    }
}

