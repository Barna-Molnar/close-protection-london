import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <SEO
        title="404 - Page Not Found | AB Vip Risk Management"
        description="The page you are looking for cannot be found."
        canonicalPath="/404"
        robots="noindex, follow"
      />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
            Return to homepage
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
