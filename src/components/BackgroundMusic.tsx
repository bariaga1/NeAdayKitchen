import { useCallback, useEffect, useRef, useState } from 'react'
import musicSrc from '../tigrinya_ai.mp3'

const STORAGE_KEY = 'ne-aday-music-muted'
const VOLUME = 0.12

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(
    () => localStorage.getItem(STORAGE_KEY) === 'true',
  )

  const tryPlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || muted) return

    try {
      await audio.play()
    } catch {
      // Autoplay blocked until the user interacts with the page.
    }
  }, [muted])

  useEffect(() => {
    const audio = new Audio(musicSrc)
    audio.loop = true
    audio.volume = VOLUME
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (muted) {
      audio.pause()
      return
    }

    void tryPlay()

    const unlock = () => {
      void tryPlay()
    }

    window.addEventListener('pointerdown', unlock, { once: true })
    return () => window.removeEventListener('pointerdown', unlock)
  }, [muted, tryPlay])

  const toggle = () => {
    const audio = audioRef.current
    setMuted((prev) => {
      const next = !prev
      localStorage.setItem(STORAGE_KEY, String(next))

      if (audio) {
        if (next) {
          audio.pause()
        } else {
          void audio.play()
        }
      }

      return next
    })
  }

  return (
    <button
      type="button"
      className="bg-music-toggle"
      onClick={toggle}
      aria-label={muted ? 'Turn music on' : 'Turn music off'}
      aria-pressed={!muted}
      title={muted ? 'Music off' : 'Music on'}
    >
      <span className="bg-music-toggle__icon" aria-hidden>
        {muted ? '🔇' : '♫'}
      </span>
    </button>
  )
}
