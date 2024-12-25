import React, { SVGProps } from 'react'

export function LineMdExternalLink(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="48" strokeDashoffset="48" d="M11 5h-6v14h14v-6"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></animate></path><path strokeDasharray="12" strokeDashoffset="12" d="M13 11l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></animate></path><path strokeDasharray="8" strokeDashoffset="8" d="M21 3h-6M21 3v6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></animate></path></g></svg>
  )
}
export default LineMdExternalLink