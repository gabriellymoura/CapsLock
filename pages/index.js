import styles from '../css/styles.module.css';
import React from 'react';

class Input extends React.Component{
    constructor(){
        super();
        this.state = {
            nome: ""
        };

        this.onChange = (evento) =>{
            this.setState({nome: evento.target.value});
        };
    }

    render(){
        return(
            <div>
               <div className = {styles.text}>
                    Seu texto:
                    <br/>
                </div>
                <div>         
                    <input className={styles.input} name = 'nome' value = {this.state.nome} onChange = {this.onChange} type = 'text'/>
                </div>
                <div className = {styles.text}>
                    Texto em CapsLock:
                </div>
                <div className = {styles.value}>
                <br/>
                    <CapsLock >{this.state.nome}</CapsLock>
                </div>
                
            </div>
        )
    }

}


function CapsLock(props){ 
    const texto_input = props.children;
    const texto_output = texto_input.toUpperCase();
    return <div> {texto_output} </div>
}

function Home(){
    return(
        <div className = {styles.main}>
            <div>
                <Input/>
            </div>
        </div>
    )
}

export default Home;
