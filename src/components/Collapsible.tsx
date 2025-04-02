import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface CollapsibleProps {
  title: string
  content: React.ReactNode
  expanded: boolean
  onChange: () => void
}

function Collapsible({ title, content, expanded, onChange }: CollapsibleProps) {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
      >
        <Typography component='span'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  )
}

export default Collapsible
