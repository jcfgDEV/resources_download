

import { NextResponse } from 'next/server';


export const config = {
    runtime: 'edge'
}

export default async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}