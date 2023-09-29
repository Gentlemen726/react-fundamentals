import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

type OperationFn = (left: number, right: number) => number
type Operator = '+' | '-' | '/' | '*'
const operations: Record<Operator, OperationFn> = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
}

type CalculatorProps = {
  left?: number
  operator?: keyof typeof operations
  right?: number
}
function Calculator({left = 0, operator = '+', right = 0}: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator left={1} right={2} />
      <Calculator operator="-" />
      <Calculator left={1} operator="*" />
      <Calculator operator="/" right={2} />
      <Calculator operator="." right={2} />
    </div>
  )
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
