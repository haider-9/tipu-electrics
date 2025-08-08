'use server'

export async function submitContactForm(formData) {
  try {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const serviceType = formData.get('serviceType');
    const message = formData.get('message');

    // For now, we'll use a simple approach that creates a mailto link
    // In production, you would integrate with an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - EmailJS
    
    const emailBody = `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service Type: ${serviceType}

Message:
${message}

---
Sent from Tipu Electrics website contact form
    `.trim();

    // Create mailto URL
    const mailtoUrl = `mailto:tipu672888@gmail.com?subject=Contact Form - ${serviceType}&body=${encodeURIComponent(emailBody)}`;
    
    // Return the mailto URL to open in client
    return { 
      success: true, 
      message: 'Opening email client...', 
      mailtoUrl 
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return { success: false, message: 'Failed to process form. Please try again.' };
  }
}