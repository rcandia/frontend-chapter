import React, { useState } from 'react'
import { render, fireEvent, act } from 'test-utils'

const AnswerComponent = ({ result }: { result: number }) => {
  const [answer, setAnswer] = useState(-1)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div>
      <button disabled={hasAnswered} onClick={() => setAnswer(1)}>
        opção 1
      </button>
      <button disabled={hasAnswered} onClick={() => setAnswer(2)}>
        opção 2
      </button>
      <button disabled={hasAnswered} onClick={() => setAnswer(3)}>
        opção 3
      </button>
      <button disabled={hasAnswered} onClick={() => setAnswer(4)}>
        opção 4
      </button>
      <button disabled={hasAnswered} onClick={() => setAnswer(5)}>
        opção 5
      </button>
      {hasAnswered ? (
        <button onClick={() => setShowAnswer(true)}>Ver gabarito</button>
      ) : (
        <button disabled={answer < 0} onClick={() => setHasAnswered(true)}>
          Responder
        </button>
      )}
      {showAnswer && (
        <div>
          <p>Resposta do aluno: {answer}</p>
          <p>Gabarito: {result}</p>
        </div>
      )}
    </div>
  )
}

const actualResult = 4

describe('Answer component', () => {
  test('Render', async () => {
    const { getByText, queryByText } = render(<AnswerComponent result={0} />)
    expect(getByText('opção 1')).toBeVisible()
    expect(getByText('opção 2')).toBeVisible()
    expect(getByText('opção 3')).toBeVisible()
    expect(getByText('opção 4')).toBeVisible()
    expect(getByText('opção 5')).toBeVisible()
    expect(queryByText('Responder')).toBeVisible()
    expect(queryByText('Gabarito: 4')).toBeFalsy()
    await act(async () => {
      fireEvent.click(getByText('Responder'))
      await Promise.resolve()
    })
    expect(queryByText('Ver gabarito')).toBeFalsy()
  })
  test('Behavior', async () => {
    const { getByText, queryByText } = render(<AnswerComponent result={actualResult} />)
    await act(async () => {
      fireEvent.click(getByText('opção 2'))
      fireEvent.click(getByText('opção 4'))
      await Promise.resolve()
    })
    await act(async () => {
      fireEvent.click(getByText('Responder'))
      await Promise.resolve()
    })
    await act(async () => {
      fireEvent.click(getByText('opção 5'))
      await Promise.resolve()
    })
    expect(queryByText('Responder')).toBeFalsy()
    expect(queryByText('Ver gabarito')).toBeVisible()
    await act(async () => {
      fireEvent.click(getByText('Ver gabarito'))
      await Promise.resolve()
    })
    expect(queryByText('Resposta do aluno: 4')).toBeVisible()
    expect(queryByText(`Gabarito: ${actualResult}`)).toBeVisible()
  })
})
