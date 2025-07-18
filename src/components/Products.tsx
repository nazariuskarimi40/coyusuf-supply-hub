import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Droplets, 
  Shield, 
  Monitor, 
  Armchair, 
  Palette,
  Building2,
  GraduationCap,
  Hospital,
  Users
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: FileText,
      title: "Office Supplies",
      description: "Paper, pens, folders, notebooks, office furniture, and more",
      items: ["Stationery", "Filing Systems", "Office Furniture", "Writing Materials"]
    },
    {
      icon: Droplets,
      title: "Cleaning & Janitorial",
      description: "Detergents, disinfectants, floor care, and cleaning tools",
      items: ["Morten Doom", "Dettol Antiseptic", "Harpic Toilet Cleaner", "Jik Bleach"]
    },
    {
      icon: Shield,
      title: "Safety & PPE",
      description: "Masks, gloves, safety goggles, and workwear",
      items: ["Protective Equipment", "Safety Gear", "Workwear", "Emergency Supplies"]
    },
    {
      icon: Monitor,
      title: "Technology & Electronics",
      description: "Printers, toner cartridges, calculators, and more",
      items: ["Printers", "Toner Cartridges", "Calculators", "Tech Accessories"]
    },
    {
      icon: Armchair,
      title: "Furniture",
      description: "Office desks, chairs, filing cabinets, and ergonomic accessories",
      items: ["Office Desks", "Ergonomic Chairs", "Filing Cabinets", "Storage Solutions"]
    },
    {
      icon: Palette,
      title: "Customized Products",
      description: "Custom-branded products to enhance your company's identity",
      items: ["Branded Items", "Custom Designs", "Corporate Gifts", "Promotional Materials"]
    }
  ];

  const targetMarkets = [
    {
      icon: Building2,
      title: "Corporate Offices",
      description: "Regular supplies to maintain daily operations"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Schools and colleges requiring teaching aids and administrative supplies"
    },
    {
      icon: Hospital,
      title: "Healthcare Sector",
      description: "Hospitals, clinics, and health centres needing medical supplies and PPE"
    },
    {
      icon: Users,
      title: "Government & NGOs",
      description: "Long-term supply contracts for various departments and initiatives"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Products Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide an extensive variety of general supplies for all your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {productCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Target Markets Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Who We <span className="text-primary">Serve</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Our trusted partners across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetMarkets.map((market, index) => (
              <div key={index} className="text-center animate-slide-in">
                <div className="bg-background rounded-xl p-6 shadow-elegant">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <market.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-bold mb-2">{market.title}</h4>
                  <p className="text-sm text-muted-foreground">{market.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;