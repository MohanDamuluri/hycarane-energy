"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  Menu,
  X,
  Target,
  Eye,
  Heart,
  Shield,
  Zap,
  Fuel,
  Leaf,
  Factory,
  Settings,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Atom,
  Droplets,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.jpg"
                alt="Hycarane Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
              <h1 className="text-2xl font-bold text-blue-600">Hycarane</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`font-medium transition-colors duration-300 ${
                  scrollY > 50
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`font-medium transition-colors duration-300 ${
                  scrollY > 50
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`font-medium transition-colors duration-300 ${
                  scrollY > 50
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className={`font-medium transition-colors duration-300 ${
                  scrollY > 50
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`font-medium transition-colors duration-300 ${
                  scrollY > 50
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  scrollY > 50
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 py-4">
              <div className="flex flex-col space-y-4 px-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("technology")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Technology
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Industrial hydrogen facility"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-cyan-500/60"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              We&apos;re
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Energizing
              </span>
              <br />
              Tomorrow
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Hydrogen for a Better Tomorrow. The time for clean energy is{" "}
              <span className="font-bold text-cyan-300">NOW</span>. Making
              hydrogen <span className="font-bold text-cyan-300">SIMPLE</span>,{" "}
              <span className="font-bold text-cyan-300">SCALABLE</span>, and{" "}
              <span className="font-bold text-cyan-300">AFFORDABLE</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => scrollToSection("about")}
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                OUR SOLUTIONS
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
              >
                VIEW PROJECTS
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of clean energy through innovative hydrogen
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Vision */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be India&apos;s leading hydrogen energy company, powering a
                  zero-emission future through innovative, scalable, and
                  affordable clean energy solutions.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To accelerate India&apos;s transition to clean energy by
                  making hydrogen production and deployment simple, scalable,
                  and affordable for all sectors.
                </p>
              </CardContent>
            </Card>

            {/* Goal */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Goal
                </h3>
                <p className="text-gray-600">
                  To establish a comprehensive hydrogen ecosystem that replaces
                  carbon-heavy fuels and drives India towards true energy
                  independence by 2030.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Core Values
                </h3>
                <p className="text-gray-600">
                  Innovation, Sustainability, Accountability, and Collaboration
                  - driving every decision we make in building a cleaner
                  tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming India&apos;s energy landscape through innovative
              hydrogen solutions
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                We Are Accountable For
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At Hycarane Energy, every project we undertake is rooted in
                accountability and impact. We design solutions that reduce
                carbon emissions, improve energy security, and accelerate the
                adoption of hydrogen as a mainstream fuel. Our commitment
                extends beyond technology — we take full responsibility for
                environmental impact, safety, scalability, and long-term
                sustainability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Gas Blending */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Gas blending facility"
                  width={1000}
                  height={600}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Fuel className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Gas Blending
              </h3>
              <p className="text-gray-700 mb-6">
                Seamlessly integrating hydrogen into existing natural gas
                infrastructure for immediate emission reductions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Carbon emissions drop instantly without waiting for new
                    infrastructure
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Industries and households benefit from cleaner energy at
                    almost no disruption
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Gas utilities can transition smoothly towards 100% hydrogen
                    adoption in the future
                  </p>
                </div>
              </div>
              <p className="text-blue-600 font-semibold mt-6 text-center">
                The first step to mainstream hydrogen in cities, industries, and
                homes.
              </p>
            </div>

            {/* Microgrids */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Microgrid infrastructure"
                  width={1000}
                  height={600}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Microgrids
              </h3>
              <p className="text-gray-700 mb-6">
                Decentralized hydrogen-powered energy systems providing
                reliable, clean power to communities and industries.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Round-the-clock (24/7) clean energy — unlike solar or wind
                    alone
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Resilient power supply for factories, data centers,
                    campuses, and remote communities
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Energy independence by reducing dependence on coal or diesel
                    generators
                  </p>
                </div>
              </div>
              <p className="text-green-600 font-semibold mt-6 text-center">
                Making hydrogen the backbone of decentralized clean energy
                systems.
              </p>
            </div>

            {/* Replacing Traditional Fuels */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Clean transportation"
                  width={1000}
                  height={600}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <Leaf className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Replacing Traditional Fuels
              </h3>
              <p className="text-gray-700 mb-6">
                Transitioning from carbon-intensive fossil fuels to clean
                hydrogen across transportation, heating, and industrial
                processes.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    <strong>Transport:</strong> Hydrogen fuel cell buses,
                    trucks, and H₂-ICE vehicles reduce emissions to zero
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    <strong>Industry:</strong> Steel, cement, fertilizer, and
                    refineries can cut CO₂ drastically by adopting hydrogen
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    <strong>Power:</strong> Hydrogen turbines and fuel cells can
                    replace coal-fired generation
                  </p>
                </div>
              </div>
              <p className="text-orange-600 font-semibold mt-6 text-center">
                A world where progress no longer comes at the cost of the
                planet.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join the Hydrogen Revolution?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Partner with us to build a sustainable future powered by clean
              hydrogen energy solutions.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced hydrogen production methods and innovative solutions for
              a sustainable future
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Factory className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Products
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                We are building a complete hydrogen ecosystem — from production
                to end-use. Our solutions include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Green hydrogen production plant"
                    width={800}
                    height={400}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Factory className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Green Hydrogen Plants
                </h3>
                <p className="text-gray-600 text-sm">
                  Large-scale electrolysis facilities powered by renewable
                  energy for clean hydrogen production.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Hydrogen fueling station"
                    width={800}
                    height={400}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Fuel className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fueling Stations
                </h3>
                <p className="text-gray-600 text-sm">
                  Strategic network of hydrogen refueling infrastructure for
                  transportation sector adoption.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Gas blending infrastructure"
                    width={800}
                    height={400}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Gas Blending Projects
                </h3>
                <p className="text-gray-600 text-sm">
                  Integration systems for mixing hydrogen with natural gas in
                  existing pipeline networks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Microgrid control systems"
                    width={800}
                    height={400}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-cyan-100 p-3 rounded-full w-fit mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Microgrid Systems
                </h3>
                <p className="text-gray-600 text-sm">
                  Intelligent energy management systems for distributed
                  hydrogen-powered electricity generation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Green Hydrogen */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Green hydrogen electrolysis"
                  width={1000}
                  height={500}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Droplets className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Green Hydrogen
                </h3>
              </div>

              <p className="text-gray-700 mb-6">
                Producing hydrogen through electrolysis powered entirely by
                renewable energy sources.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">
                    Efficiency
                  </h5>
                  <p className="text-sm text-green-700">
                    Higher hydrogen yield with lower electricity consumption
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">
                    Cost Reduction
                  </h5>
                  <p className="text-sm text-green-700">
                    Optimized design lowers operating costs
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">
                    Sustainability
                  </h5>
                  <p className="text-sm text-green-700">
                    Zero emissions, only water as input and output
                  </p>
                </div>
              </div>

              <p className="text-green-600 font-semibold mt-6 text-center">
                Green Hydrogen is our primary focus for transport, industry, and
                power.
              </p>
            </div>

            {/* Turquoise Hydrogen */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Turquoise hydrogen production"
                  width={1000}
                  height={500}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Atom className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Turquoise Hydrogen
                </h3>
              </div>

              <p className="text-gray-700 mb-6">
                Producing hydrogen via methane pyrolysis, capturing solid carbon
                instead of CO₂ gas.
              </p>

              <div className="space-y-4">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-cyan-800 mb-2">
                    Zero Direct CO₂ Emissions
                  </h5>
                  <p className="text-sm text-cyan-700">
                    Clean production process without greenhouse gas release
                  </p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-cyan-800 mb-2">
                    Co-product Value
                  </h5>
                  <p className="text-sm text-cyan-700">
                    Solid carbon can be used in batteries, construction, and
                    advanced materials
                  </p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-cyan-800 mb-2">
                    Resource Efficiency
                  </h5>
                  <p className="text-sm text-cyan-700">
                    Turns natural gas or biogas into clean energy + usable
                    byproducts
                  </p>
                </div>
              </div>

              <p className="text-cyan-600 font-semibold mt-6 text-center">
                A bridge technology — making hydrogen affordable while reducing
                emissions during the transition to fully renewable solutions.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Leading Innovation in Hydrogen Technology
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Our cutting-edge technologies are designed to make hydrogen
              production more efficient, cost-effective, and environmentally
              sustainable than ever before.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  99%+
                </div>
                <p className="text-gray-700">Efficiency Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Zero
                </div>
                <p className="text-gray-700">Carbon Emissions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-700">Continuous Operation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              From mobility to power, from biogas to electrolysis — we are
              building India&apos;s hydrogen ecosystem to replace carbon-heavy
              fuels and drive the nation towards true energy independence.
            </p>
            <p className="text-2xl font-bold text-blue-600 mt-8">
              Together, we can power a zero-emission future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join the hydrogen revolution? Let&apos;s work together to
              build a sustainable future powered by clean hydrogen energy
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  We&apos;re here to answer your questions and discuss how
                  Hycarane Energy can help power your clean energy transition.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Office Address
                    </h4>
                    <p className="text-gray-600">
                      Hyderabad, Telangana 500070
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-600">+91 93926 08264</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600">hycaraneenergy@gmail.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">
                      Partnership Opportunities
                    </option>
                    <option value="investment">Investment Inquiries</option>
                    <option value="technology">Technology Questions</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Energy Future?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Join leading companies and organizations who are already
                partnering with us to build a hydrogen-powered tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4">hycarane</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading the hydrogen revolution in India. We&apos;re building a
                complete ecosystem of clean energy solutions that are simple,
                scalable, and affordable for everyone.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-blue-800 hover:bg-blue-900 p-2 rounded-full transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("technology")}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Technology
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Hyderabad, Telangana 500070
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+91 93926 08264</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    hycaraneenergy@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Hycarane Energy. All rights reserved. Building
                India&apos;s hydrogen future.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
