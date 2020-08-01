import '../common/templates/dependencies'
import React from 'react'
import Header from "../common/templates/header";
import SideBar from '../common/templates/sidebar'
import Footer from '../common/templates/footer'
import Routers from './routers'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routers></Routers>
        </div>
        <Footer />
        <Messages />
    </div>
)