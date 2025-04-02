import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Button, Typography, useTheme } from '@mui/material'

function Closures() {
  const theme = useTheme()
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)

  function handleClick() {
    setCount(count + 1) // Closure captures the `count` variable
    // handleClick forms a closure over the count variable.
    // Even though setCount is asynchronous and doesn't update immediately, the function retains access to the current count due to the closure.
  }

  useEffect(() => {
    function outerFunction() {
      let count = 0

      return function innerFunction() {
        count++
        console.log(`Count: ${count}`)
      }
    }

    const increment = outerFunction()
    increment() // In this example, innerFunction forms a closure over the count variable, allowing it to "remember" and update count even after outerFunction has returned.
  }, [])

  useEffect(() => {
    // The closure in setInterval captures the initial seconds value (0) and keeps incrementing it without reflecting the updated value.
    // const interval = setInterval(() => {
    //   setSeconds(seconds + 1) // Stale closure: captures initial `seconds` value (0)
    // }, 1000)

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1) // Uses latest state
    }, 1000)
    //The setSeconds function inside setInterval now uses the latest prevSeconds instead of the initial value, avoiding the stale closure issue.

    return () => clearInterval(interval)
  }, [])

  return (
    <Grid container spacing={2}>
      <Typography variant='h4' gutterBottom>
        Closures
      </Typography>
      <Grid size={12}>
        <Typography variant='body1' gutterBottom>
          Closures are a foundational concept in JavaScript that plays an essential role in React.
          They allow a function to "remember" the scope in which it was created, even after that
          scope has exited. In React, closures become particularly useful for managing component
          state, handling event listeners, and maintaining encapsulated data in hooks.
        </Typography>
        <Typography variant='body1'>
          A closure is created when a function retains access to the variables in its lexical scope
          (the environment in which it was created), even after that scope has been destroyed.
        </Typography>
      </Grid>
      <Grid size={12}>
        <Button
          variant='contained'
          onClick={handleClick}
          sx={{ backgroundColor: theme.palette.customAccent.main }}
        >
          Count: {count}
        </Button>
        <Typography variant='body1' mt={1}>
          Seconds: {seconds}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Closures
