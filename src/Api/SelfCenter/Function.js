import Function from '../../Function';

export function selfCenterPrefix(url) {
    url = Function.removePrependSlashes(url);
    // return Function.requestPrefix(`/selfCenter/${url}`);
    return `/selfCenter/${url}`;
}