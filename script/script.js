



function populateContent() {
  // Populate simple text fields
  document.querySelectorAll('[data-content-key]').forEach(el => {
    const key = el.getAttribute('data-content-key');
    const [section, prop] = key.split('.');
    if (content[section] && content[section][prop]) {
      el.textContent = content[section][prop];
    }
  });

  // Populate services
  const servicesContainer = document.getElementById('services');
  if (servicesContainer) {
    content.services.forEach(service => {
      const serviceCard = `
                            <div class="p-8 bg-slate-800/50 rounded-lg shadow-lg border border-slate-700/50">
                                <h3 class="text-xl font-bold text-white">${service.title}</h3>
                                <p class="mt-2 text-slate-400">${service.description}</p>
                            </div>
                        `;
      servicesContainer.innerHTML += serviceCard;
    });


  }

  const methodologyContainer = document.getElementById('methodology-steps');
  if (methodologyContainer) {
    content.methodology.steps.forEach(step => {
      const stepItem = `
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-blue-600/20 text-blue-400 rounded-full h-8 w-8 flex items-center justify-center border border-blue-500/30">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                                </div>
                                <p class="ml-4 text-lg text-slate-300">${step}</p>
                            </div>
                        `;
      methodologyContainer.innerHTML += stepItem;
    });
  }
}