import { useCallback, useEffect, useState } from 'react'
import type { GamePhase, GameState } from '../types/game'

const stepReset = {
  stepStarted: false,
  timerRunning: false,
  timerRemainingSeconds: 0,
  timerStarted: false,
}

const initialState: GameState = {
  phase: 'title',
  recipeId: null,
  prepStepIndex: 0,
  cookStepIndex: 0,
  ...stepReset,
}

export function useGameState() {
  const [state, setState] = useState<GameState>(initialState)

  const setPhase = useCallback((phase: GamePhase) => {
    setState((s) => ({ ...s, phase }))
  }, [])

  const selectRecipe = useCallback((recipeId: string) => {
    setState({
      ...initialState,
      phase: 'intro',
      recipeId,
    })
  }, [])

  const resetGame = useCallback(() => {
    setState(initialState)
  }, [])

  const startStep = useCallback(() => {
    setState((s) => ({ ...s, stepStarted: true }))
  }, [])

  const startTimer = useCallback((durationMinutes: number) => {
    setState((s) => ({
      ...s,
      timerStarted: true,
      timerRunning: true,
      timerRemainingSeconds: durationMinutes * 60,
    }))
  }, [])

  const stopTimer = useCallback(() => {
    setState((s) => ({ ...s, timerRunning: false }))
  }, [])

  const resumeTimer = useCallback(() => {
    setState((s) => {
      if (s.timerRemainingSeconds <= 0) return s
      return { ...s, timerRunning: true }
    })
  }, [])

  const nextPrepStep = useCallback((totalSteps: number) => {
    setState((s) => {
      const nextIndex = s.prepStepIndex + 1
      if (nextIndex >= totalSteps) {
        return {
          ...s,
          phase: 'cook',
          cookStepIndex: 0,
          ...stepReset,
        }
      }
      return {
        ...s,
        prepStepIndex: nextIndex,
        ...stepReset,
      }
    })
  }, [])

  const nextCookStep = useCallback((totalSteps: number) => {
    setState((s) => {
      const nextIndex = s.cookStepIndex + 1
      if (nextIndex >= totalSteps) {
        return {
          ...s,
          phase: 'serve',
          ...stepReset,
        }
      }
      return {
        ...s,
        cookStepIndex: nextIndex,
        ...stepReset,
      }
    })
  }, [])

  const tickTimer = useCallback(() => {
    setState((s) => {
      if (!s.timerRunning || s.timerRemainingSeconds <= 0) return s
      const next = s.timerRemainingSeconds - 1
      if (next <= 0) {
        return { ...s, timerRemainingSeconds: 0, timerRunning: false }
      }
      return { ...s, timerRemainingSeconds: next }
    })
  }, [])

  useEffect(() => {
    if (!state.timerRunning) return
    const id = window.setInterval(tickTimer, 1000)
    return () => window.clearInterval(id)
  }, [state.timerRunning, tickTimer])

  return {
    state,
    setPhase,
    selectRecipe,
    resetGame,
    startStep,
    startTimer,
    stopTimer,
    resumeTimer,
    nextPrepStep,
    nextCookStep,
  }
}
