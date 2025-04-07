import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Log the form data (we'll replace this with email sending later)
    console.log('Form submission received:', formData);
    
    // For now, just return a success response
    return NextResponse.json({ 
      success: true, 
      message: 'Form submission received' 
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 