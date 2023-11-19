import react , { useState } from 'react';
import './style2.css';
import {ThemeContext} from './ThemeContext'
import { useContext } from 'react';
import './theme.css'



function Calculatore (){

    const {theme} = useContext(ThemeContext)
    console.log(theme)
    
    const [statment,setStatment] = useState('');

    const clear=()=>{

        setStatment('');
       }

    const tapecar=(e)=>{
        let firstValue=statment;
        let newValue=firstValue+e.target.value;
        setStatment(newValue);
    }

    const result=()=>{
        try {
        let exp=statment;
        let num = exp.slice(0,-1);

        if(exp.slice(-1) === '%'){
            setStatment(parseInt(num)/100);
        }
        else {
            setStatment(eval(exp));
        }
          
         }
        catch(error){
          setStatment('Bad expression')
        }
      }

    const del=()=>{
        let oldval=statment;
        let newval=oldval.slice(0,-1);
        setStatment(newval);
    }

    

    

    return (
        <>
        <div  className="container1 bg-white border border-2 shadow  mt-5" >
               <input type="text" name="" id="" value={statment}
                className=' statmentInput border-bottom border-0 text-muted fw-bold fs-4 ' /> 
                <div className="container-fluid1 " disabled>
                    <div className="row mt-2">
                        <input onClick={clear} type="button" value="C"  className='btn button border border-0 text-center text-info fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="/"  className='btn button border border-0 text-center text-info fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="*"  className='btn button border border-0 text-center text-info fw-bold fs-5 m-3 '/>
                        <input onClick={del} type="button" value="DEL"  className='btn button border border-0 text-center text-info fw-bold  del m-3 '/>
                    </div>
                    <div className="row">
                        <input onClick={(e)=>tapecar(e)} type="button" value="7"  className='btn button border border-0 text-center text-muted fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="8"  className='btn button border border-0 text-center text-muted fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="9"  className='btn button border border-0 text-center text-muted fw-bold fs-5 m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="-"  className='btn button border border-0 text-center text-info fw-bold fs-5 m-3 '/>
                    </div>
                    <div className="row">
                        <input onClick={(e)=>tapecar(e)} type="button" value="4"  className='btn button border border-0 text-center text-muted fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="5"  className='btn button border border-0 text-center text-muted fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="6"  className='btn button border border-0 text-center text-muted fw-bold fs-5 m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="+"  className='btn button border border-0 text-center text-info fw-bold fs-5 m-3 '/>
                    </div>
                    <div className="d-flex ">
                    <div>
                    <div className="row ">
                        <input onClick={(e)=>tapecar(e)} type="button" value="1"  className='btn button border border-0 text-center text-muted fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="2"  className='btn button border border-0 text-center text-muted fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="3"  className='btn button border border-0 text-center text-muted fw-bold fs-5 m-3 '/>
                        
                    </div>
                    <div className="row ">
                        <input onClick={(e)=>tapecar(e)} type="button" value="%"  className='btn button border border-0 text-center text-muted fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="0"  className='btn button border border-0 text-center text-muted fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="."  className='btn button border border-0 text-center text-muted fw-bold fs-5 m-3 '/>
                    </div>
                    </div>
                    <div className=''>
                    <input onClick={result} type="button" value="="  className='equale_btn btn button border border-0 text-center text-white bg-info fw-bold fs-5  '/>
                    </div>
                    </div>
                </div>
        </div>
        </>
    )



}

export default Calculatore;