import Function from '../../Function';

export function imageDetailPrefix(url) {
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/imageDetail/${url}`);
}