import React from 'react';
import Style from './Style.module.scss';
import LogoSrc from '../../../../Static/Retrieval/logo.png';
import Input from 'antd/lib/input';

function Banner () {
    const { Search } = Input;
    return (
        <div className={Style.Banner}>
            <div className={Style.MainBox}>
                <div className={Style.SkinBox}></div>
                <div className={Style.ContentBox}>
                    <div className={Style.HomeSearch}>
                        <div className={Style.Logo}>
                            <img src={LogoSrc} />
                        </div>
                        <div className={Style.Search}>
                            <Search placeholder="请输入您想要搜索的内容" onSearch={value => console.log(value)} enterButton />
                        </div>
                        <div className={Style.HotQuery}>
                            <span>热门搜索：</span>
                            <a>汽车</a>
                            <a>行人</a>
                            <a>飞盘</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;