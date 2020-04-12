import PAGE_ID from '../Config/ROUTE/PAGE_ID';

// 页面View从此导入
import Retrieval from '../Pages/Retrieval';
import ImageDetail from '../Pages/ImageDetail';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import SelfCenter from '../Pages/SelfCenter';

export default {
    [PAGE_ID.RETRIEVAL]: Retrieval,
    [PAGE_ID.IMAGEDETAIL]: ImageDetail,
    [PAGE_ID.LOGIN]: Login,
    [PAGE_ID.SIGNUP]: SignUp,
    [PAGE_ID.SELFCENTER]: SelfCenter,
}