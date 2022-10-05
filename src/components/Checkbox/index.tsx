import './styles.css';

export function Checkbox ({ value, title, onClick }: any) {
  return <div className="checkbox-wrapper" onClick={onClick}>
    <div className="checkbox-indicator" data-checked={value} />
    { title }
  </div>
}
