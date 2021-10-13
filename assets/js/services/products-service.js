import axios from 'axios';

/**
 *
 * @param {String|null}categoryIri
 * @returns Promise
 */

export function fetchProducts(categoryIri){
    const params = {};

    if (categoryIri) {
        params.category = categoryIri;
    }

    return  axios.get('/api/products', {
        params
    }).then((response) => response.data)
}

//OR

// export function fetchProducts(categoryIri){
//     const params = {};
//
//     if (categoryIri) {
//         params.category = categoryIri;
//     }
//
//     return  axios.get('/api/products', {
//         params
//     });
// }
