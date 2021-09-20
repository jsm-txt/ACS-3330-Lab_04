import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { randFunc, randMonke } from './actions'

function FunFunction() {
  const selector  = useSelector(state => state.rootReduc)
  const dispatcher = useDispatch()
  return (
    <div>
      {selector}
      <button
        onClick={() => dispatcher(randFunc("something!"))}
      >change text to something</button>
      {/* <button
        onClick={() => dispatcher(randMonke("mon"))}
      >change text to original</button> */}
    </div>
  )
}

export default FunFunction