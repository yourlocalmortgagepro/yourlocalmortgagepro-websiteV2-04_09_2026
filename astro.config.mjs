---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Home">
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-primary-cyan/10 via-white to-primary-magenta/10 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            The Deal Rescuer Who Puts <span class="text-primary-magenta">Families First</span>
          </h1>
          <p class="text-xl text-gray-700 mb-8 leading-relaxed">
            I don't just approve loans—I turn "declined" into "clear to close" and help families across NC, SC, and VA achieve homeownership with little to no money down.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/dennisfieldsmortgagepro" target="_blank" class="inline-block bg-primary-magenta text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl text-center">
              Get Pre-Approved Now
            </a>
            <a href="https://dennisfieldsmortgagepro.com" target="_blank" class="inline-block bg-primary-cyan text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl text-center">
              Mortgages That Mean More
            </a>
          </div>
          <p class="text-sm text-gray-600 mt-6">
            <span class="font-semibold">NMLS #1407951</span> | Movement Mortgage | Serving NC, SC & VA
          </p>
        </div>
        
        <div class="relative">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img src="/dennis-headshot.png" alt="Dennis Fields - Your Local Mortgage Pro" class="w-full h-auto">
          </div>
          <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl hidden lg:block">
            <p class="text-4xl font-bold text-primary-magenta">20+</p>
            <p class="text-sm text-gray-600 font-medium">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Bar -->
  <section class="bg-primary-black text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <p class="text-3xl font-bold text-primary-cyan mb-2">$0-3.5%</p>
          <p class="text-sm text-gray-400">Down Payment Options</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-primary-cyan mb-2">14-30</p>
          <p class="text-sm text-gray-400">Day Closings</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-primary-cyan mb-2">3 States</p>
          <p class="text-sm text-gray-400">NC, SC & VA</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-primary-cyan mb-2">All Credit</p>
          <p class="text-sm text-gray-400">Profiles Welcome</p>
        </div>
      </div>
    </div>
  </section>

  <!-- What Makes Me Different -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Families Choose Me</h2>
        <p class="text-xl text-gray-600">I'm not your typical loan officer. Here's what sets me apart.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Differentiator 1 -->
        <div class="bg-gradient-to-br from-primary-cyan/5 to-white p-8 rounded-xl border-2 border-primary-cyan/20 hover:border-primary-cyan transition-all">
          <div class="w-12 h-12 bg-primary-cyan rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">I'm a "Deal Rescuer," Not Just a Loan Officer</h3>
          <p class="text-gray-600 leading-relaxed">I don't just take clean, easy files—I specialize in fixing the ones other lenders kill. I turn "declined" into "clear to close" by understanding guidelines at a deeper level and structuring deals creatively.</p>
        </div>

        <!-- Differentiator 2 -->
        <div class="bg-gradient-to-br from-primary-magenta/5 to-white p-8 rounded-xl border-2 border-primary-magenta/20 hover:border-primary-magenta transition-all">
          <div class="w-12 h-12 bg-primary-magenta rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Strategy + Education, Not Just Rates</h3>
          <p class="text-gray-600 leading-relaxed">Most lenders quote numbers. I teach buyers how to win. From DPA stacking to "buy before you sell" to payment strategy—I help clients think like homeowners, not just borrowers.</p>
        </div>

        <!-- Differentiator 3 -->
        <div class="bg-gradient-to-br from-primary-cyan/5 to-white p-8 rounded-xl border-2 border-primary-cyan/20 hover:border-primary-cyan transition-all">
          <div class="w-12 h-12 bg-primary-cyan rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Maximize Approval Without Overextending</h3>
          <p class="text-gray-600 leading-relaxed">I don't just "get people approved"—I structure loans based on comfort, sustainability, and long-term success, not just max DTI. That builds trust and referrals.</p>
        </div>

        <!-- Differentiator 4 -->
        <div class="bg-gradient-to-br from-primary-magenta/5 to-white p-8 rounded-xl border-2 border-primary-magenta/20 hover:border-primary-magenta transition-all">
          <div class="w-12 h-12 bg-primary-magenta rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Speed Is My Weapon</h3>
          <p class="text-gray-600 leading-relaxed">14–30 day closings, fast underwriting, strong pre-approvals—this gives my clients leverage in competitive markets and confidence with listing agents.</p>
        </div>

        <!-- Differentiator 5 -->
        <div class="bg-gradient-to-br from-primary-cyan/5 to-white p-8 rounded-xl border-2 border-primary-cyan/20 hover:border-primary-cyan transition-all">
          <div class="w-12 h-12 bg-primary-cyan rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">AI + Human Expertise</h3>
          <p class="text-gray-600 leading-relaxed">I'm positioning myself as the modern loan officer—using AI for efficiency and insight, while still leading with empathy, experience, and real guidance.</p>
        </div>

        <!-- CTA Card -->
        <div class="bg-gradient-to-br from-primary-magenta to-pink-600 p-8 rounded-xl text-white flex flex-col justify-center">
          <h3 class="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p class="mb-6 text-pink-100">Let's find out what you qualify for—even if you've been declined before.</p>
          <a href="https://calendly.com/dennisfieldsmortgagepro" target="_blank" class="bg-white text-primary-magenta px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition-all">
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Loan Programs Quick View -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Loan Programs I Specialize In</h2>
        <p class="text-xl text-gray-600">Whatever your situation, there's a path to homeownership.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 class="text-lg font-bold text-gray-900 mb-2">FHA Loans</h3>
          <p class="text-sm text-gray-600 mb-4">As low as 3.5% down for first-time buyers</p>
          <a href="/loan-programs#fha" class="text-primary-cyan font-semibold hover:underline">Learn More →</a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 class="text-lg font-bold text-gray-900 mb-2">VA Loans</h3>
          <p class="text-sm text-gray-600 mb-4">0% down for veterans and active military</p>
          <a href="/loan-programs#va" class="text-primary-cyan font-semibold hover:underline">Learn More →</a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 class="text-lg font-bold text-gray-900 mb-2">USDA Loans</h3>
          <p class="text-sm text-gray-600 mb-4">0% down for rural and suburban areas</p>
          <a href="/loan-programs#usda" class="text-primary-cyan font-semibold hover:underline">Learn More →</a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Down Payment Assistance</h3>
          <p class="text-sm text-gray-600 mb-4">Programs to help cover your down payment</p>
          <a href="/loan-programs#dpa" class="text-primary-cyan font-semibold hover:underline">Learn More →</a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Conventional Loans</h3>
          <p class="text-sm text-gray-600 mb-4">Flexible options with competitive rates</p>
          <a href="/loan-programs#conventional" class="text-primary-cyan font-semibold hover:underline">Learn More →</a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 class="text-lg font-bold text-gray-900 mb-2">DSCR Loans</h3>
          <p class="text-sm text-gray-600 mb-4">For real estate investors</p>
          <a href="/loan-programs#dscr" class="text-primary-cyan font-semibold hover:underline">Learn More →</a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Bank Statement Loans</h3>
          <p class="text-sm text-gray-600 mb-4">For self-employed borrowers</p>
          <a href="/loan-programs#bank-statement" class="text-primary-cyan font-semibold hover:underline">Learn More →</a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <h3 class="text-lg font-bold text-gray-900 mb-2">Manufactured Homes</h3>
          <p class="text-sm text-gray-600 mb-4">Financing for manufactured housing</p>
          <a href="/loan-programs#manufactured" class="text-primary-cyan font-semibold hover:underline">Learn More →</a>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="/loan-programs" class="inline-block bg-primary-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all">
          View All Loan Programs
        </a>
      </div>
    </div>
  </section>

  <!-- Client Reviews Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Clients Are Saying</h2>
        <p class="text-xl text-gray-600 mb-6">Don't just take my word for it—see what families say about working with me.</p>
        <a href="https://www.experience.com/reviews/dennis-fields-411051" target="_blank" class="inline-flex items-center text-primary-cyan font-semibold hover:underline">
          Read All Reviews on Experience.com →
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Review placeholders - these would be populated from Experience.com -->
        <div class="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <div class="flex mb-4">
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <p class="text-gray-700 mb-4 italic">"Dennis made our dream of homeownership a reality. We were first-time buyers with limited savings, and he found us a program with 0% down. He was patient, explained everything clearly, and got us closed in 3 weeks!"</p>
          <p class="font-semibold text-gray-900">- First-Time Homebuyer, Greensboro NC</p>
        </div>

        <div class="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <div class="flex mb-4">
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <p class="text-gray-700 mb-4 italic">"After being turned down by two other lenders, Dennis saved the day. He restructured our application and we closed on our dream home. True deal rescuer!"</p>
          <p class="font-semibold text-gray-900">- Homebuyer, Charlotte NC</p>
        </div>

        <div class="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <div class="flex mb-4">
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <p class="text-gray-700 mb-4 italic">"As a veteran, I appreciated Dennis's expertise with VA loans. He got me into my home with 0% down and walked me through every step. Highly recommend!"</p>
          <p class="font-semibold text-gray-900">- Veteran, Virginia Beach VA</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="py-20 bg-gradient-to-br from-primary-magenta to-pink-600 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Make Your Move?</h2>
      <p class="text-xl mb-8 text-pink-100">Whether you're a first-time buyer, been declined elsewhere, or just exploring your options—let's talk. I'll show you what's possible.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://calendly.com/dennisfieldsmortgagepro" target="_blank" class="inline-block bg-white text-primary-magenta px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
          Schedule Free Consultation
        </a>
        <a href="/deal-rescue" class="inline-block bg-primary-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-lg">
          Been Declined? Start Here
        </a>
      </div>
    </div>
  </section>
</Layout>
