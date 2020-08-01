import axios from "axios";
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTabs } from "../common//tab/tabActions";
const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    };
}

function update(valeus) {
    return submit(valeus, 'put')
}

function create(valeus) {
    return submit(valeus, 'post')
}

function excluir(values) {
    return submit(values, 'delete')
}

const submit = (values, method) => {
    console.log(method);
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso')
                dispatch([/**multi possibilita um array de dispatch */
                    init()
                    // resetForm('billingCycleForm'),
                    // getList(),
                    // selectTabs('tabList'),
                    // showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => {
                    toastr.error('Erro', error)
                });
            })
    }
}

const showUpdate = (billingCycle) => {
    console.log("showUpdate");
    return dispatch => {
        dispatch([
            selectTabs('tabUpdate'),
            showTabs('tabUpdate'),
            initialize('billingCycleForm', billingCycle)
        ])
    }
}

const showDelete = (billingCycle) => {
    console.log("showDelete");
    return dispatch => {
        dispatch([
            selectTabs('tabDelete'),
            showTabs('tabDelete'),
            initialize('billingCycleForm', billingCycle)
        ])
    }
}

const init = () => {
    console.log("init");

    return dispatch => {
        dispatch([
            showTabs('tabList', 'tabCreate'),
            selectTabs('tabList'),
            getList(),
            initialize('billingCycleForm', INITIAL_VALUES)
        ])
    }
}

export { getList, showUpdate, showDelete, create, update, init, excluir };