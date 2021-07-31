import React, { useState } from 'react'

const Heading = ( {text} ) => <h2>{text}</h2>

const Button = ( {text, onClick} ) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ( {goodAmount, neutralAmount, badAmount} ) => {
  if (goodAmount + neutralAmount + badAmount === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={goodAmount} />
        <StatisticLine text='Neutral' value={neutralAmount} />
        <StatisticLine text='Bad' value={badAmount} />
        <StatisticLine text='Total' value={goodAmount + neutralAmount + badAmount} />
        <StatisticLine text='Average score' value={(goodAmount - badAmount) / (goodAmount + neutralAmount + badAmount)} />
        <StatisticLine text='Positive feedback' value={(goodAmount / (goodAmount + neutralAmount + badAmount)) * 100} />
      </tbody>
    </table>
  )
}

const StatisticLine = ( {text, value} ) => (
  <tr>
    <td>{text}:</td>
    <td>{value}{text === 'Positive feedback' ? '%' : ''}</td>
  </tr>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Heading text='Give feedback' />
      <Button text='Good' onClick={handleGoodClick} />
      <Button text='Neutral' onClick={handleNeutralClick} />
      <Button text='Bad' onClick={handleBadClick} />
      <Heading text='Statistics' />
      <Statistics 
        goodAmount={good}
        neutralAmount={neutral}
        badAmount={bad}
      />
    </div>
  )
}

export default App