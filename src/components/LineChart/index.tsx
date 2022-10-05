export function LineChart ({ title, percentage = 0, color }: any) {
  return <div className="linechart-wrapper">
    <span>
      { title }:
    </span>
    <div
      className="linechart-progressbar"
      style={{
        width: `${percentage || 0}%`,
        backgroundColor: color || '#004D61',
        height: '14px',
        borderRadius: '3px',
        transition: '.5s ease',
      }}
    />
  </div>
}
