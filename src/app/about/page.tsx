'use client';

import { motion } from 'framer-motion';
import { Flame, Heart, Users, Globe, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export default function AboutPage() {
  const values = [
    {
      icon: Flame,
      title: "Passion",
      description: "PERi-PERi is the heart and soul of Nando's, bringing fire and flavor to every dish"
    },
    {
      icon: Heart,
      title: "Pride",
      description: "We take pride in our Portuguese-African heritage and flame-grilling tradition"
    },
    {
      icon: Users,
      title: "People First",
      description: "Nando's is not just about the chicken. It's about the people who make the chicken"
    },
    {
      icon: Globe,
      title: "Community",
      description: "Creating lasting happiness and positive social impact wherever we go"
    },
  ];

  const milestones = [
    {
      year: "1987",
      title: "The Beginning",
      description: "Founded in Rosettenville, Johannesburg by Robert Brozin and Fernando Duarte after discovering PERi-PERi chicken at a Portuguese Mozambican eatery"
    },
    {
      year: "1990s",
      title: "Global Expansion",
      description: "Nando's grows beyond South Africa, establishing presence in over 30 countries worldwide"
    },
    {
      year: "2010",
      title: "India Arrival",
      description: "Nando's opens its first restaurant in India, bringing authentic flame-grilled PERi-PERi chicken"
    },
    {
      year: "2024",
      title: "Growing Strong",
      description: "Operating 13 restaurants across 7 Indian cities with plans to reach 100 locations by 2034"
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red via-brand-orange to-brand-yellow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings in South Africa to becoming a global phenomenon,
              Nando's journey is fueled by passion, flavor, and the legendary PERi-PERi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h2 className="text-4xl font-bold text-brand-charcoal dark:text-white mb-6">
                The Legend of PERi-PERi
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed mb-6">
                In 1987, friends Robert Brozin and Fernando Duarte visited a Portuguese Mozambican
                takeaway named Chickenland in Rosettenville, Johannesburg. After tasting the
                flame-grilled chicken marinated in African Bird's Eye chili sauce, they were so
                captivated that they bought the restaurant for 80,000 rand.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed mb-6">
                They named it Nando's after Fernando's son and kept the secret PERi-PERi marinade recipe.
                The African Bird's Eye chili, grown in Mozambique's rich soil and blistering sunshine,
                has been used for centuries by Southeast Africans to bring fire to their food. Combined
                with lemon, garlic, and secret spices, marinated for 24 hours, and flame-grilled to
                perfection - the legendary Nando's was born.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
                Today, with over 1,200 outlets in 30 countries, Nando's continues to bring this
                authentic taste to India. Operating across Delhi, Mumbai, Bangalore, Hyderabad,
                Pune, and Chennai, we're on a mission to reach 100 restaurants by 2034, serving
                millions who crave bold, flavorful food with a kick!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover-lift">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in the Nando's story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-fire rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-charcoal dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1,200+", label: "Global Restaurants" },
              { value: "30", label: "Countries Worldwide" },
              { value: "13", label: "Locations in India" },
              { value: "24h", label: "Marinade Time" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
