// Sample upcoming events (in real app, fetch from backend/database)
const upcomingEvents = [
  {
    id: 1,
    title: "Annual Alumni Cricket Tournament 2026",
    description: "Join us for a fun-filled cricket match and reconnect with your batchmates!",
    eventDate: "2026-03-15T10:00",
    registrationCloses: "2026-03-10T23:59",
    location: "Main Campus, Your College Name"
  },
  {
    id: 2,
    title: "Alumni Meet & Cultural Evening",
    description: "Relive old memories, enjoy performances, and network with alumni and faculty.",
    eventDate: "2026-04-22T17:00",
    registrationCloses: "2026-04-18T23:59",
    location: "Main Campus, Your College Name"
  },
  {
    id: 3,
    title: "Career Guidance Workshop for Students",
    description: "Learn from experienced alumni about career paths, resume building, and interviews.",
    eventDate: "2026-05-10T14:00",
    registrationCloses: "2026-05-05T23:59",
    location: "Main Campus, Your College Name"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const eventsGrid = document.getElementById('events-grid');
  const modal = document.getElementById('registerModal');
  const closeModalBtn = document.getElementById('closeModal');
  const registrationForm = document.getElementById('registrationForm');
  const modalTitle = document.getElementById('modalEventTitle');
  let currentEventId = null;

  // Render events
  function renderEvents() {
    eventsGrid.innerHTML = '';

    upcomingEvents.forEach(event => {
      const eventDate = new Date(event.eventDate);
      const closesDate = new Date(event.registrationCloses);
      
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `
        <div class="card-header">
          <h3>${event.title}</h3>
        </div>
        <div class="card-body">
          <div class="event-info">
            <p><i class="fa-solid fa-calendar-days"></i><strong>Event:</strong> ${eventDate.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</p>
            <p><i class="fa-solid fa-clock"></i><strong>Registration Closes:</strong> ${closesDate.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</p>
            <p><i class="fa-solid fa-location-dot"></i><strong>Location:</strong> ${event.location}</p>
            <p><i class="fa-solid fa-align-left"></i>${event.description}</p>
          </div>
          <button class="btn-register" data-event-id="${event.id}">Register Now</button>
        </div>
      `;
      eventsGrid.appendChild(card);
    });

    // Add event listeners to Register buttons
    document.querySelectorAll('.btn-register').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const eventId = parseInt(e.target.dataset.eventId);
        const event = upcomingEvents.find(ev => ev.id === eventId);
        if (event) {
          currentEventId = eventId;
          modalTitle.textContent = `Register for ${event.title}`;
          modal.style.display = 'flex';
        }
      });
    });
  }

  // Close modal
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    registrationForm.reset();
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      registrationForm.reset();
    }
  });

  // Form submission (demo)
  registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitRegister');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      alert(`Thank you! Your registration for event #${currentEventId} has been submitted successfully. 🎉`);
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      registrationForm.reset();
      modal.style.display = 'none';
      currentEventId = null;
    }, 1500);
  });

  // Initial render
  renderEvents();
});