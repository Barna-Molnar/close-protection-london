import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      await storage.saveContactSubmission(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Thank you for your inquiry. We will contact you shortly." 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data and try again." 
        });
      } else {
        console.error("Unexpected error in contact form submission:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
