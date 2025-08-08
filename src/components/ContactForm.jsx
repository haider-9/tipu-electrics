'use client'

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { submitContactForm } from '@/app/actions/contact';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(formData) {
    setIsSubmitting(true);
    setMessage('');
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success && result.mailtoUrl) {
        // Open email client
        window.location.href = result.mailtoUrl;
        setMessage('Thank you! Your email client should open with your message ready to send.');
        // Reset form
        document.getElementById('contact-form').reset();
      } else {
        setMessage('Sorry, there was an error processing your message. Please try calling us directly.');
      }
    } catch (error) {
      setMessage('Sorry, there was an error processing your message. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">First Name *</label>
              <Input name="firstName" placeholder="John" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name *</label>
              <Input name="lastName" placeholder="Doe" required />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <Input name="email" type="email" placeholder="john@example.com" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <Input name="phone" type="tel" placeholder="0300-1234567" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Service Type</label>
            <select name="serviceType" className="w-full p-3 border border-input rounded-md bg-background">
              <option value="General Inquiry">General Inquiry</option>
              <option value="Residential Electrical">Residential Electrical</option>
              <option value="Commercial Electrical">Commercial Electrical</option>
              <option value="Emergency Repair">Emergency Repair</option>
              <option value="Lighting Installation">Lighting Installation</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message *</label>
            <textarea 
              name="message"
              className="w-full p-3 border border-input rounded-md bg-background min-h-[120px]"
              placeholder="Please describe your electrical needs or project details..."
              required
            ></textarea>
          </div>
          
          {message && (
            <div className={`p-3 rounded-md text-sm ${
              message.includes('successfully') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}
          
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Processing...' : 'Send Message'}
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Or email us directly at{' '}
            <a href="mailto:tipu672888@gmail.com" className="text-primary hover:underline">
              tipu672888@gmail.com
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}