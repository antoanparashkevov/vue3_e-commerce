/**
 *
 * @returns {Promise}
 */


export function fetchCategories() {
    //we can create a promise
    return new Promise((resolve, reject) =>{
        resolve({
            data:{
                'hydra:member':window.categories
            }
        })
    })

    //to switch this from an AJAX call to global variable, instead this line
    // return axios.get('/api/categories');
    // type this. We will return an array of objects
    // return window.categories;

}
