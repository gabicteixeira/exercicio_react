import { useState, useEffect } from "react";
import styles from './Imc.module.css'

const Calculo = () => {
    let [peso, setpeso] = useState(0);
    let [altura, setaltura] = useState(0);

    const calculaImc = () => {
        
        const imc = peso / (altura * altura);

        

        if (imc < 18.5) {
            return (
                <p>Seu IMC é {parseInt(imc)} kg/m². <br/> <br />
                Você está baixo peso</p>
            )
        }

        if (imc >= 18.5, imc < 25) {
            return (
                <p>Seu IMC é {parseInt(imc)} kg/m². <br/> <br />
                Você está eutrófico</p>
            )
        }

        if (imc >= 5, imc < 30) {
            return (
                <p>Seu IMC é {parseInt(imc)} kg/m². <br/> <br />
                Você está sobrepeso</p>
            )
        }

        if (imc > 30) {
            return (
                <p>Seu IMC é {parseInt(imc)} kg/m². <br/> <br />
                Você está com obesidade</p>
            )
        }
    }

    return (
        <form className={styles.formulario}>
            <input className={styles.input} type="text" placeholder="Digite o peso"  onChange={evento => setpeso(Number(evento.target.value))} />
            <input className={styles.input} type="text" placeholder="Digite a altura" onChange={evento => setaltura(Number(evento.target.value))} />
            {calculaImc()}

        </form>
    )
}




export default Calculo;
