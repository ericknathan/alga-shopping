import './styles.css';

interface AppContainerProps {
  left: React.ReactNode;
  middle: React.ReactNode;
  right: React.ReactNode;
}

export function AppContainer ({ left, middle, right }: AppContainerProps) {
  return <main className="app-container-wrapper">
    <div>{ left }</div>
    <div>{ middle }</div>
    <div>{ right }</div>
  </main>
}
