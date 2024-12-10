import { 
  SparklesIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon, 
  CloudIcon 
} from '@heroicons/react/24/outline'

const featureData = [
  {
    icon: SparklesIcon,
    title: 'Seamless Integration',
    description: 'Effortlessly connect with your favorite tools and platforms.'
  },
  {
    icon: LightBulbIcon,
    title: 'Smart Automation',
    description: 'Reduce manual work with intelligent workflow automation.'
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Gain deep insights with comprehensive data visualization.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Robust Security',
    description: 'Protect your data with enterprise-grade security measures.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Scalable Solution',
    description: 'Grow your business without worrying about infrastructure limits.'
  },
  {
    icon: CloudIcon,
    title: 'Cloud Native',
    description: 'Fully optimized for cloud environments and microservices.'
  }
]

export function Features() {
    return (
        <div className="bg-base-200 dark:bg-base-800 py-16">
            <div className="hero-content text-center flex flex-col max-w-xl mx-auto">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-base-content dark:text-base-100 mb-4">
                        Powerful Features
                    </h1>
                    <p className="text-lg text-base-content/70 dark:text-base-100/80 max-w-2xl mx-auto">
                        Unlock the potential of your SaaS with our comprehensive feature set designed to accelerate your business growth.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-8">
                {featureData.map((feature, index) => (
                    <div 
                        key={index} 
                        className="card 
                            bg-base-100 
                            dark:bg-base-700 
                            border 
                            border-base-200 
                            dark:border-base-600 
                            shadow-lg 
                            dark:shadow-xl 
                            hover:shadow-xl 
                            dark:hover:shadow-2xl 
                            transition-all 
                            duration-300 
                            rounded-xl 
                            overflow-hidden"
                    >
                        <div className="card-body items-center text-center p-6">
                            <feature.icon 
                                className="
                                    h-12 
                                    w-12 
                                    text-primary 
                                    dark:text-primary-focus 
                                    mb-4 
                                    stroke-2"
                            />
                            <h2 className="card-title 
                                text-xl 
                                font-bold 
                                text-base-content 
                                dark:text-base-100 
                                mb-3">
                                {feature.title}
                            </h2>
                            <p className="
                                text-base-content/70 
                                dark:text-base-100/80 
                                text-base">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}