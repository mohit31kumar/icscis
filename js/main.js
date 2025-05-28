

var isOpen = false;

const pages = [
  { name: 'Home', url: 'index.html' },
  { name: 'About', url: 'about.html' },
  { name: 'Call for Papers', url: 'call-for-papers.html' },
  { name: 'Submission', url: 'submission.html' },
//   { name: 'Publications', url: 'publications.html' },
  { name: 'Registrations', url: 'registrations.html' },
  { name: 'Downloads', url: 'downloads.html' },
  { name: 'Committee', url: 'committee.html' },
//   { name: 'Partners', url: 'partners.html' },
  { name: 'Speakers', url: 'speaker.html' },
//   { name: 'Sponsorship opportunities', url: 'sponsorship-opportunities.html' },
//   { name: 'Special Sessions', url: 'special-sessions.html' },
  { name: 'Venue', url: 'venue.html' },
  { name: 'Contact', url: 'contact-us.html' }
];

const currentPage = window.location.pathname.split('/').pop();

document.getElementById("navbar-placeholder").innerHTML = `
<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="flex md:flex-col flex-wrap items-center justify-between mx-auto p-4 ml-2 mr-2">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse"><img src="img/logopo.jpg" class="md:h-40 h-16"
        alt="logo"></a>
    <button data-collapse-toggle="navbar-dropdown" type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"></path>
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto md:pt-5" id="navbar-dropdown">
      <ul
        class="font-medium flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        ${pages.map(page => `
          <li style="margin-left:6px; margin-right:6px;">
            <a href="${page.url}"
              class="block py-2 px-3 ${currentPage === page.url ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}"
              aria-current="${currentPage === page.url ? 'page' : 'false'}">${page.name}</a>
          </li>
        `).join('')}
      </ul>
    </div>
  </div>
</nav>

<div class="md:mx-5">
              <h1 class="md:text-4xl text-2xl text-center font-bold m-10">1<sup>st</sup> International Conference on Food Studies: Bridging the Humanities and Sciences in the Global Context</h1>
              <h1 class="md:text-3xl text-xl text-center font-bold m-10">9-10 January, 2026</h1>
              <h2 class="md:text-3xl text-xl text-center font-bold m-10">
     
    <!--<a href="https://conference.poornima.edu.in/icscis-2026/" target="_blank" class="text-blue-600 hover:underline">
        Sponsored by Indian Council of Social Science Research(ICSSR)
    </a>-->
</h2>
              
    </div>

    <header
      class="bg-blue-500 text-white text-center py-12"
      style="
        background-image: url(img/banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: center;
      "
    >
      <h1 class="text-4xl font-bold m-10">&nbsp;</h1>
      
    </header>
    <div class="border border-red-400 bg-red-50 text-red-700 rounded m-4">
        <marquee behavior=scroll direction="left" scrollamount="10">
   <!-- <h2 class="text-center text-2xl  underline" style="color: red;">All papers under acceptance in ICSCIS-2025 will be published in AIP Conference Proceedings (SCOPUS INDEXED)</h2>-->
    </marquee>
    </div>
    
<div class="max-w-6xl mx-auto pt-10">
    <div class="relative">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
		
            <!-- Submission of Abstracts -->
            <div class="flex items-center justify-center flex-col">
                <div class="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-semibold text-center">Submission of Abstracts</h2>
                    <h6 class="text-gray-600 font-bold text-center text-center">July 31, 2025</h6>
                </div>
            </div>

			<!-- Acceptance on Abstracts -->
            <div class="flex items-center justify-center flex-col">
                <div class="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-semibold text-center">Acceptance on Abstracts</h2>
                    <h6 class="text-gray-600 font-bold text-center text-center">August 30, 2025</h6>
                </div>
            </div>

            <!-- Full Paper Submission -->
            <div class="flex items-center justify-center flex-col">
                <div class="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-semibold text-center">Full Paper Submission Upto</h2>
                    <h6 class="text-gray-600 font-bold text-center text-center">November 15, 2025</h6>
                </div>
            </div>

            <!-- Notification of Acceptance -->
            <div class="flex items-center justify-center flex-col">
                <div class="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-semibold text-center">Acceptance of Full Paper</h2>
                    <h6 class="text-gray-600 font-bold text-center">December 20, 2025</h6>
                </div>
            </div>

            <!-- Revised Paper Submission -->
            <div class="flex items-center justify-center flex-col">
                <div class="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-semibold text-center">Acceptance on paper for publication (after review)</h2>
                    <h6 class="text-gray-600 font-bold text-center">March 30, 2026</h6>
                </div>
            </div>

            <!-- Early Bird Registration -->
            <div class="flex items-center justify-center flex-col">
                <div class="flex items-center justify-center w-16 h-16 rounded-full text-white mb-4" style="background-color: rgb(244 63 94);">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-semibold text-center">Early Registration</h2>
                    <h6 class="text-gray-600 font-bold text-center">September 30, 2025</h6>
                </div>
            </div>

           

            <!-- Conference Dates -->
            <div class="flex items-center justify-center flex-col">
                <div class="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-lg font-semibold text-center">Registration with late fee (200 Rs/-)</h2>
                    <h6 class="text-gray-600 font-bold text-center">October 30, 2025</h6>
                </div>
            </div>
        </div>
    </div>
</div>

`;



document.querySelector('button[data-collapse-toggle="navbar-dropdown"]').addEventListener('click', function () {
  if (isOpen) {
    document.getElementById('navbar-dropdown').style.display = 'none';
    isOpen = false;
    return;
  }
  else {
    document.getElementById('navbar-dropdown').style.display = 'block';
    isOpen = true;
  }
});


