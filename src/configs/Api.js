/**
 * Created by on 2016-12-23 by Wangliepng.
 */
import Vue from 'vue';
import _ from 'underscore';
import {getCookie} from './Cookie'



const myURI = "http://127.0.0.1:3000";
const rootURI = "http://118.244.212.122:8008";
// const rootURI = "http://123.196.116.135:8008";
const plainURI = "http://192.168.1.76";

const Api = {
    request({url="", params= {}, method= "jsonp"}={}){
        return Vue.http[method](url, {
            params:_.extend({},params,{
            access_token:getCookie("access_token") ?getCookie("access_token") : ''
        })
            //params
        });
    },
    get(opts){
        opts.method = "get";
        return this.request(opts);
    },
    post(opts){
        return Vue.http.post(opts.url, opts.params);
        // opts.method = "post";
        // return this.request(opts);
    },
    jsonp(opts){
        opts.method = "jsonp";
        return this.request(opts);
    }
};

/**
 *  Encapsulate `Login` interface
 *
 *  @param {String} username
 *  @param {String} password
 *
 *  @return {Promise} With Login info.
 */
export const login = params => {
    return Api.request({
        url: `${rootURI}/auth/login`,
        params
    });
    //return Vue.http.post(`${rootURI}/auth/login`, params);
};

/**
 *  Encapsulate `Logout` interface
 *
 *  @return {Promise} With Logout.
 */
export const logout = params => {
    return Api.request({
        url: `${rootURI}/auth/logout`,
        params
    });
};

/**
 *  Encapsulate `register` interface
 *
 *  @params {String} username
 *  @params {String} password
 *  @params {String} phone
 *  @params {String} key
 *  @params {String} email
 *
 *  @return {Promise} With Register.
 */
export const register = params => {
    return Api.request({
        url: `${rootURI}/auth/register`,
        params
    });
};

/**
 *  Encapsulate `nodify` interface
 *
 *  @params {String} username
 *  @params {String} new_password
 *  @params {String} current_password
 *  @params {String} phone
 *  @params {String} key
 *  @params {String} email
 *
 *  @return {Promise} With Register.
 */
export const nodifyUser = params => {
    return Api.request({
        url: `${rootURI}/auth/settings`,
        params
    });
};

/**
 *  Encapsulate `get group list` interface
 *
 *  @return {Promise} With Group List.
 */
export const getGroupList = params => {
    return Api.request({
        url: `${rootURI}/topic/grouplist`,
        params
    });
};

/**
 *  Encapsulate `topic add` interface
 *
 *  @param {String} name
 *  @param {String} topic_group_id
 *
 *  @return {Promise} With Topic add.
 */
export const topicAdd = params => {
    return Api.request({
        url: `${rootURI}/topic/add`,
        params
    });
};

/**
 *  Encapsulate `topic update` interface
 *
 *  @param {String} name
 *  @param {String} topic_group_id
 *
 *  @return {Promise} With Topic update.
 */
export const topicUp = params => {
    return Api.request({
        url: `${rootURI}/topic/update`,
        params
    });
};


/**
 *  Encapsulate `topic delete` interface
 *
 *  @param {String} id
 *
 *  @return {Promise} With Topic add.
 */
export const topicDelete = params => {
    return Api.request({
        url: `${rootURI}/topic/delete`,
        params
    });
};

/**
 *  Encapsulate `get topic list` interface
 *
 *  @return {Promise} With Topic List.
 */
export const getTopicList = params => {
    return Api.request({
        url: `${rootURI}/topic/list`,
        params
    });
};

/**
 *  Encapsulate `get Summary Detail` interface
 *
 *  @return {Promise} With Summary Detail.
 */
export const getSummaryDetail = params => {
    return Api.request({
        url: `${rootURI}/summary/detail`,
        params
    });
};

/**
 *  Encapsulate `get Sentiment Detail` interface
 *
 *  @return {Promise} With Sentiment Detail.
 */
export const getSentimentDetail = params => {
    return Api.request({
        url: `${rootURI}/sentiment/detail`,
        params
    });
};

/**
 *  Encapsulate `get Comment Detail` interface
 *
 *  @return {Promise} With Topic List.
 */
export const getCommentDetail = params => {
    return Api.request({
        url: `${rootURI}/comment/detail`,
        params
    });
};


/**
 *  Encapsulate `get mediaData ` interface
 *
 *  @return {Promise} With Topic List.
 */
export const getMediaHotspot = params => {
    return Api.request({
        url: `${rootURI}/media/hotspot`,
        params
    });
};

export const getMediaGender = params => {
    return Api.request({
        url: `${rootURI}/media/gender`,
        params
    });
};

export const getMediaWordcloud = params => {
    return Api.request({
        url: `${rootURI}/media/wordcloud`,
        params
    });
};


export const getMediaMood = params => {
    return Api.request({
        url: `${rootURI}/media/mood`,
        params
    });
};



/**
 *  Encapsulate `get Influence Popular List` interface
 *
 *  @return {Promise} With Influence Popular List.
 */
export const getPopularList = params => {
    return Api.request({
        url: `${rootURI}/influence/popularlist`,
        params
    });
};

/**
 *  Encapsulate `get Influence List` interface
 *
 *  @return {Promise} With Influence List.
 */
export const getInfluenceList = params => {
    return Api.request({
        url: `${rootURI}/influence/list`,
        params
    });
};

/**
 *  Encapsulate `get theme word cloud` interface
 *
 *  @return {Promise} With Theme Word Cloud.
 */
export const getWordCloud = params => {
    return Api.request({
        url: `${rootURI}/theme/wordcloud`,
        params
    });
};

/**
 *  Encapsulate `get theme china-map data` interface
 *
 *  @return {Promise} With Theme Word Cloud.
 */
export const getMapData = params => {
    return Api.request({
        url: `${rootURI}/theme/region`,
        params
    });
};


/**
 *  Encapsulate `get theme Trend List` interface
 *
 *  @return {Promise} With Theme Trend List.
 */
export const getTrendList = params => {
    return Api.request({
        url: `${rootURI}/theme/trendlist`,
        params
    });
};

/**
 *  Encapsulate `get theme Theme Best` interface
 *
 *  @return {Promise} With Theme Theme Best.
 */
export const getThemeBest = params => {
    return Api.request({
        url: `${rootURI}/theme/best`,
        params
    });
};


/**
 *  Encapsulate `get theme Detail` interface
 *
 *  @return {Promise} With Theme Detail.
 */
export const getThemeDetail = params => {
    return Api.request({
        url: `${rootURI}/theme/detail`,
        params
    });
};

// /**
//  *  Encapsulate `getDashboardDetail` interface
//  *
//  *  @param {String} id
//  *
//  *  @return {Promise} With dashboard detail info.
//  */
// export const getDashboardDetail = params => {
//     return Api.request({
//         url: `${rootURI}/dashboard/${params.id}`,
//         params
//     });
// };


/**
 *  Encapsulate `今日热点排行` interface
 *
 *  @param {String}
 *
 *  @return {Promise} With Get Hot Today.
 */
export const getHotToday = params => {
    return Api.request({
        //url: `${myURI}/hot/today`,
        url: `${rootURI}/hotspot/todaylist`,
        params
    });
};

/**
 *  Encapsulate `获取热点事件详情` interface
 *
 *  @param {String}
 *
 *  @return {Promise} With Get Hot Detail.
 */
export const getHotDetail = params => {
    return Api.request({
        //url: `${myURI}/hot/getDetail`,
        url: `${rootURI}/hotspot/detail`,
        params
    });
};

/**
 *  Encapsulate `get Comment List` interface
 *
 *  @return {Promise} With Comment List.
 */
export const getCommentList = params => {
    return Api.request({
        url: `${rootURI}/comment/list`,
        params
    });
};

/**
 * Dashboard Interface
 * */

/**
 *  Encapsulate `get Dashboard List` interface
 *
 *  @param  {String} user_id
 *  @return {Promise} With Dashboard List.
 */
export const getDashboardList = params => {
    return Api.request({
        url: `${rootURI}/dashboard/list`,
        params
    });
};

/**
 *  Encapsulate `get Dashboard Add` interface
 *
 *  @param  {String}  name  （必选）
 *  @param  {String}  topic  （必选）
 *  @param  {String}  subtopic
 *  @param  {String}  source
 *  @param  {String}  time_interval   时间间隔
 *  @param  {String}  time_dimension(1:天, 0:小时)
 *  @param  {String}  summary
 *  @param  {String}  sentiment
 *  @param  {String}  comment
 *  @param  {String}  influence
 *  @param  {String}  theme
 *  @return {Promise} With Dashboard Add.
 */
export const addDashboard = params => {
    return Api.request({
        url: `${rootURI}/dashboard/add`,
        params
    });
};

/**
 *  Encapsulate `get Dashboard Update` interface
 *
 *  @param  {String}  id  （必选）
 *  @param  {String}  topic  （必选）
 *  @param  {String}  subtopic
 *  @param  {String}  source
 *  @param  {String}  time_interval   时间间隔
 *  @param  {String}  time_dimension(1:天, 0:小时)
 *  @param  {String}  summary
 *  @param  {String}  sentiment
 *  @param  {String}  comment
 *  @param  {String}  influence
 *  @param  {String}  theme
 *  @return {Promise} With Dashboard Add.
 */
export const updateDashboard = params => {
    return Api.request({
        url: `${rootURI}/dashboard/update`,
        params
    });
};

/**
 *  Encapsulate `get Dashboard Delete` interface
 *
 *  @param  {String}  id
 *  @return {Promise} With Dashboard Delete.
 */
export const deleteDashboard = params => {
    return Api.request({
        url: `${rootURI}/dashboard/delete`,
        params
    });
};

/**
 *  Encapsulate `getDashboardDetail` interface
 *
 *  @param {String} id
 *
 *  @return {Promise} With dashboard detail info.
 */
export const getDashboardDetail = params => {
    return Api.request({
        url: `${rootURI}/dashboard/detail`,
        params
    });
};

/**
 *  Encapsulate `getDashboardRemoveItem` interface
 *
 *  @param {String} id (必选)
 *  @param {String} topic_id (必选)
 *  @param {Number} summary (可选)
 *  @param {Number} sentiment (可选)
 *  @param {Number} comment (可选)
 *  @param {Number} influence (可选)
 *  @param {Number} theme (可选)
 *
 *  @return {Promise} With remove dashboard item info.
 */
export const removeDashboardItem = params => {
    return Api.request({
        url: `${rootURI}/dashboard/remove`,
        params
    });
};

/**
 *  Encapsulate `Export Dashboard` interface
 *
 *  @param {String} id (必选)
 *  @param {String} imgs (必选) [{key:'summary-master', value:'base64'}]
 *
 *  @return {Promise} With remove dashboard item info.
 */
// export const exportReport = params => {
//     return Api.request({
//         url: `${rootURI}/export/report`,
//         // method: "post",
//         // credentials: true,
//         // emulateHTTP: true,
//         // emulateJSON: true,
//         params
//     });
// };
// export const exportReport = params => {
//     return Vue.http.get(`${rootURI}/export/report`, params);
// };
export const exportReport = params => {
    return Vue.http.post(`${rootURI}/export/report`, params);
};

/**  详情页面的接口1
 *  Encapsulate `getPageDetail` interface
 *
 *  @param {String} id
 *
 *  @return {Promise} With Detail detail info.
 */

export const getPageDetail = params => {
    return Api.request({
        url: `${rootURI}/article/detail`,
        params
    });
};

/**  相关文章的标题接口2
 *  Encapsulate `getArticleCorrelation` interface
 *
 *  @param {String} id
 *
 *  @return {Promise} With Detail detail info.
 */


/** 关系气泡图的接口3
 *  Encapsulate `getArticleCorrelation` interface
 *
 *  @param {String} id
 *
 *  @return {Promise} With Detail detail info.
 */

export const getArticleForward = params => {
    return Api.request({
        url: `${rootURI}/article/forwardlevel`,
        params
    });
};


/**预警监测的列表接口
 *  Encapsulate `getMonitorList` interface
 *

 */
export const getMonitorList = params => {
    return Api.request({
        url: `${rootURI}/monitor/list`,
        params
    });
};

/**预警监测的更新
 *  Encapsulate `getMonitorList` interface
 *

 */
export const getMonitorUp = params => {
    return Api.request({
        url: `${rootURI}/monitor/update`,
        params
    });
};
/**预警监测的删除
 *  Encapsulate `getMonitorList` interface
 *

 */
export const getMonitorDel = params => {
    return Api.request({
        url: `${rootURI}/monitor/remove`,
        params
    });
};


/**预警监测的添加
 *  Encapsulate `getMonitorList` interface
 *

 */
export const getMonitorAdd = params => {
    return Api.request({
        url: `${rootURI}/monitor/add`,
        params
    });
};




/**品牌印象的气泡接口
 *  Encapsulate `getMonitorList` interface
 *

 */
export const getBubblChart = params => {
    return Api.request({
        url: `${rootURI}/theme/bubble`,
        params
    });
};



/**监测设置的情绪选择的接口
 *  Encapsulate `getCategroy` interface
 *
 */
export const getCategroy = params => {
    return Api.request({
        url: `${rootURI}/monitor/category`,
        params
    });
};
/**首页实时热点话题的接口
 *  Encapsulate `getRealList` interface
 */
export const getRealList = params => {
    return Api.request({
        url: `${rootURI}/hotspot/real`,
        params
    });
};

/**首页实时热点话题的接口
 *  Encapsulate `getTodayList` interface
 */
export const getTodayList = params => {
    return Api.request({
        url: `${rootURI}/hotspot/today`,
        params
    });
};

/**
 *  Encapsulate `get upload token` interface
 *
 *  @return {Promise} With upload token.
 */
export const uploadToken = params => {
    return Api.request({
        url: `${rootURI}/upload/token`,
        params
    });
};






