import { Building, Award, Users, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About PowerLink Solutions | Leading Solar Company in Bihar',
    description: 'PowerLink Solutions is Bihar\'s premier solar installation company. Government-authorized partner offering Tata, Waaree, and Adani solar products with 25-year warranty and expert installation in Katihar.',
    keywords: 'about powerlink solutions, solar company bihar, authorized solar dealer katihar, tata solar distributor bihar, solar installer purnea',
    openGraph: {
        title: 'About PowerLink Solutions - Solar Experts Since 2020',
        description: 'Government-authorized solar retailer serving 500+ customers in Bihar with top-tier brands and expert installation.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://powerlinkbihar.in/about',
    },
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-bg-deep min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Empowering Bihar with <span className="text-primary">Clean Energy</span></h1>
                    <p className="text-xl text-slate-400">PowerLink Solutions is a premier government-authorized solar agency based in Katihar, dedicated to transforming how Bihar consumes energy.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Building className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                        <p className="text-slate-400">To make renewable energy accessible and affordable for every household and business in the Seemanchal region.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Award className="w-12 h-12 text-accent-green mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Authorized Partners</h3>
                        <p className="text-slate-400">We are direct distributors for Tata Power, Waaree, and Adani Solar, ensuring you get authentic products with full warranty.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Users className="w-12 h-12 text-yellow-500 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                        <p className="text-slate-400">Our team consists of certified engineers and technicians trained to handle complex grid-connected installations.</p>
                    </div>
                </div>

                <div className="bg-primary/10 rounded-[2rem] p-8 md:p-12 border border-primary/20">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Why We Are Different</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Official NBPDCL / SBPDCL Vendors",
                            "Complete Paperwork Assistance for Subsidies",
                            "24/7 After-Sales Support in Katihar",
                            "Transparency in Pricing & Components",
                            "Zero-Hassle Net Metering Process",
                            "48-Hour Rapid Installation Guarantee"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-white font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
