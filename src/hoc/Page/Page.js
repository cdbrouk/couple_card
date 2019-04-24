import React, {Component} from 'react';
import Intro from '../../Component/Intro/Intro';
import Pages from '../../Component/Pages/Pages';

class Page extends Component{
    _rederPage = num => {
        switch (num){
            case 0:
                return <Intro />;
            case 1:
                return <Pages />;
            default:
                return <Intro />;
        }

    }

    render(){
        return(
            <div>
                {this._rederPage(this.props.page)}
            </div>
        );
    }
}

export default Page;