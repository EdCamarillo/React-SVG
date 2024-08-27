import React, { useEffect, useState, useMemo } from 'react'
import SvgRings from './Animations/SvgRings'
import SvgRings2 from './Animations/SvgRings2'
import SvgRings3 from './Animations/SvgRings3'
import SvgRings4 from './Animations/SvgRings4'
import { Slider } from './components/slider'
import { Card, CardContent, CardTitle } from './components/card'
import { Progress } from './components/progress'
import { Button } from './components/button'

const App: React.FC = () => {
  const [autoProgress, setAutoProgress] = useState<number>(0)
  const [manualProgress, setManualProgress] = useState<number>(0)
  const [autoProgress2, setAutoProgress2] = useState<number>(0)
  const [manualProgress2, setManualProgress2] = useState<number>(0)
  const [autoProgress3, setAutoProgress3] = useState<number>(0)
  const [manualProgress3, setManualProgress3] = useState<number>(0)
  const [autoProgress4, setAutoProgress4] = useState<number>(0)
  const [manualProgress4, setManualProgress4] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoProgress((prev) => (prev < 100 ? prev + 1 : prev))
      setAutoProgress2((prev) => (prev < 100 ? prev + 1 : prev))
      setAutoProgress3((prev) => (prev < 100 ? prev + 1 : prev))
      setAutoProgress4((prev) => (prev < 100 ? prev + 1 : prev))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const handleSliderChange = (value: number[]) => {
    setManualProgress(value[0])
  }

  const handleSliderChange2 = (value: number[]) => {
    setManualProgress2(value[0])
  }

  const handleSliderChange3 = (value: number[]) => {
    setManualProgress3(value[0])
  }

  const handleSliderChange4 = (value: number[]) => {
    setManualProgress4(value[0])
  }

  const handleButtonClick = (value: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(value)
  }

  const autoGuid = useMemo(() => crypto.randomUUID(), [])
  const manualGuid = useMemo(() => crypto.randomUUID(), [])
  const isRotating = autoProgress === 100 || autoProgress2 === 100 || autoProgress3 === 100

  return (
    <div className="flex flex-col gap-8 p-9">
      {/* SvgRings Pair */}
      <div className="flex gap-8">
        {/* Automatic SvgRings */}
        <Card className="p-8 flex-1">
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
        <Card className="p-8 flex-1">
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
      </div>

      {/* SvgRingsLine Pair */}
      <div className="flex gap-8">
        {/* Automatic SvgRingsLine */}
        <Card className="p-8 flex-1">
          <CardTitle className="font-bold">Automatic - SvgRingsLine</CardTitle>
          <CardContent className="flex flex-col gap-8">
            <div className="flex justify-center items-center">
              <div className="w-64 min:w-auto">
                <h1 className="font-medium text-2xl">Progress: {autoProgress2}%</h1>
              </div>
              <SvgRings2 progress={autoProgress2} guid={autoGuid} isRotating={isRotating} />
            </div>
            <div className="flex justify-center">
              <Progress className="w-4/5" value={autoProgress2} />
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => handleButtonClick(0, setAutoProgress2)}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Manual SvgRingsLine */}
        <Card className="p-8 flex-1">
          <CardTitle className="font-bold">Manual - SvgRingsLine</CardTitle>
          <CardContent className="flex flex-col gap-8">
            <div className="flex justify-center items-center">
              <div className="w-64 min:w-auto">
                <h1 className="font-medium text-2xl">Progress: {manualProgress2}%</h1>
              </div>
              <SvgRings2 progress={manualProgress2} guid={manualGuid} isRotating={isRotating} />
            </div>
            <div className="flex justify-center">
              <Slider
                className="w-4/5"
                defaultValue={[0]}
                max={100}
                step={1}
                value={[manualProgress2]}
                onValueChange={handleSliderChange2}
              />
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => handleButtonClick(0, setManualProgress2)}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SvgRings4 Pair */}
      <div className="flex gap-8">
        {/* Automatic SvgRingsLine */}
        <Card className="p-8 flex-1">
          <CardTitle className="font-bold">Automatic - SvgRings3</CardTitle>
          <CardContent className="flex flex-col gap-8">
            <div className="flex justify-center items-center">
              <div className="w-64 min:w-auto">
                <h1 className="font-medium text-2xl">Progress: {autoProgress3}%</h1>
              </div>
              <SvgRings3 progress={autoProgress3} guid={autoGuid} isRotating={isRotating} />
            </div>
            <div className="flex justify-center">
              <Progress className="w-4/5" value={autoProgress3} />
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => handleButtonClick(0, setAutoProgress3)}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Manual SvgRingsLine */}
        <Card className="p-8 flex-1">
          <CardTitle className="font-bold">Manual - SvgRings3</CardTitle>
          <CardContent className="flex flex-col gap-8">
            <div className="flex justify-center items-center">
              <div className="w-64 min:w-auto">
                <h1 className="font-medium text-2xl">Progress: {manualProgress3}%</h1>
              </div>
              <SvgRings3 progress={manualProgress3} guid={manualGuid} isRotating={isRotating} />
            </div>
            <div className="flex justify-center">
              <Slider
                className="w-4/5"
                defaultValue={[0]}
                max={100}
                step={1}
                value={[manualProgress3]}
                onValueChange={handleSliderChange3}
              />
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => handleButtonClick(0, setManualProgress3)}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SvgRings4 Pair */}
      <div className="flex gap-8">
        {/* Automatic SvgRings4 */}
        <Card className="p-8 flex-1">
          <CardTitle className="font-bold">Automatic - SvgRings4</CardTitle>
          <CardContent className="flex flex-col gap-8">
            <div className="flex justify-center items-center">
              <div className="w-64 min:w-auto">
                <h1 className="font-medium text-2xl">Progress: {autoProgress4}%</h1>
              </div>
              <SvgRings4 progress={autoProgress4} />
            </div>
            <div className="flex justify-center">
              <Progress className="w-4/5" value={autoProgress4} />
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => handleButtonClick(0, setAutoProgress4)}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Manual SvgRings4 */}
        <Card className="p-8 flex-1">
          <CardTitle className="font-bold">Manual - SvgRings4</CardTitle>
          <CardContent className="flex flex-col gap-8">
            <div className="flex justify-center items-center">
              <div className="w-64 min:w-auto">
                <h1 className="font-medium text-2xl">Progress: {manualProgress4}%</h1>
              </div>
              <SvgRings4 progress={manualProgress4} />
            </div>
            <div className="flex justify-center">
              <Slider
                className="w-4/5"
                defaultValue={[0]}
                max={100}
                step={1}
                value={[manualProgress4]}
                onValueChange={handleSliderChange4}
              />
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => handleButtonClick(0, setManualProgress4)}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
