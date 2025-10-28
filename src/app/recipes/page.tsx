'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Flame, Heart, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const recipes = [
  {
    id: 1,
    title: "Classic PERi-PERi Chicken",
    description: "Learn to make our signature flame-grilled chicken at home",
    image: "/images/quarter-chicken.jpg",
    prepTime: "24 hours (marinade)",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    spiceLevel: "Hot",
  },
  {
    id: 2,
    title: "PERi-PERi Chicken Wings",
    description: "Crispy, juicy wings with authentic PERi-PERi flavor",
    image: "/images/wings.jpg",
    prepTime: "4 hours",
    cookTime: "25 mins",
    servings: 6,
    difficulty: "Easy",
    spiceLevel: "Extra Hot",
  },
  {
    id: 3,
    title: "PERi-PERi Sauce from Scratch",
    description: "Create your own authentic African Bird's Eye chili sauce",
    image: "/images/peri-sauce.jpg",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "1 bottle",
    difficulty: "Easy",
    spiceLevel: "Variable",
  },
  {
    id: 4,
    title: "Lemon & Herb Marinade",
    description: "A milder, zesty alternative for the whole family",
    image: "/images/lemon-herb.jpg",
    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: 4,
    difficulty: "Easy",
    spiceLevel: "Lemon & Herb",
  },
];

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red via-brand-orange to-brand-yellow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <ChefHat className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              PERi-PERi Recipes
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Bring the legendary flavor of Nando's to your home kitchen
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Recipe Categories */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {['All Recipes', 'Chicken', 'Sauces', 'Sides', 'Vegetarian'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all bg-brand-red text-white hover:bg-brand-red/90"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift hover-glow cursor-pointer group">
                {/* Recipe Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.jpg';
                    }}
                  />
                  {/* Difficulty Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold">
                    {recipe.difficulty}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {recipe.description}
                  </p>

                  {/* Recipe Info */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Prep: {recipe.prepTime} | Cook: {recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Serves {recipe.servings}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-brand-red dark:text-brand-orange" />
                      <span className="text-brand-red dark:text-brand-orange font-medium">
                        {recipe.spiceLevel}
                      </span>
                    </div>
                  </div>

                  <Button variant="gradient" className="w-full">
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-br from-brand-red to-brand-orange rounded-2xl p-8 md:p-12 text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get New Recipes Weekly
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss a delicious PERi-PERi recipe
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="outline" className="bg-white text-brand-red hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
