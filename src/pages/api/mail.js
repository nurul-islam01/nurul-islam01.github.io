import { NextResponse } from 'next/server';

export default async function POST(req, res) {
  console.log('CALLED');
  try {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ message: 'Hello, world!' });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
