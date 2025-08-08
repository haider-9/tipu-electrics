import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Shield } from "lucide-react";

export default function ContactTeam() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/Team.jpg"
                  alt="Tipu Electrics Professional Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </CardContent>
            </Card>
          </div>

          {/* Team Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Meet Our Professional Team</h2>
            <p className="text-lg text-muted-foreground">
              Our experienced team of licensed electricians is dedicated to providing 
              safe, reliable, and professional electrical services to homes and businesses 
              throughout Lahore, Pakistan.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Experienced Professionals</h3>
                  <p className="text-sm text-muted-foreground">15+ years of combined experience</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Licensed & Certified</h3>
                  <p className="text-sm text-muted-foreground">All team members are fully licensed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Safety First</h3>
                  <p className="text-sm text-muted-foreground">Committed to the highest safety standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}