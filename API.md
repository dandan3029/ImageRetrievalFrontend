# 接口文档

## 返回格式约定

所有后台返回的数据格式均为 JSON，JSON 对应对象格式如下

```js
{
    code: Number,
    data: Object
}
```

`code` 指定这次请求的状态，前端可以根据这个编码来决定做什么。目前需要的代码如下

- 200 请求成功
- 400 请求参数不正确，比如提交的对象需要提供键 a 但提交上来的对象没有
- 401 当前请求 Session 无效
- 403 请求被拒绝，用于处理不合理的请求，例如登录密码错误或删除别人的东西
- 404 请求的内容不存在
- 409 请求存在冲突，例如注册已存在的用户名
- 500 服务器发生错误

`data` 的具体格式根据情况决定。

---

## 名词解释

- 请求体：在 GET 请求中指查询字符串内容，在 POST 请求中指请求体中内容。项目不会出现其他请求方式
- 响应体：指返回 JSON 中 data 键对应对象的内容

---

## 各个请求的详细信息 (所有请求前缀均为 `/server`)

### 精选图片列表部分（请求前缀为 `/retrieval`）

#### `/getImageCardList`

- 功能说明：获取精选图片列表
- 请求方法：GET
- 请求体：无
- 响应体：
```js
{
    imageCardList: [                  // 数组，内含多条图片信息
        {
            imageId: String,                        // 这条信息的唯一识别 ID
            imageSrc: String,                       // 图片的url
            supercategory: list,                    // 兴趣物体的大类
            description: String,                    // 图片中的兴趣物体
        },
    ]
}
```

---

### 搜索结果部分（请求前缀为 `/retrievalResult`）

#### `/getRetrievalResult`

- 功能说明：获取搜索结果的图片列表
- 请求方法：GET
- 请求体：
```js
{
    keywords: String,           // 用户搜索关键词
}
```
- 响应体：
```js
{
    retrievalResultImageCardList: [                 // 数组，内含多条图片列表信息
        {
            imageId: String,                        // 这条信息的唯一识别 ID
            imageSrc: String,                       // 图片的url
            description: String,                    // 图片中的兴趣物体
        },
    ]
}
```

--- 

### 图片详情部分（请求前缀为 `/imageDetail`）

#### `/getImageInfo`

- 功能说明：获取投保详情信息
- 请求方法：GET
- 请求体：
```js
{
    imageId: String,      // 图片信息ID
}
```
- 响应体：
```js
{
    imageId: String,                    // 这张图片的唯一识别 ID
    imageName: String,                  // 图片名称
    imageSrc: String,                   // 图片地址
    height: Number,                     // 图片高度
    width: Number,                      // 图片宽度
    objects: String,                    // 图片兴趣物体列表
}
```
- 其他说明：无

---

### 帐号相关部分（请求前缀为 `/account`）

#### `/login`

- 功能说明：登录
- 请求方法：POST
- 请求体：
```js
{
    username: String,
    password: String,
}
```
- 响应体：无
- 其他说明：
  - 如果登录成功，返回 200
  - 如果密码错误，返回 403
  - 如果帐号不存在，返回 404
  - 格式限制：
```js
{
    USERNAME: /^\w{5,20}$/,
    PASSWORD: /^\w{10,}$/,
};
```

#### `/getVerificationCode`

- 功能说明：获取验证码
- 请求方法：GET
- 请求体：
```js
{
    email: String,  // 接收验证码的邮箱
}
```
- 响应体：无
- 其他说明：无

#### `/signUp`

- 功能说明：注册
- 请求方法：POST
- 请求体：
```js
{
    username: String,           // 用户名
    password: String,           // 密码
    email: String,              // 邮箱
    verificationCode: String    // 验证码
}
```
- 响应体：无
- 其他说明：验证码错误返回 403，用户名重复返回 409

---

### 个人中心部分（请求前缀为`/personalCenter`）

#### `/getUserInfo`

- 功能说明：获取个人基本信息
- 请求方法：GET
- 请求体：
```js
{
    email: String,  //个人邮箱
}
```
- 响应体
```js
{
    username: String,      // 用户名
    password: String,      // 密码
    email: String,         // 邮箱
}
```
- 其他说明： 无

#### `/getUserImageCardLis`
- 功能说明： 获取个人图片列表
- 请求方法：GET
- 请求体： 
```js
{
    email: String,     // 邮箱
}
```
- 响应体：
```js
{
    imageCardList:[
        {
            uid: String,                   // 图片ID
            name: String,                  // 图片名称
            status: String,                // 上传状态
            url: String,                   // 图片地址
            description: String,           // 兴趣物体列表
        },
    ]
}
```
- 其他说明： 无

#### `/uploadImage`
- 功能说明： 上传个人图片
- 请求方法： POST
- 请求体：
```js
{
    email: String,              // 用户邮箱
    uid: String,                // 图片ID
    name: String,               // 图片名称
    /// 待定
}
```
- 响应体：无

--- 
