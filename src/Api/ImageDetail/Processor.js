import Function from '../../Function';
import {GET_IMAGE_INFO, DOWNLOAD_IMAGE} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';

export async function sendGetImageDetailAsync(imageId) {
    try {
        const {code, data} = await Function.getAsync(GET_IMAGE_INFO, false, {
            imageId
        });
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
                message.error('获取图片详情操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('图片详情不存在');
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
                message.error('未知原因的获取图片详情失败');
                return null;
            }
        }

    } catch (e) {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}

export async function sendGetDownloadImageAsync(email) {
    try {
        const {code, data} = await Function.getAsync(DOWNLOAD_IMAGE, false, {
            email
        });
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
                message.error('下载图片操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('图片不存在');
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
                message.error('未知原因的获取图片详情失败');
                return null;
            }
        }

    } catch (e) {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}