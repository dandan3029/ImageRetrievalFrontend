import Function from '../../Function';
import {GET_IMAGE_CARD_LIST} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';

export async function sendGetImageCardListAsync() {
    try {
        const {code, data} = await Function.getAsync(GET_IMAGE_CARD_LIST, false);
        switch(code) {
            case STATUS_CODE.OK:
            {
                return data;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                message.error('参数错误');
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                message.error('获取图片列表操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('图片列表不存在');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('与服务器资源冲突');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的获取图片列表失败');
                return null;
            }
        }

    } catch (e) {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}