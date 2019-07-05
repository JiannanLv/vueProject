/*
 * @Description:
 * @Author: jiannan.lv
 * @Date: 2019-05-09 11:11:46
 * @LastEditTime: 2019-05-16 16:58:30
 * @LastEditors: jiannan.lv
 */
'use strict';

// saga api
const Api = {
    fetchDataSourceData({ pageSize, currentPage }) {

        return Fetch('/hysightdata/dataSource/selectAll', {
            method: 'POST',
            params: {
                currentPage,
                pageSize
            }
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchTestDataSourceConnectData(data) {

        return Fetch('/hysightdata/dataSource/testconn', {
            method: 'POST',
            data
        })
            .then(res => {

                if(res.code && typeof res.result === 'string') {

                    message.success(res.result);

                } else {

                    message.error(`连接失败  ${res.msg}`);

                }
                return res;

            })
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceInsertData(data) {

        return Fetch('/hysightdata/dataSource/insertDataSource', {
            method: 'POST',
            data
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceDelData(dsId) {

        return Fetch(`/hysightdata/dataSource/deleteDataSource/${dsId}`)
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceUpdateData(data) {

        return Fetch('/hysightdata/dataSource/updateDataSource', {
            method: 'POST',
            data
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceUpdateDsNameData({ dsId, dsName }) {

        return Fetch('/hysightdata/dataSource/rename', {
            method: 'POST',
            params: {
                dsId,
                dsName
            }
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceRegisterData(dsId) {

        return Fetch('/hysightdata/dataSet/showTableAndDataSetName', {
            method: 'POST',
            params: {
                dsId
            }
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceRegisterDimData({ dataSetId, tableName }) {

        return Fetch('/hysightdata/dataSet/listDataSet', {
            method: 'POST',
            params: {
                datasetId: dataSetId || '',
                tableName: tableName || ''
            }
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceRegisterFieldData({ dsId, tableName, dataSetId }) {

        return Fetch('/hysightdata/dataSet/listField', {
            method: 'POST',
            params: {
                dsId,
                tableName,
                dataSetId: dataSetId || ''
            }
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceInsertRegisterData({ dataSet, dataSetFieldList }) {

        console.log(dataSet, dataSetFieldList);
        return Fetch('/hysightdata/dataSet/save', {
            method: 'POST',
            data: {
                dataSet,
                dataSetFieldList
            }
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceCancelRegisterData({ dataSet, dataSetFieldList }) {

        console.log(dataSet, dataSetFieldList);
        return Fetch('/hysightdata/dataSet/nosave', {
            method: 'POST',
            data: {
                dataSet,
                dataSetFieldList
            }
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    fetchDataSourceIdData(dsId) {

        return Fetch(`/hysightdata/dataSource/selectByDs_id/${dsId}`, {
            method: 'GET'
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    }
};

export default Api;
