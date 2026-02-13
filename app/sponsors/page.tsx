import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  BarChart3,
  Users,
  Shield,
  Calendar,
  DollarSign,
  Handshake,
  Eye,
  CheckCircle2
} from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Targeted Campaigns",
    description: "Reach specific demographics and talent categories with precision targeting."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track campaign performance, engagement rates, and ROI in real-time."
  },
  {
    icon: Users,
    title: "Talent Database Access",
    description: "Browse and connect with verified talents across multiple agencies."
  },
  {
    icon: Calendar,
    title: "Event Sponsorship",
    description: "Sponsor pageants, casting events, and talent showcases for maximum exposure."
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "All talents are verified, ensuring your brand associates with quality professionals."
  },
  {
    icon: DollarSign,
    title: "Flexible Budgeting",
    description: "Set budgets, track spending, and optimize campaigns for better results."
  }
]

const benefits = [
  "Direct access to verified talent database",
  "Real-time campaign performance tracking",
  "Secure payment processing and invoicing",
  "Brand safety with verified talent profiles",
  "Custom sponsorship packages available",
  "Dedicated account management support"
]

const sponsorshipTypes = [
  {
    title: "Event Sponsorship",
    description: "Sponsor pageants, fashion shows, and talent competitions",
    icon: "🏆"
  },
  {
    title: "Talent Partnerships",
    description: "Partner directly with individual talents for campaigns",
    icon: "🤝"
  },
  {
    title: "Agency Collaborations",
    description: "Work with agencies for large-scale talent campaigns",
    icon: "🏢"
  },
  {
    title: "Platform Advertising",
    description: "Advertise your brand across the platform to reach all users",
    icon: "📢"
  },
  {
    title: "Custom Campaigns",
    description: "Create bespoke campaigns tailored to your brand needs",
    icon: "🎯"
  },
  {
    title: "Content Creation",
    description: "Commission content from talents for your marketing needs",
    icon: "📸"
  }
]

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              For Sponsors & Brands
            </Badge>
            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Connect with Top Talent
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground lg:text-xl">
              Reach verified talents and agencies through our comprehensive platform.
              Create targeted campaigns, sponsor events, and build meaningful
              partnerships that drive results.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Sponsoring
              </Button>
              <Button size="lg" variant="outline">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Types */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Sponsorship Opportunities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Multiple ways to connect with talent and grow your brand
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sponsorshipTypes.map((type, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{type.icon}</div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Powerful Sponsorship Tools
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to run successful talent campaigns
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Why Brands Choose Our Platform
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join leading brands already connecting with top talent through our platform.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Ready to Partner?</CardTitle>
                  <CardDescription>
                    Connect with verified talents and agencies today
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg">
                    Start Sponsoring
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Request Demo
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Custom packages available • Dedicated support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}