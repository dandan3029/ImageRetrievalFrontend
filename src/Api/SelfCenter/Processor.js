import Function from '../../Function';
import {GET_USER_INFO, UPLOAD_IMAGE, DELETE_IMAGE} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';

export async function sendGetUserInfoAsync(email) {
    try {
        const {code, data} = await Function.getAsync(GET_USER_INFO, false, {email});
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
                message.error('获取个人信息操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('个人信息不存在');
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
                message.error('未知原因的获取个人信息失败');
                return null;
            }
        }

    } catch (e) {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}


export async function sendPostUploadImageAsync(formData) {
    try {
        const {code, data} = await Function.postAsync(UPLOAD_IMAGE, {formData}, false, {
            headers: {'Content-Type': 'multipart/form-data'}
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
                message.error('上传图片操作被拒绝');
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
                message.error('未知原因的上传图片操作失败');
                return null;
            }
        }

    } catch (e) {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}

export async function sendDeleteImage(imageId) {
    try {
        const {code, data} = await Function.postAsync(DELETE_IMAGE, false, {imageId});
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
                message.error('删除图片操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('该图片不存在');
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
                message.error('未知原因的删除图片失败');
                return null;
            }
        }

    } catch (e) {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}