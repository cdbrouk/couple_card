import React, {Component} from 'react';
import './Intro.css';

function _getToday(){
    const date = new Date();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const year = date.getFullYear();
    const today = new Date(year,month,day);
    return today;
}

function DDayCal(){
    const strtDate = "2016-06-19"
    const arr = strtDate.split('-');
    const strtDay = new Date(arr[0],arr[1],arr[2]);
    const today = _getToday();
    const Diff = today-strtDay;
    const curDay = 24*60*60*1000;
    const DDay = parseInt(Diff/curDay);
    return DDay+1;
}

class Intro extends Component{
    render(){
        return(
            <div className = "Intro__Box">
                <div className = "Intro__ImageBox">
                    <img 
                        className="Intro__Image" 
                        src={require('../../Image/mingbbu.jpg')} 
                        alt='IntroImage'
                    />                    
                </div>
                <div className = "Intro__IntroBox">
                    <div className= "Intro__Title">
                        MINGBBU COUPLE
                    </div>
                    <div className= "Intro__Contents">
                        SONG MINJUNG & CHOI HYUNGWUK
                    </div>
                    <div className= "Intro__Contents">
                        2016. 06. 19~ 
                    </div>
                    <div className= "Intro__Contents">
                        {DDayCal()}일째
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Intro;