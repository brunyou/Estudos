import Wave from 'react-wavify'

const Onda = (props) => {
    return (
        <Wave fill={props.cor}
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