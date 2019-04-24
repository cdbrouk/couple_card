import React, {Component} from 'react';
import MenuButton from './MenuButton';
import './Menu.css';

class Menu extends Component{
    menues = [
        {
            icon : "info",
            text : "Intro"
        },
        {
            icon : "hand point up outline",
            text : "Pages"
        }
    ]

    _renderMenues = () => {
        const menues = this.menues.map((menu, index) => {
                return <MenuButton     
                    index = {index}                
                    icon = {menu.icon}
                    text = {menu.text}
                    _renderPage = {this.props._renderPage}
                    key = {index}
                />                
            })
        return menues;
    }

    render(){
        return(
            <div className = "Menubar">
                {this._renderMenues()}
            </div>
        );
    }
}

export default Menu;