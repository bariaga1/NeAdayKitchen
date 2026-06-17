import { PixelButton } from '../components/PixelButton'

interface TitleScreenProps {
  onStart: () => void
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <div className="screen title-screen">
      <div className="title-screen__decor">
        <span>🌶️</span>
        <span>🫓</span>
        <span>☕</span>
      </div>

      <h1 className="title-screen__logo">
        <span className="title-screen__neaday">Ne Aday</span>
        <span className="title-screen__kitchen">Kitchen</span>
      </h1>

      <p className="title-screen__native">ነይ ኣዳይ ኩሽን</p>
      <p className="title-screen__tagline">Guided Habesha Cooking</p>

      <div className="title-screen__mesob">
        <div className="mesob">
          <div className="mesob__lid" />
          <div className="mesob__bowl">
            <span>🍲</span>
          </div>
          <div className="mesob__base" />
        </div>
      </div>

      <PixelButton size="lg" onClick={onStart}>
        Start Cooking
      </PixelButton>

      <p className="title-screen__credit">Real cook times — your pace, your kitchen</p>
    </div>
  )
}
