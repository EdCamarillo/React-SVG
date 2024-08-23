import React, { useEffect, useState, useMemo } from 'react'
import SvgRings from './Animations/SvgRings'
import SvgRingsLine from './Animations/SvgRingsLine'
import { Slider } from './components/slider'
import { Card, CardContent, CardTitle } from './components/card'
import { Progress } from './components/progress'
import { Button } from './components/button'

const App: React.FC = () => {
  const [autoProgress, setAutoProgress] = useState<number>(0)
  const [manualProgress, setManualProgress] = useState<number>(0)
  const [autoProgressLine, setAutoProgressLine] = useState<number>(0)
  const [manualProgressLine, setManualProgressLine] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoProgress((prev) => (prev < 100 ? prev + 1 : prev))
      setAutoProgressLine((prev) => (prev < 100 ? prev + 1 : prev))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const handleSliderChange = (value: number[]) => {
    setManualProgress(value[0])
  }

  const handleSliderChangeLine = (value: number[]) => {
    setManualProgressLine(value[0])
  }

  const handleButtonClick = (value: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(value)
  }

  const autoGuid = useMemo(() => crypto.randomUUID(), [])
  const manualGuid = useMemo(() => crypto.randomUUID(), [])
  const isRotating = autoProgress === 100 || autoProgressLine === 100

  return (
    <div className="flex flex-col gap-8 p-9">
      {/* Automatic SvgRings */}
      <Card className="p-8">
        <CardTitle className="font-bold">Automatic</CardTitle>
        <CardContent className="flex flex-col gap-8">
          <div className="flex justify-center items-center">
            <div className="w-64 min:w-auto">
              <h1 className="font-medium text-2xl">Progress: {autoProgress}%</h1>
            </div>
            <SvgRings progress={autoProgress} />
          </div>
          <div className="flex justify-center">
            <Progress className="w-4/5" value={autoProgress} />
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => handleButtonClick(0, setAutoProgress)}
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Manual SvgRings */}
      <Card className="p-8">
        <CardTitle className="font-bold">Manual</CardTitle>
        <CardContent className="flex flex-col gap-8">
          <div className="flex justify-center items-center">
            <div className="w-64 min:w-auto">
              <h1 className="font-medium text-2xl">Progress: {manualProgress}%</h1>
            </div>
            <SvgRings progress={manualProgress} />
          </div>
          <div className="flex justify-center">
            <Slider
              className="w-4/5"
              defaultValue={[0]}
              max={100}
              step={1}
              value={[manualProgress]}
              onValueChange={handleSliderChange}
            />
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => handleButtonClick(0, setManualProgress)}
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Automatic SvgRingsLine */}
      <Card className="p-8">
        <CardTitle className="font-bold">Automatic - SvgRingsLine</CardTitle>
        <CardContent className="flex flex-col gap-8">
          <div className="flex justify-center items-center">
            <div className="w-64 min:w-auto">
              <h1 className="font-medium text-2xl">Progress: {autoProgressLine}%</h1>
            </div>
            <SvgRingsLine progress={autoProgressLine} guid={autoGuid} isRotating={isRotating} />
          </div>
          <div className="flex justify-center">
            <Progress className="w-4/5" value={autoProgressLine} />
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => handleButtonClick(0, setAutoProgressLine)}
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Manual SvgRingsLine */}
      <Card className="p-8">
        <CardTitle className="font-bold">Manual - SvgRingsLine</CardTitle>
        <CardContent className="flex flex-col gap-8">
          <div className="flex justify-center items-center">
            <div className="w-64 min:w-auto">
              <h1 className="font-medium text-2xl">Progress: {manualProgressLine}%</h1>
            </div>
            <SvgRingsLine progress={manualProgressLine} guid={manualGuid} isRotating={isRotating} />
          </div>
          <div className="flex justify-center">
            <Slider
              className="w-4/5"
              defaultValue={[0]}
              max={100}
              step={1}
              value={[manualProgressLine]}
              onValueChange={handleSliderChangeLine}
            />
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => handleButtonClick(0, setManualProgressLine)}
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
