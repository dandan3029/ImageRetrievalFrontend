import Function from '../../Function';

export function retrievalResultPrefix(url) {
    url = Function.removePrependSlashes(url);
    // return Function.requestPrefix(`/retrievalResult/${url}`);
    return `/retrievalResult/${url}`;
}