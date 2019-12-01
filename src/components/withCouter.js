import React  from 'react';

const withCounter = (WrappedComponent, steps) => {
    class WithCounter extends React.Component{
        constructor(props, context) {
            super(props, context);
            this.state={
                count: 0
            }
            this.counterHandler = this.counterHandler.bind(this)
        }

        counterHandler(){
            this.setState(prevState=>{
                return {count: prevState.count + steps}
            })
        }
       render() {
           return (
               <WrappedComponent count={this.state.count} counterHandler={this.counterHandler} {...this.props}/>
           );
       }
    }
    return WithCounter;
}

export default withCounter;