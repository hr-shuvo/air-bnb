'use client';

import React from 'react'

function error({error}: {error: Error}) {
  return (
    <div>there was an error.</div>
  )
}

export default error