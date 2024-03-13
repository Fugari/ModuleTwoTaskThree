import { useState } from 'react';
import styles from './App.module.css';

export function App() {
  const [operandOne, setOperandOne] = useState('');
  const [operandTwo, setOperandTwo] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(false);

  const arrNumbers = ['1', '2', '3', '4', ' 5', '6', '7', '8', '9', '0'];

  const toGetNumber = (element) => {
    setResult(false);
    if(operandOne === '0') {
      setOperandOne('');
    }
    if(!operator) {
      setOperandOne((prev) => prev + element);
    } else {
      setOperandTwo((prev) => prev + element);
    }
  }
  const toGetOperator = (operator) => {
    setResult(false);
    setOperator(operator);
  }
  const toCalculate = () => {
    if(operandOne && operandTwo && operator) {
      let total = operator === '+' ? parseInt(operandOne) + parseInt(operandTwo) : parseInt(operandOne) - parseInt(operandTwo); 
      setOperandOne(total.toString());
      setOperandTwo('');
      setOperator('');
      setResult(true);
    }
  }
  const toReset = () => {
    setOperandOne('');
    setOperandTwo('');
    setOperator('');
  }

  return (
    <div className={styles.columnDiv}>
      
      <h1>Super Mega Strong Calculator - XXLPro!</h1>
      <div className={(result ? styles.textGreen : styles.output)}>{operandOne} {operator} {operandTwo}</div>

      <div className={styles.container}>  
        <div className={styles.main}>
          {arrNumbers.map((element, index) => (
            <button className={`${index === 9  ?styles.buttonZero : styles.button}`} onClick={() => toGetNumber(element)} key={index}>{element}</button>
          ))}
        </div>
        <div className={styles.functionBtn}>
          <button className={styles.button} onClick={toReset}>C</button>
          <button className={styles.button} onClick={() => toGetOperator('+')}>+</button>
          <button className={styles.button} onClick={() => toGetOperator('-')}>-</button>
          <button className={styles.button} onClick={toCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

