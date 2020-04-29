import Function from '../../Function';

export function retrievalPrefix(url) {
    url = Function.removePrependSlashes(url);
    return Function.requestPrefix(`/retrieval/${url}`);
}