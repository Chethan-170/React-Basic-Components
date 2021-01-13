import React from 'react';
var timerID;
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTime : new Date().toLocaleTimeString(),
            isStopped : false
        }
        this.toggleTimerState = this.toggleTimerState.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.reStartTimer = this.reStartTimer.bind(this);
    }
    componentDidMount(){
        this.tick();
    }
    tick() {
        timerID=setInterval(()=>{
            this.setState((state,props)=>({
                currentTime :  new Date().toLocaleTimeString()
            }))
        },1000)
    }
    toggleTimerState(){
        this.setState((state,props)=>({
            isStopped : !state.issStopped
        })) 
    }
    stopTimer(){
        clearInterval(timerID)
        this.toggleTimerState();
    }
    reStartTimer(){
        this.tick();
        this.setState((state,props)=>({
            isStopped : false
        }))
    }
    render() {
        return ( 
            <React.Fragment>
                <div class="card text-center m-5">
                    <div class="card-header font-weight-bold text-light bg-primary">
                        Timer Component
                    </div>
                    <div class="card-body">
                        {(this.state.isStopped)
                        ?
                        <React.Fragment>
                            <h2>The Timer Stopped @ <span className="text-warning">{this.state.currentTime}</span> </h2>
                            </React.Fragment>
                        :
                        <React.Fragment>
                            <h2>{this.props.title} : <span className="text-success">{this.state.currentTime}</span> </h2>
                            </React.Fragment>
                        }</div>
                    <div class="card-footer text-muted">                        
                    {(this.state.isStopped)
                    ?
                        <button className="btn btn-md btn-outline-success" onClick={this.reStartTimer}>Resume</button>                       
                    :
                        <button className="btn btn-md btn-outline-primary" onClick={this.stopTimer}>Stop</button>                                
                    }
                    </div>
                </div>
            </React.Fragment>        
        )
    }
} 
export default Timer;
