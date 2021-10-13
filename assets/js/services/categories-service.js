

/**
 *
 * @returns Array
 */


export function fetchCategories() {

    //to switch this from an AJAX call to global variable, instead this line
    // return axios.get('/api/categories');
//    type this. We will return an array of objects
    return window.categories;

}
