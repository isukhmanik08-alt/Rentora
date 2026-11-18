// ==================== STATE & ROLE SECURITY ====================
let currentUser = { name: "Lucas Bennett", role: "admin", email: "admin@rentora.com" };

// Complete dataset of 30 cars
let fleet = [
    { id: 1, name: "Toyota Corolla", category: "sedan", seats: 5, gear: "Automatic", fuel: "Petrol", price: "₹2,200", rating: "4.8★", badge: "🔥 Trending", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Honda Civic", category: "sedan", seats: 5, gear: "Automatic", fuel: "Petrol", price: "₹2,600", rating: "4.7★", badge: "⭐ Popular", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Volkswagen Virtus", category: "sedan", seats: 5, gear: "Automatic", fuel: "Petrol", price: "₹2,800", rating: "4.9★", badge: "⭐ Popular", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Skoda Slavia", category: "sedan", seats: 5, gear: "Automatic", fuel: "Petrol", price: "₹2,700", rating: "4.6★", badge: "⭐ Popular", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80" },

    { id: 5, name: "Toyota Fortuner", category: "suv", seats: 7, gear: "Automatic", fuel: "Diesel", price: "₹5,800", rating: "4.9★", badge: "🔥 Trending", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Hyundai Creta", category: "suv", seats: 5, gear: "Automatic", fuel: "Diesel", price: "₹3,200", rating: "4.8★", badge: "🔥 Trending", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Kia Seltos", category: "suv", seats: 5, gear: "Automatic", fuel: "Diesel", price: "₹3,400", rating: "4.7★", badge: "🔥 Trending", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Toyota Innova Crysta", category: "suv", seats: 7, gear: "Manual", fuel: "Diesel", price: "₹4,200", rating: "4.8★", badge: "⭐ Popular", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },

    { id: 9, name: "BMW 3 Series", category: "luxury", seats: 5, gear: "Automatic", fuel: "Petrol", price: "₹8,500", rating: "4.9★", badge: "✨ Luxury", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Audi A4", category: "luxury", seats: 5, gear: "Automatic", fuel: "Petrol", price: "₹8,900", rating: "4.8★", badge: "✨ Luxury", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Mercedes-Benz C-Class", category: "luxury", seats: 5, gear: "Automatic", fuel: "Petrol", price: "₹9,500", rating: "5.0★", badge: "✨ Luxury", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Range Rover Evoque", category: "luxury", seats: 5, gear: "Automatic", fuel: "Diesel", price: "₹11,000", rating: "4.9★", badge: "✨ Luxury", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Lexus ES Hybrid", category: "luxury", seats: 5, gear: "Automatic", fuel: "Hybrid", price: "₹9,800", rating: "4.8★", badge: "✨ Luxury", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" },

    { id: 14, name: "Tesla Model 3", category: "electric", seats: 5, gear: "Automatic", fuel: "Electric", price: "₹6,200", rating: "4.9★", badge: "⚡ Electric", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Nissan Leaf EV", category: "electric", seats: 5, gear: "Automatic", fuel: "Electric", price: "₹4,100", rating: "4.6★", badge: "⚡ Electric", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "MG ZS EV", category: "electric", seats: 5, gear: "Automatic", fuel: "Electric", price: "₹4,800", rating: "4.7★", badge: "⚡ Electric", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" },
    { id: 17, name: "Hyundai Ioniq 5", category: "electric", seats: 5, gear: "Automatic", fuel: "Electric", price: "₹6,800", rating: "4.9★", badge: "⚡ Electric", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" },

    { id: 18, name: "Hyundai i20", category: "hatchback", seats: 5, gear: "Manual", fuel: "Petrol", price: "₹1,500", rating: "4.5★", badge: "⭐ Popular", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80" },
    { id: 19, name: "Maruti Baleno", category: "hatchback", seats: 5, gear: "Manual", fuel: "Petrol", price: "₹1,400", rating: "4.6★", badge: "⭐ Popular", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80" },
    { id: 20, name: "Tata Altroz", category: "hatchback", seats: 5, gear: "Manual", fuel: "Petrol", price: "₹1,600", rating: "4.7★", badge: "⭐ Popular", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80" },

    { id: 21, name: "Mahindra Thar 4x4", category: "offroad", seats: 4, gear: "Manual", fuel: "Diesel", price: "₹4,500", rating: "4.9★", badge: "🏔️ Off-road", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 22, name: "Jeep Wrangler", category: "offroad", seats: 5, gear: "Automatic", fuel: "Petrol", price: "₹7,500", rating: "4.8★", badge: "🏔️ Off-road", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 23, name: "Land Rover Defender", category: "offroad", seats: 7, gear: "Automatic", fuel: "Diesel", price: "₹12,500", rating: "5.0★", badge: "🏔️ Off-road", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },

    { id: 24, name: "Ford Mustang GT", category: "sports", seats: 4, gear: "Automatic", fuel: "Petrol", price: "₹12,000", rating: "4.9★", badge: "🏎️ Sports", image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=600&q=80" },
    { id: 25, name: "Porsche 911 Carrera", category: "sports", seats: 2, gear: "Automatic", fuel: "Petrol", price: "₹18,500", rating: "5.0★", badge: "🏎️ Sports", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80" },
    { id: 26, name: "Chevrolet Corvette", category: "sports", seats: 2, gear: "Automatic", fuel: "Petrol", price: "₹16,000", rating: "4.8★", badge: "🏎️ Sports", image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=600&q=80" },
    { id: 27, name: "BMW M4 Coupe", category: "sports", seats: 4, gear: "Automatic", fuel: "Petrol", price: "₹15,000", rating: "4.9★", badge: "🏎️ Sports", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" },

    { id: 28, name: "Mini Cooper Convertible", category: "convertible", seats: 4, gear: "Automatic", fuel: "Petrol", price: "₹9,000", rating: "4.8★", badge: "🌴 Convertible", image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=600&q=80" },
    { id: 29, name: "BMW Z4 Roadster", category: "convertible", seats: 2, gear: "Automatic", fuel: "Petrol", price: "₹14,000", rating: "4.9★", badge: "🌴 Convertible", image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=600&q=80" },
    { id: 30, name: "Audi A5 Cabriolet", category: "convertible", seats: 4, gear: "Automatic", fuel: "Petrol", price: "₹13,500", rating: "4.7★", badge: "🌴 Convertible", image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=600&q=80" }
];

let bookings = [
    { id: "#BK-9021", customer: "Lucas Bennett", vehicle: "Toyota Fortuner", dates: "Nov 12 - Nov 15", status: "confirmed" },
    { id: "#BK-9022", customer: "Sophia Patel", vehicle: "BMW 3 Series", dates: "Nov 14 - Nov 16", status: "pending" },
    { id: "#BK-9023", customer: "Aarav Sharma", vehicle: "Porsche 911 Carrera", dates: "Nov 18 - Nov 20", status: "confirmed" }
];

let selectedCategory = 'all';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    updateUserDisplay();
    renderHomeFleet();
    filterCars();
    renderAdminCrudTable();
    renderBookingsTable();
    updateMetrics();
});

function changeTheme(themeName) {
    document.body.className = themeName;
}

function updateUserDisplay() {
    const disp = document.getElementById('userStatusDisplay');
    disp.textContent = `${currentUser.name} (${currentUser.role.toUpperCase()})`;
}

// ==================== FLEET RENDERING & STRICT RBAC ====================
function renderCard(car) {
    // SECURITY: Card edit/delete controls rendered strictly for Admin
    let adminCrudActions = '';
    if(currentUser.role === 'admin') {
        adminCrudActions = `
            <div style="margin-top: 10px; display: flex; gap: 8px;">
                <button onclick="openEditCarModal(${car.id})" class="pill" style="padding: 4px 10px; font-size: 11px;">Edit</button>
                <button onclick="deleteCar(${car.id})" class="pill" style="padding: 4px 10px; font-size: 11px; background: #ffebee; color: #c62828; border-color: #ef9a9a;">Delete</button>
            </div>
        `;
    }

    return `
        <div class="car-card">
            <div class="card-top-row">
                <span class="car-badge">${car.badge || '✨ Fleet'}</span>
                <span class="rating">${car.rating || '4.8★'}</span>
            </div>
            <img src="${car.image}" alt="${car.name}">
            <div class="specs-mini">
                <span><i class="fa-solid fa-user-group"></i> ${car.seats || 5}</span>
                <span><i class="fa-solid fa-gears"></i> ${car.gear || 'Auto'}</span>
                <span><i class="fa-solid fa-gas-pump"></i> ${car.fuel || 'Petrol'}</span>
            </div>
            <h3>${car.name}</h3>
            <div class="card-footer">
                <div class="rate">${car.price} <span style="font-size:12px; font-weight:500; color:#666;">/ day</span></div>
                <button class="btn-arrow-icon" onclick="openBooking('${car.name}', '${car.price}')"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>
            ${adminCrudActions}
        </div>
    `;
}

function renderHomeFleet() {
    const homeGrid = document.getElementById('homeCarGrid');
    if(homeGrid) {
        homeGrid.innerHTML = fleet.filter(c => c.badge && c.badge.includes('Trending')).slice(0, 6).map(renderCard).join('');
    }
}

function selectCategory(cat) {
    showSection('explore');
    const btn = Array.from(document.querySelectorAll('.pill')).find(b => b.textContent.toLowerCase().includes(cat));
    setFilter(cat, btn);
}

function setFilter(cat, btn) {
    selectedCategory = cat;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    if(btn) btn.classList.add('active');
    filterCars();
}

function filterCars() {
    const fullGrid = document.getElementById('fullCarGrid');
    if(!fullGrid) return;
    const query = (document.getElementById('carSearch')?.value || '').toLowerCase();
    const filtered = fleet.filter(car => {
        const catMatch = (selectedCategory === 'all' || car.category === selectedCategory);
        const searchMatch = car.name.toLowerCase().includes(query) || car.category.toLowerCase().includes(query) || car.fuel.toLowerCase().includes(query);
        return catMatch && searchMatch;
    });
    fullGrid.innerHTML = filtered.map(renderCard).join('');
}

// ==================== ADMIN CRUD HANDLERS ====================
function renderAdminCrudTable() {
    const tbody = document.getElementById('adminCarTableBody');
    if(!tbody) return;
    tbody.innerHTML = fleet.map(car => `
        <tr>
            <td>#${car.id}</td>
            <td><strong>${car.name}</strong></td>
            <td style="text-transform: capitalize;">${car.category}</td>
            <td>${car.price}</td>
            <td>${car.fuel || 'Petrol'} / ${car.gear || 'Auto'}</td>
            <td>
                <button onclick="openEditCarModal(${car.id})" class="pill" style="padding: 4px 10px; font-size: 11px; margin-right: 5px;">Edit</button>
                <button onclick="deleteCar(${car.id})" class="pill" style="padding: 4px 10px; font-size: 11px; background: #ffebee; color: #c62828;">Delete</button>
            </td>
        </tr>
    `).join('');
}

function openAddCarModal() {
    if(currentUser.role !== 'admin') {
        alert("Access Denied: Customer accounts cannot add new vehicles.");
        return;
    }
    document.getElementById('carModalTitle').textContent = 'Add New Vehicle (Admin Only)';
    document.getElementById('editCarId').value = '';
    document.getElementById('crudName').value = '';
    document.getElementById('crudPrice').value = '';
    document.getElementById('crudImage').value = '';
    document.getElementById('carCrudModal').style.display = 'flex';
}

function openEditCarModal(id) {
    if(currentUser.role !== 'admin') {
        alert("Access Denied: Customer accounts cannot edit vehicle records.");
        return;
    }
    const car = fleet.find(c => c.id === id);
    if(!car) return;
    document.getElementById('carModalTitle').textContent = `Edit Vehicle #${id}`;
    document.getElementById('editCarId').value = car.id;
    document.getElementById('crudName').value = car.name;
    document.getElementById('crudCategory').value = car.category;
    document.getElementById('crudPrice').value = car.price;
    document.getElementById('crudImage').value = car.image;
    document.getElementById('carCrudModal').style.display = 'flex';
}

function closeCarModal() { document.getElementById('carCrudModal').style.display = 'none'; }

function handleCarCrudSubmit(e) {
    e.preventDefault();
    if(currentUser.role !== 'admin') {
        alert("Access Denied.");
        return;
    }
    const id = document.getElementById('editCarId').value;
    const name = document.getElementById('crudName').value;
    const category = document.getElementById('crudCategory').value;
    const price = document.getElementById('crudPrice').value;
    const image = document.getElementById('crudImage').value;

    if(id) {
        const car = fleet.find(c => c.id == id);
        if(car) {
            car.name = name; car.category = category; car.price = price; car.image = image;
            alert(`Vehicle #${id} updated!`);
        }
    } else {
        const newCar = {
            id: fleet.length > 0 ? Math.max(...fleet.map(c => c.id)) + 1 : 1,
            name: name, category: category, seats: 5, gear: "Automatic", fuel: "Petrol", price: price, rating: "4.8★", badge: "✨ New", image: image
        };
        fleet.push(newCar);
        alert(`New vehicle "${name}" created!`);
    }

    closeCarModal();
    renderAdminCrudTable(); filterCars(); renderHomeFleet(); updateMetrics();
}

function deleteCar(id) {
    if(currentUser.role !== 'admin') {
        alert("Access Denied: Only administrators can delete vehicles.");
        return;
    }
    if(confirm(`Are you sure you want to delete vehicle #${id}?`)) {
        fleet = fleet.filter(c => c.id !== id);
        alert(`Vehicle #${id} deleted successfully!`);
        renderAdminCrudTable(); filterCars(); renderHomeFleet(); updateMetrics();
    }
}

// ==================== WORKFLOW & RESERVATIONS ====================
function renderBookingsTable() {
    const tbody = document.getElementById('bookingTableBody');
    if(!tbody) return;
    tbody.innerHTML = bookings.map(b => `
        <tr>
            <td><strong>${b.id}</strong></td>
            <td>${b.customer}</td>
            <td>${b.vehicle}</td>
            <td>${b.dates}</td>
            <td><span class="badge ${b.status}">${b.status.toUpperCase()}</span></td>
            <td>
                ${b.status === 'pending' ? `<button onclick="updateBookingStatus('${b.id}', 'confirmed')" class="pill" style="padding: 4px 10px; font-size: 11px; background: #e1f5fe; color: #0288d1;">Confirm</button>` : ''}
                <button onclick="updateBookingStatus('${b.id}', 'completed')" class="pill" style="padding: 4px 10px; font-size: 11px; background: #e8f5e9; color: #2e7d32; margin-left: 5px;">Complete</button>
            </td>
        </tr>
    `).join('');
}

function updateBookingStatus(id, newStatus) {
    const b = bookings.find(item => item.id === id);
    if(b) {
        b.status = newStatus;
        alert(`Booking ${id} status updated to ${newStatus.toUpperCase()}!`);
        renderBookingsTable(); updateMetrics();
    }
}

function openBooking(carName, price) {
    document.getElementById('bookingModal').style.display = 'flex';
    document.getElementById('modalCarDetail').textContent = `Vehicle: ${carName} (${price} / day)`;
    window.activeBookingCar = carName;
}
function closeBooking() { document.getElementById('bookingModal').style.display = 'none'; }

function handleBookingSubmit(e) {
    e.preventDefault();
    const customer = document.getElementById('bookCustomer').value;
    const pickup = document.getElementById('bookPickup').value;
    const ret = document.getElementById('bookReturn').value;
    
    const newBooking = {
        id: `#BK-${Math.floor(1000 + Math.random() * 9000)}`,
        customer: customer,
        vehicle: window.activeBookingCar || "Selected Vehicle",
        dates: `${pickup} to ${ret}`,
        status: "pending"
    };

    bookings.push(newBooking);
    alert(`Reservation request submitted for ${customer}! Status: Pending confirmation.`);
    closeBooking();
    renderBookingsTable(); updateMetrics();
}

function updateMetrics() {
    document.getElementById('statTotalCars').textContent = fleet.length;
    document.getElementById('statAvailable').textContent = fleet.length - bookings.filter(b => b.status === 'confirmed').length;
    document.getElementById('statBookings').textContent = bookings.length;
}

// ==================== ROLE SWITCHING & CONTROLS ====================
function switchRole(role) {
    currentUser.role = role;
    document.getElementById('adminRoleBtn').classList.toggle('active', role === 'admin');
    document.getElementById('custRoleBtn').classList.toggle('active', role === 'customer');
    
    const adminCrud = document.getElementById('adminCrudSection');
    const title = document.getElementById('dashPortalTitle');
    
    if(role === 'admin') {
        adminCrud.style.display = 'block';
        title.textContent = 'Admin Control Center (CRUD)';
    } else {
        adminCrud.style.display = 'none'; // HIDE CRUD Operations from Customers
        title.textContent = 'Customer Reservation Portal';
    }
    updateUserDisplay();
    filterCars(); // Re-render car cards to remove edit/delete buttons in customer mode
}

function toggleDashboard() {
    const mainApp = document.getElementById('mainApp');
    const dashView = document.getElementById('dashboardView');
    if(dashView.style.display === 'none') {
        mainApp.style.display = 'none';
        dashView.style.display = 'block';
        document.getElementById('dashBtnText').textContent = 'Back to website';
    } else {
        dashView.style.display = 'none';
        mainApp.style.display = 'block';
        document.getElementById('dashBtnText').textContent = 'Portal Dashboard';
    }
}

function showSection(section, element) {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('exploreSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('offersSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'none';
    document.getElementById('dashboardView').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';

    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));

    if(section === 'home') document.getElementById('homeSection').style.display = 'block';
    else if(section === 'explore') document.getElementById('exploreSection').style.display = 'block';
    else if(section === 'about') document.getElementById('aboutSection').style.display = 'block';
    else if(section === 'offers') document.getElementById('offersSection').style.display = 'block';
    else if(section === 'contact') document.getElementById('contactSection').style.display = 'block';

    if(element) element.classList.add('active');
    window.scrollTo(0,0);
}

// ==================== AUTH & UTILS ====================
let registerMode = false;
function openAuthModal() { document.getElementById('authModal').style.display = 'flex'; }
function closeAuthModal() { document.getElementById('authModal').style.display = 'none'; }

function toggleAuthMode(e) {
    e.preventDefault();
    registerMode = !registerMode;
    document.getElementById('authTitle').textContent = registerMode ? 'Create Platform Account' : 'User Registration & Login';
    document.getElementById('nameField').style.display = registerMode ? 'block' : 'none';
    document.getElementById('authSubmitBtn').textContent = registerMode ? 'Register Account' : 'Sign In';
    document.getElementById('authToggleText').textContent = registerMode ? 'Already have an account?' : "Don't have an account?";
    document.getElementById('authToggleLink').textContent = registerMode ? 'Sign In' : 'Register';
}

function handleAuthSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('authEmailInput').value;
    const role = document.getElementById('authRoleSelect').value;
    const name = registerMode ? document.getElementById('authNameInput').value : (email.split('@')[0] || 'User');

    currentUser = { name: name, role: role, email: email };
    updateUserDisplay();
    switchRole(role);
    alert(`Successfully logged in as ${email} (${role.toUpperCase()})!`);
    closeAuthModal();
}

function handleContactSubmit(e) { e.preventDefault(); alert('Message sent!'); e.target.reset(); }
function copyCode(code) { navigator.clipboard.writeText(code); alert(`Code "${code}" copied!`); }