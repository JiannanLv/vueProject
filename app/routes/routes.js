/*
 * @Author: jiannan.lv
 * @Date: 2019-05-09 13:46:37
 * @Last Modified by: jiannan.lv
 * @Last Modified time: 2019-05-09 13:59:42
 */

import Home from 'app/containers/Home/home.vue';
import Echarts from 'app/containers/Echarts/echarts.vue';
import ComCon from 'app/containers/ComCon/comCon.vue';
import DragCon from 'app/views/Drag/dragCon.vue';
// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
const appRouter = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: Echarts
    },
    {
        path: '/comCon',
        name: 'comCon',
        component: ComCon
    },
    {
        path: '/dragCon',
        name: 'dragCon',
        component: DragCon
    },
    {
        path: '/',
        redirect: 'dragCon'
    }
    // {
    //     path: '', // 这个地址未定义的，定向到visualMonitor
    //     name: '',
    //     component: Layout,
    //     children: [
    //         {
    //             path: '/robot',
    //             title: 'robot',
    //             component: Robot,
    //             meta: {
    //                 title: 'AI机器人'
    //             },
    //             children: [
    //                 {
    //                     path: 'visualMonitor',
    //                     name: 'visualMonitor',
    //                     title: 'visualMonitor',
    //                     component: VisualMonitor,
    //                     meta: {
    //                         title: '可视化监控'
    //                     }
    //                 },
    //                 {
    //                     path: 'dataManage',
    //                     name: 'dataManage',
    //                     title: 'dataManage',
    //                     component: DataManage,
    //                     meta: {
    //                         title: '数据管理'
    //                     }
    //                 },
    //                 {
    //                     path: 'taskManage',
    //                     name: 'taskManage',
    //                     title: 'taskManage',
    //                     component: TaskManage,
    //                     meta: {
    //                         title: '任务管理'
    //                     }
    //                 },
    //                 {
    //                     path: 'resultManage',
    //                     name: 'resultManage',
    //                     title: 'resultManage',
    //                     component: ResultManage,
    //                     meta: {
    //                         title: '拨打结果管理'
    //                     }
    //                 },
    //                 {
    //                     path: 'companyManage',
    //                     name: 'companyManage',
    //                     title: 'companyManage',
    //                     component: CompanyManage,
    //                     meta: {
    //                         title: '案源机构管理'
    //                     }
    //                 },
    //                 {
    //                     path: 'strategySetting',
    //                     name: 'strategySetting',
    //                     title: 'strategySetting',
    //                     component: StrategySetting,
    //                     meta: {
    //                         title: '拨打策略管理'
    //                     }
    //                 },
    //                 // {
    //                 //   path: 'processSetting',
    //                 //   name: 'processSetting',
    //                 //   title: 'processSetting',
    //                 //   component: ProcessSetting,
    //                 //   meta: {
    //                 //     title: '拨打流程管理'
    //                 //   }
    //                 // },
    //                 {
    //                     path: 'dataReport',
    //                     name: 'dataReport',
    //                     title: 'dataReport',
    //                     component: DataReport,
    //                     meta: {
    //                         title: '数据报表'
    //                     }
    //                 },
    //                 {
    //                     path: '/',
    //                     redirect: 'visualMonitor'
    //                 }
    //             ]
    //         },
    //         {
    //             path: '/ivr',
    //             title: 'ivr',
    //             component: Ivr,
    //             meta: {
    //                 title: '智能IVR'
    //             },
    //             children: [
    //                 {
    //                     path: 'iDialManage',
    //                     name: 'iDialManage',
    //                     title: 'iDialManage',
    //                     component: IDialManage,
    //                     meta: {
    //                         title: 'IVR管理'
    //                     }
    //                 },
    //                 {
    //                     path: 'iResultManage',
    //                     name: 'iResultManage',
    //                     title: 'iResultManage',
    //                     component: IResultManage,
    //                     meta: {
    //                         title: '拨打结果管理'
    //                     }
    //                 },
    //                 {
    //                     path: '/',
    //                     redirect: 'iDialManage'
    //                 }
    //             ]
    //         },
    //         {
    //             path: '/',
    //             redirect: 'robot'
    //         },
    //         {
    //             path: '/*',
    //             name: '404',
    //             title: 'Error404',
    //             component: Error404
    //         }
    //     ]
    // }
];
// 所有上面定义的路由都要写在下面的routers里
export default [
    ...appRouter
];
