import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from '../common/templates/content-header'
import Content from '../common/templates/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabContent from "../common/tab/tabContent";
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import { selectTabs, showTabs } from '../common/tab/tabActions'
import List from './billingCycleList'
import Form from './billingCycleForm';
import { create, update, excluir } from "./billingCycleActions";

class BillingCicle extends Component {

    componentWillMount() {
        console.log("componentWillMount");
        this.props.selectTabs('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro'></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form submitLabel='Incluir' submitClass='primary' onSubmit={this.props.create}></Form>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form submitLabel='Alterar' submitClass='info' onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form submitLabel='Exluir' submitClass='danger' readOnly={true} onSubmit={this.props.excluir} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTabs, showTabs, create, update, excluir }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCicle);  