//  Adapted from Adam Harpur's "vue-github" project
//  This code has been released under an MIT license and modified from
//  its original version. The original codebase can be found at:
//  https://github.com/harps116/vue-github

// @see https://davidwalsh.name/javascript-debounce-function

const debounce = (func, wait, immediate) => {
    let timeout;
    return () => {
        let delay = () => {
            timeout = null;
            if (!immediate) {
                func()
            }
        }
        let callNow = immediate && !timeout;
        clearTimeout(timeout)
        timeout = setTimeout(delay, wait)
        if (callNow) {
            func()
        }

    }

}
export {
    debounce,
}