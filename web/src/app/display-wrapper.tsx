import { useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import { fetchNui } from '../utils/fetchNui'

type DisplayWrapperProps = {
  children: React.ReactNode
}

const DisplayWrapper = ({ children }: DisplayWrapperProps) => {
  const [display, setDisplay] = useState(false)

  useEventListener('message', (event: MessageEvent) => {
    if (event.data.action === 'SET_DISPLAY') {
      setDisplay(event.data.data)
    }
  })

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (['Escape'].includes(event.code)) {
      fetchNui('close')
    }
  })

  if (!display) return null

  return children
}

export default DisplayWrapper
