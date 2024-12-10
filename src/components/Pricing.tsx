import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  CheckIcon, 
  XMarkIcon 
} from '@heroicons/react/24/solid'

interface PricingTier {
    monthlyPrice: string | number;
    annualPrice: string | number;
    features: { text: string; included: boolean }[];
    buttonText: string;
    featured: boolean;
    accentColor: string;
    name: string;
    description: string;
}

export function Pricing() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly')

    const pricingTiers = [
        {
            name: 'Starter',
            monthlyPrice: 9,
            annualPrice: 99,
            description: 'Perfect for small teams and startups',
            features: [
                { text: 'Up to 5 projects', included: true },
                { text: 'Basic analytics', included: true },
                { text: 'Community support', included: true },
                { text: 'Custom domain', included: false },
                { text: 'Advanced integrations', included: false }
            ],
            buttonText: 'Get Started',
            featured: false,
            accentColor: 'text-blue-500'
        },
        {
            name: 'Pro',
            monthlyPrice: 29,
            annualPrice: 299,
            description: 'Ideal for growing businesses',
            features: [
                { text: 'Unlimited projects', included: true },
                { text: 'Advanced analytics', included: true },
                { text: 'Priority support', included: true },
                { text: 'Custom domain', included: true },
                { text: 'Advanced integrations', included: true }
            ],
            buttonText: 'Go Pro',
            featured: true,
            accentColor: 'text-green-500'
        },
        {
            name: 'Enterprise',
            monthlyPrice: 'Custom',
            annualPrice: 'Custom',
            description: 'Tailored solutions for large organizations',
            features: [
                { text: 'Dedicated account manager', included: true },
                { text: 'Unlimited users', included: true },
                { text: 'Advanced security', included: true },
                { text: 'Custom integrations', included: true },
                { text: 'SLA guarantee', included: true }
            ],
            buttonText: 'Contact Sales',
            featured: false,
            accentColor: 'text-purple-500'
        }
    ]

    const calculatePrice = (tier: PricingTier) => {
        if (tier.monthlyPrice === 'Custom') return 'Custom'
        return billingCycle === 'monthly' 
            ? `$${tier.monthlyPrice}` 
            : `$${tier.annualPrice} (Save 15%)`
    }

    return (
        <div className="bg-base-200 dark:bg-base-800 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-base-content dark:text-base-100 mb-4">
                        Flexible Pricing Plans
                    </h2>
                    <p className="text-lg text-base-content/70 dark:text-base-100/80 max-w-2xl mx-auto">
                        Choose the perfect plan that scales with your business. No hidden fees, cancel anytime.
                    </p>
                    
                    {/* Billing Cycle Toggle */}
                    <div className="flex justify-center mt-6">
                        <div className="join">
                            <input 
                                type="radio" 
                                name="billing" 
                                className="btn join-item"
                                aria-label="Monthly"
                                checked={billingCycle === 'monthly'}
                                onChange={() => setBillingCycle('monthly')}
                            />
                            <input 
                                type="radio" 
                                name="billing" 
                                className="btn join-item"
                                aria-label="Annually"
                                checked={billingCycle === 'annually'}
                                onChange={() => setBillingCycle('annually')}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <div 
                            key={index} 
                            className={`
                                card 
                                bg-base-100 
                                dark:bg-base-700 
                                shadow-xl 
                                ${tier.featured 
                                    ? 'border-2 border-primary scale-105' 
                                    : 'border border-base-200 dark:border-base-600 hover:scale-105'}
                                transition-all 
                                duration-300
                            `}
                        >
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <h3 className={`text-2xl font-bold ${tier.accentColor}`}>
                                        {tier.name}
                                    </h3>
                                    {tier.featured && (
                                        <span className="badge badge-primary">Most Popular</span>
                                    )}
                                </div>
                                <p className="text-base-content/70 dark:text-base-100/80 mb-4">
                                    {tier.description}
                                </p>
                                <div className="my-4">
                                    <span className="text-4xl font-bold text-base-content dark:text-base-100">
                                        {calculatePrice(tier)}
                                    </span>
                                    <span className="text-base-content/70 dark:text-base-100/80 ml-2">
                                        {tier.monthlyPrice !== 'Custom' 
                                            ? `per ${billingCycle === 'monthly' ? 'month' : 'year'}` 
                                            : ''}
                                    </span>
                                </div>
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {tier.features.map((feature, featureIndex) => (
                                        <li 
                                            key={featureIndex} 
                                            className="flex items-center text-base-content/80 dark:text-base-100/80"
                                        >
                                            {feature.included ? (
                                                <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                                            ) : (
                                                <XMarkIcon className="w-5 h-5 mr-2 text-red-500" />
                                            )}
                                            <span className={feature.included ? '' : 'line-through'}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="card-actions justify-center mt-auto">
                                    <Button 
                                        variant={tier.featured ? 'default' : 'outline'}
                                        className="w-full"
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
