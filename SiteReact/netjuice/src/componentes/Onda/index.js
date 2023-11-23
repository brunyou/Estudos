import Wave from 'react-wavify'

const Onda = () => {
    return (
        <Wave fill='#0099ff'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.3,
          points: 3
        }}
  />
    )
}

export default Onda