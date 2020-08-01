import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemList from './itemList'
import Summary from './summary'


class BillingCycleForm extends Component {

    calculateSummary() {
        const sun = (t, v) => {
            return t + v
        }
        return {
            sumOfCredits: this.props.credits
                .map(c => +c.value || 0)
                .reduce(sun),
            sumOfDebts: this.props.debts
                .map(d => +d.value || 0)
                .reduce(sun)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfDebts, sumOfCredits } = this.calculateSummary();

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} readOnly={readOnly}
                        type='number' label='Mẽs' cols='12 2' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} readOnly={readOnly}
                        type='number' label='Ano' cols='12 2' placeholder='Informe o ano' />
                    <Summary credit={sumOfCredits} debt={sumOfDebts}></Summary>
                    <ItemList field='credits' legend='Créditos' list={credits} cols='12 8' readOnly={readOnly} />
                    <ItemList showStatus={true} field='debts' legend='Déditos' list={debts} cols='12 8' readOnly={readOnly} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)