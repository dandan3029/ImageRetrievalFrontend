import React from 'react';
import Style from './Style.module.scss';
import logoSrc from '../../Static/logo.png';
import Input from 'antd/lib/input';

function SearchBar (props) {
    const onSearch = props.onSearch;
    const {Search} = Input;
    return (
        <div className={Style.SearchBar}>
            <div className={Style.LogoBox}>
                <img className={Style.LogoImg} src={logoSrc}/>
            </div>
            <div className={Style.SearchBox}>
                <Search placeholder="请输入您想要搜索的内容" onSearch={onSearch} enterButton />
            </div>
        </div>)
}

export default SearchBar;