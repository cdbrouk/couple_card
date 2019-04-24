import React, {Component} from 'react';
import './MenuButton.css';
import {Icon} from 'semantic-ui-react';

const ButtonIcon = (props) => <Icon name={props} />

class MenuButton extends Component{
    render(){
        return (
            <div className = {this.props.text} onMouseDown={()=>this.props._renderPage(this.props.index)}>
                {ButtonIcon(this.props.icon)}
                <br />                
                <span className = "MenuText">{this.props.text}</span>
            </div>
        );
    }
}

export default MenuButton;