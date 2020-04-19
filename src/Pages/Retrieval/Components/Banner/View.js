import React from 'react';
import Style from './Style.module.scss';
import LogoSrc from '../../../../Static/Retrieval/logo.png';
import Input from 'antd/lib/input';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Config/ROUTE'

import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class Banner extends React.Component {
    constructor(props) {
        super(props)
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    handleOnSearch = (value)  => {
        if (value !== '') {
            this.props.history.push(`${PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVALRESULT]}/${value}`);
        }
    }

    render () {
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
                                <Search placeholder="请输入您想要搜索的内容" onSearch={this.handleOnSearch.bind(this)} enterButton />
                            </div>
                            <div className={Style.HotQuery}>
                                <span>热门搜索：</span>
                                <a onClick={this.handleOnSearch.bind(this, '汽车')}>汽车</a>
                                <a onClick={this.handleOnSearch.bind(this, '行人')}>行人</a>
                                <a onClick={this.handleOnSearch.bind(this, '飞盘')}>飞盘</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Banner = withRouter(Banner);
export default Banner;