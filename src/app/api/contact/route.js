// File: app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Log the received data for debugging
    console.log('Received form data:', { name, email, message });
    
    // Validate the form data
    if (!name || !email || !message) {
      console.log('Validation failed:', { name, email, message });
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Make sure we have the API key
    console.log(process.env.AIRTABLE_API_KEY)
    if (!process.env.AIRTABLE_API_KEY) {
      console.log('Missing API key in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    // Use your actual Airtable Base ID and Table Name
    const baseId = 'appR7dAci83Vf3qLH'; // Replace with your actual Base ID
    const tableName = 'Employer'; // Replace with your actual Table Name
    
    console.log(`Connecting to Airtable: ${baseId}/${tableName}`);
    
    // Connect to Airtable
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer patdOfkJxmQ9KCbYK.9d950be646161b1eac5b3614d650812889c095402caf75871d67fd871c7e8b63`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Email: email,
          Project: message,
          SubmittedAt: new Date().toISOString(),
        },
      }),
    });
    
    // Log the Airtable response status
    console.log('Airtable response status:', response.status);
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Airtable error:', error);
      throw new Error(error.error?.message || 'Failed to submit to Airtable');
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit the form' },
      { status: 500 }
    );
  }
}