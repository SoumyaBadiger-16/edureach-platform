import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Search, MessageCircle } from "lucide-react";

const faqItems = [
  {
    category: "Account",
    items: [
      { question: "How do I create an account?", answer: "Click the Sign Up button on the homepage and fill in your details." },
      { question: "How do I reset my password?", answer: "Click 'Forgot Password' on the login page and follow the instructions." },
      { question: "Can I change my learning interest?", answer: "Yes, you can update your interest at any time from your dashboard settings." },
    ],
  },
  {
    category: "Courses",
    items: [
      { question: "How many courses can I enroll in?", answer: "You can enroll in unlimited courses at EduReach." },
      { question: "Are certificates provided?", answer: "Yes, you receive a certificate after completing each course." },
      { question: "Can I download course materials?", answer: "Yes, all course materials are available for download." },
    ],
  },
  {
    category: "Placement",
    items: [
      { question: "What is the placement rate?", answer: "EduReach has a 92% placement rate with leading companies." },
      { question: "How does the placement simulator work?", answer: "It analyzes your skills and predicts your placement potential." },
      { question: "Which companies recruit from EduReach?", answer: "Companies like Google, Microsoft, Amazon, and many more recruit our graduates." },
    ],
  },
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const filteredFAQ = faqItems
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Help Center</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Find answers to common questions about EduReach
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-6">
          {filteredFAQ.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h2 className="text-lg font-bold text-white mb-4">{category.category}</h2>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const itemId = `${category.category}-${itemIndex}`;
                  return (
                    <motion.button
                      key={itemId}
                      onClick={() => toggleExpand(itemId)}
                      className="w-full text-left bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {item.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: expandedItems.includes(itemId) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedItems.includes(itemId) ? "auto" : 0,
                          opacity: expandedItems.includes(itemId) ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/60 mt-3 pt-3 border-t border-white/10">{item.answer}</p>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 text-center"
        >
          <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Still need help?</h3>
          <p className="text-white/60 mb-4">Can&apos;t find what you&apos;re looking for? Chat with our AI counselor for personalized assistance.</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
            Chat with Ava
          </button>
        </motion.div>
      </div>
    </div>
  );
}
