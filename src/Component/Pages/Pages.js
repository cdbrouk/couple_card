import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import './Pages.css';

const YoutubeIcon = () => <Icon className="icons youtube" name="youtube" 
    style={{fontSize:"40px", color:"#ff9c9c"}} />

const BlogIcon = () => <Icon className="icons blog" name="list" 
    style={{fontSize:"40px", color:"#ff9c9c"}} />

const GitIcon = () => <Icon className="icons Git" name="github" 
    style={{fontSize:"40px", color:"#ff9c9c"}} />    

class Pages extends Component{
    render(){
        return(
            <div className = "Pages__Box">
                <div className = "Pages__IconBox">
                    <div className= "Pages__Contents">
                        <a href = "https://www.youtube.com/channel/UCKMmGAZmrN8_m-mlvWY-ubQ" target="_blank">
                            {YoutubeIcon()} 
                        </a>
                    </div>
                    <br />
                    <div className= "Pages__Contents">
                        <a href = "https://blog.naver.com/shb04187" target="_blank">
                            {BlogIcon()} 
                        </a>
                    </div> 
                    <br />  
                    <div className= "Pages__Contents">
                        <a href = "https://github.com/cdbrouk" target="_blank">
                            {GitIcon()} 
                        </a>
                    </div>   
                </div>
                <div className = "Pages__IntroBox">
                    <div className= "Pages__Contents">
                        MINJUNG`S YOUTUBE
                    </div>
                    <br />
                    <br />
                    <div className= "Pages__Contents">
                        MINJUNG`S BLOG
                    </div>
                    <br />
                    <br />
                    <div className= "Pages__Contents">
                        HYUNGWUK`S GIT
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Pages;