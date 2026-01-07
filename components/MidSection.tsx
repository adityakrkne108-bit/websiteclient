import { Award, Users, TrendingUp, Clock, ShieldCheck, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MidSection() {
    const benefits = [
        {
            icon: <Award size={32} className="lg:w-10 lg:h-10" />,
            title: "Authorized Retailer",
            description: "Official partner with Tata Power Solar, Waaree, and Adani. We guarantee genuine products with full manufacturer warranty.",
            badge: "Verified Distributor",
            color: "blue"
        },
        {
            icon: <Users size={32} className="lg:w-10 lg:h-10" />,
            title: "500+ Happy Customers",
            description: "Over 500 residential and commercial installations across Katihar, Purnea, and surrounding districts with 98% satisfaction rate.",
            badge: "5-Star Rated",
            color: "green"
        },
        {
            icon: <TrendingUp size={32} className="lg:w-10 lg:h-10" />,
            title: "90% Bill Reduction",
            description: "Our customers see an average of 85-95% reduction in electricity bills with net metering and proper system sizing.",
            badge: "Proven ROI in 3-4 Years",
            color: "yellow"
        },
        {
            icon: <Clock size={32} className="lg:w-10 lg:h-10" />,
            title: "7-Day Installation",
            description: "From site survey to commissioning, we complete standard residential installations in just 7 working days.",
            badge: "Fast & Efficient",
            color: "purple"
        },
        {
            icon: <ShieldCheck size={32} className="lg:w-10 lg:h-10" />,
            title: "25-Year Warranty",
            description: "All solar panels come with 25-year performance warranty, and inverters with 10-year comprehensive coverage.",
            badge: "Long-term Protection",
            color: "orange"
        },
        {
            icon: <Wrench size={32} className="lg:w-10 lg:h-10" />,
            title: "Lifetime Support",
            description: "Dedicated local support team in Katihar for maintenance, troubleshooting, and system monitoring throughout the system life.",
            badge: "24/7 Assistance",
            color: "red"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-bg-deep to-[#0B1120]">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm lg:text-base mb-3 block">Why PowerLink</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8">
                        Your Trusted Solar Partner in <span className="text-gradient">Bihar</span>
                    </h2>
                    <p className="text-slate-400 max-w-4xl mx-auto text-lg lg:text-xl xl:text-2xl leading-relaxed">
                        As Bihar&apos;s leading solar retailer, we provide end-to-end solar solutions from consultation to installation and maintenance. Our expert team ensures maximum savings and seamless service.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-16 lg:mb-20 animate-fade-in-up">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 xl:p-12 hover:bg-white/10 transition-all group hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-${benefit.color}-500/20 rounded-2xl lg:rounded-3xl flex items-center justify-center text-${benefit.color}-400 mb-6 lg:mb-8 group-hover:scale-110 transition-transform border border-${benefit.color}-500/30`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">{benefit.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-4 lg:mb-6 text-base lg:text-lg">
                                {benefit.description}
                            </p>
                            <div className={`flex items-center gap-2 text-${benefit.color}-400 text-sm lg:text-base font-semibold`}>
                                <CheckCircle2 size={18} />
                                <span>{benefit.badge}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 lg:gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-primary hover:bg-primary-hover text-white font-bold text-base lg:text-lg xl:text-xl rounded-full transition-all shadow-glow-blue hover:scale-105"
                    >
                        Learn More About Us
                        <ArrowRight size={20} className="lg:w-6 lg:h-6" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
