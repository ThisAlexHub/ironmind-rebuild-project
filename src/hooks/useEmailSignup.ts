
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useEmailSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitEmail = async (email: string) => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('email_signups')
        .insert({
          email: email.toLowerCase().trim(),
          ip_address: null, // Could be added later if needed
          user_agent: navigator.userAgent
        });

      if (error) {
        console.error('Error saving email:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again.",
          variant: "destructive"
        });
        return false;
      }

      toast({
        title: "You're in!",
        description: "Check your email for updates.",
      });
      
      return true;
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { submitEmail, isLoading };
};
