import { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Collapsible from '@components/Collapsible'
import CodeTypography from '@utils/Utils'

function ES() {
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false)

  const handleAccordionChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? false : index)) // Toggle logic
  }

  const features = [
    { title: 'Arrow Functions', content: 'const greet = (name) => `Hello, ${"${name}"}`;' },
    {
      title: 'Template Literals',
      content: 'const age = 28; const message = `I am ${"${age}"} years old.`;',
    },
    {
      title: 'Destructuring',
      content: 'const person = { name: "Name", age: 28 }; const { name, age } = person;',
    },
    {
      title: 'Promises and Async/Await',
      content: 'const response = await fetch("https://api.example.com/data");',
    },
    {
      title: 'Modules (import/export)',
      content: 'export const add = (a, b) => a + b; import { add } from ./math.js;',
    },
    {
      title: 'Optional Chaining and Nullish Coalescing',
      content:
        'const user = { profile: { email: "user@example.com" } }; console.log(user?.profile?.email);',
    },
    {
      title: 'Spread and Rest Operators',
      content:
        'const arr = [1, 2, 3]; const newArr = [...arr, 4, 5]; sum(1, 2, 3); function sum(...numbers)',
    },
  ]

  return (
    <Grid container spacing={2}>
      <Typography variant='h4' gutterBottom>
        ECMA Script
      </Typography>
      <Grid size={12}>
        <Typography variant='body1'>
          ECMAScript (ES) is a standardized scripting language specification that forms the basis
          for JavaScript. It defines the core features and functionalities of the language,
          including syntax, types, objects, and how JavaScript should behave. The standard is
          maintained by ECMA International through a group called TC39 (Technical Committee 39).
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant='h5'>Common Features of Modern ECMAScript</Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={feature.title} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid size={12}>
        <Typography variant='h5'>Why ECMAScript Matters</Typography>
        <Typography variant='body1'>
          ECMAScript standardizes the behavior of JavaScript across different environments, ensuring
          compatibility and predictability. Browsers and JavaScript engines like V8 (used in Chrome
          and Node.js) implement ECMAScript features to keep up with the evolving standard.
        </Typography>
      </Grid>
      <Grid size={12}>
        {features.map((feature, index) => (
          <Collapsible
            key={index}
            title={feature.title}
            content={<CodeTypography>{feature.content}</CodeTypography>}
            expanded={expandedIndex === index}
            onChange={() => handleAccordionChange(index)}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default ES
