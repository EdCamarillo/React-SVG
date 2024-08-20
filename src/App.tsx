import React, { useEffect, useState } from 'react'
import SvgRings from './Animations/SvgRings'
import { Slider } from './components/slider'
import { Card, CardContent, CardTitle } from './components/card'

const App: React.FC = () => {
  const [autoProgress, setAutoProgress] = useState<number>(0)
  const [manualProgress, setManualProgress] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoProgress((prev) => (prev < 100 ? prev + 1 : prev))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const handleSliderChange = (value: number[]) => {
    setManualProgress(value[0])
  }

  return (
    <div className='flex flex-col gap-24 p-32'>
      <Card className='p-8'>
        <CardTitle className='font-bold'>Automatic</CardTitle>
        <CardContent>
          <div className='flex justify-center items-center'>
            <h1 className='font-medium text-2xl justify-self-center'>Progress: {autoProgress}%</h1>
            <SvgRings progress={autoProgress} />
          </div>
        </CardContent>
      </Card>
      <Card className='p-8'>
        <CardTitle className='font-bold'>Manual</CardTitle>
        <CardContent className='flex flex-col gap-8'>
          <div className='flex justify-center items-center'>
            <h1 className='font-medium text-2xl justify-self-center'>Progress: {manualProgress}%</h1>
            <SvgRings progress={manualProgress} />
          </div>
          <div className='flex justify-center'>
            <Slider className='w-4/5' defaultValue={[0]} max={100} step={1} onValueChange={handleSliderChange} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
