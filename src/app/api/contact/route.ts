import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set your SendGrid API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.error('SENDGRID_API_KEY is not defined');
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Format the email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Organization:</strong> ${formData.utilityName}</p>
      <p><strong>Program Type:</strong> ${formData.programType}</p>
      <h3>Message:</h3>
      <p>${formData.message}</p>
    `;
    
    // Email options
    const msg = {
      to: process.env.EMAIL_RECIPIENT || 'connect@familyfirstenergy.com',
      from: process.env.SENDGRID_VERIFIED_SENDER || 'connect@familyfirstenergy.com', // This must be a verified sender in SendGrid
      subject: `New Contact Form: ${formData.name} from ${formData.utilityName}`,
      html: emailContent,
      replyTo: formData.email,
    };
    
    console.log('Attempting to send email with SendGrid:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject
    });
    
    try {
      // Send the email
      await sgMail.send(msg);
      console.log('Email sent successfully with SendGrid');
      
      // Return success response
      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully' 
      });
    } catch (emailError: any) {
      console.error('Detailed SendGrid error:', {
        message: emailError.message,
        response: emailError.response ? emailError.response.body : null
      });
      
      return NextResponse.json(
        { 
          success: false, 
          message: `Failed to send email: ${emailError.message}`,
          details: emailError.message
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 