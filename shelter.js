// Shelter data with at least 5 centers per city
// Shelter data with at least 5 centers per city
const shelters = [
    // Hyderabad - 5 shelters
    {
        id: 1,
        name: "Safe Haven Women Shelter",
        address: "123 Park Street, Hyderabad, Telangana 500001",
        phone: "+91 98765 43210",
        beds: 20,
        city: "Hyderabad",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "24/7 secure shelter with counseling services and medical support"
    },
    {
        id: 2,
        name: "Hyderabad Women's Protection Home",
        address: "45 MG Road, Hyderabad, Telangana 500032",
        phone: "+91 91234 56789",
        beds: 15,
        city: "Hyderabad",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Government-run shelter with legal aid and rehabilitation services"
    },
    {
        id: 3,
        name: "Asha Jyothi Shelter",
        address: "78 Banjara Hills, Hyderabad, Telangana 500034",
        phone: "+91 99876 54321",
        beds: 12,
        city: "Hyderabad",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Private shelter with vocational training programs"
    },
    {
        id: 4,
        name: "Mahila Shakti Kendra",
        address: "56 Secunderabad, Hyderabad, Telangana 500003",
        phone: "+91 93456 78901",
        beds: 18,
        city: "Hyderabad",
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Women-run collective with skill development programs"
    },
    {
        id: 5,
        name: "Sakhi Shelter Home",
        address: "89 Charminar Road, Hyderabad, Telangana 500002",
        phone: "+91 97654 32109",
        beds: 10,
        city: "Hyderabad",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Temporary housing with childcare facilities"
    },
    
    // Bengaluru - 5 shelters
    {
        id: 6,
        name: "Hope & Care Center",
        address: "45 MG Road, Bengaluru, Karnataka 560001",
        phone: "+91 80222 34567",
        beds: 25,
        city: "Bengaluru",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Temporary housing with job training programs and counseling"
    },
    {
        id: 7,
        name: "Bengaluru Women's Aid",
        address: "12 Brigade Road, Bengaluru, Karnataka 560025",
        phone: "+91 80223 45678",
        beds: 18,
        city: "Bengaluru",
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Safe shelter with legal assistance and medical care"
    },
    {
        id: 8,
        name: "Stree Shakti Shelter",
        address: "34 Koramangala, Bengaluru, Karnataka 560034",
        phone: "+91 80224 56789",
        beds: 15,
        city: "Bengaluru",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Women's collective with educational support"
    },
    {
        id: 9,
        name: "Nirbhaya Nivas",
        address: "78 Indira Nagar, Bengaluru, Karnataka 560038",
        phone: "+91 80225 67890",
        beds: 20,
        city: "Bengaluru",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Government-aided shelter with 24/7 security"
    },
    {
        id: 10,
        name: "Ujjwala Home",
        address: "56 Whitefield, Bengaluru, Karnataka 560066",
        phone: "+91 80226 78901",
        beds: 12,
        city: "Bengaluru",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Shelter with trauma counseling and rehabilitation"
    },
    
    // Delhi - 5 shelters
    {
        id: 11,
        name: "Women's Protection Home",
        address: "78 Gandhi Nagar, Delhi 110031",
        phone: "+91 11233 44556",
        beds: 30,
        city: "Delhi",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Government-run shelter with legal aid services and medical care"
    },
    {
        id: 12,
        name: "Delhi Women's Shelter",
        address: "23 Connaught Place, Delhi 110001",
        phone: "+91 11234 55667",
        beds: 25,
        city: "Delhi",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Central location with counseling and rehabilitation"
    },
    {
        id: 13,
        name: "Sakhi Shelter Delhi",
        address: "45 Chandni Chowk, Delhi 110006",
        phone: "+91 11235 66778",
        beds: 20,
        city: "Delhi",
        image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Shelter with vocational training programs"
    },
    {
        id: 14,
        name: "Asha Kiran Home",
        address: "12 Vasant Kunj, Delhi 110070",
        phone: "+91 11236 77889",
        beds: 15,
        city: "Delhi",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Private shelter with childcare facilities"
    },
    {
        id: 15,
        name: "Nari Niketan",
        address: "56 Rohini, Delhi 110085",
        phone: "+91 11237 88990",
        beds: 18,
        city: "Delhi",
        image: "https://images.unsplash.com/photo-1600566752229-250ed79470b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Government-aided shelter with medical support"
    },
    
    // Chennai - 5 shelters
    {
        id: 16,
        name: "Grace Women's Refuge",
        address: "56 Church Road, Chennai, Tamil Nadu 600001",
        phone: "+91 44233 44556",
        beds: 22,
        city: "Chennai",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Faith-based shelter with childcare facilities and counseling"
    },
    {
        id: 17,
        name: "Chennai Women's Shelter",
        address: "23 Marina Beach Road, Chennai, Tamil Nadu 600005",
        phone: "+91 44234 55667",
        beds: 18,
        city: "Chennai",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Shelter with legal aid and rehabilitation services"
    },
    {
        id: 18,
        name: "Mahila Suraksha Home",
        address: "45 T Nagar, Chennai, Tamil Nadu 600017",
        phone: "+91 44235 66778",
        beds: 15,
        city: "Chennai",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Government-run shelter with medical care"
    },
    {
        id: 19,
        name: "Sneha Shelter",
        address: "78 Anna Nagar, Chennai, Tamil Nadu 600040",
        phone: "+91 44236 77889",
        beds: 12,
        city: "Chennai",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Private shelter with skill development programs"
    },
    {
        id: 20,
        name: "Tamil Nadu Women's Home",
        address: "12 Adyar, Chennai, Tamil Nadu 600020",
        phone: "+91 44237 88990",
        beds: 20,
        city: "Chennai",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Government-aided shelter with 24/7 security"
    },
    
    // Mumbai - 5 shelters
    {
        id: 21,
        name: "Asha Bhavan",
        address: "34 Marine Drive, Mumbai, Maharashtra 400002",
        phone: "+91 22233 44556",
        beds: 25,
        city: "Mumbai",
        image: "https://images.unsplash.com/photo-1600566752229-250ed79470b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Short-term shelter with trauma counseling and medical support"
    },
    {
        id: 22,
        name: "Mumbai Women's Shelter",
        address: "12 Colaba Causeway, Mumbai, Maharashtra 400005",
        phone: "+91 22234 55667",
        beds: 20,
        city: "Mumbai",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Central location with legal aid services"
    },
    {
        id: 23,
        name: "Sakhi Sadan",
        address: "45 Bandra West, Mumbai, Maharashtra 400050",
        phone: "+91 22235 66778",
        beds: 18,
        city: "Mumbai",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Shelter with vocational training and rehabilitation"
    },
    {
        id: 24,
        name: "Stree Mukti Sangh",
        address: "78 Andheri East, Mumbai, Maharashtra 400069",
        phone: "+91 22236 77889",
        beds: 15,
        city: "Mumbai",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Women's collective with childcare facilities"
    },
    {
        id: 25,
        name: "Udaan Shelter Home",
        address: "56 Vashi, Navi Mumbai, Maharashtra 400703",
        phone: "+91 22237 88990",
        beds: 12,
        city: "Mumbai",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Private shelter with counseling services"
    }
];
// Function to render shelter cards
function renderShelters(sheltersToRender) {
    const shelterGrid = document.getElementById('shelterGrid');
    shelterGrid.innerHTML = '';

    if (sheltersToRender.length === 0) {
        shelterGrid.innerHTML = '<div class="no-results">No shelters found matching your criteria. Please try different filters.</div>';
        return;
    }

    sheltersToRender.forEach(shelter => {
        const shelterCard = document.createElement('div');
        shelterCard.className = 'shelter-card';
        shelterCard.innerHTML = `
            <div class="card-image">
                <img src="${shelter.image}" alt="${shelter.name}" onerror="this.src='https://via.placeholder.com/400x200?text=Shelter+Image'">
            </div>
            <div class="card-content">
                <h3>${shelter.name}</h3>
                <p class="address"><i class="fas fa-map-marker-alt"></i> ${shelter.address}</p>
                <p class="contact"><i class="fas fa-phone"></i> ${shelter.phone}</p>
                <p class="capacity"><i class="fas fa-bed"></i> ${shelter.beds} Beds Available</p>
                <p class="description">${shelter.description}</p>
                <div class="card-actions">
                    <button class="call-btn" data-phone="${shelter.phone}">
                        <i class="fas fa-phone"></i> Call Now
                    </button>
                </div>
            </div>
        `;
        shelterGrid.appendChild(shelterCard);
    });

    // Add event listeners to call buttons
    document.querySelectorAll('.call-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const phone = this.getAttribute('data-phone').replace(/\D/g, '');
            window.open(`tel:${phone}`, '_self');
        });
    });
}

// Function to filter shelters
function filterShelters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCity = document.getElementById('cityFilter').value;
    const minBeds = document.getElementById('availabilityFilter').value ? 
                     parseInt(document.getElementById('availabilityFilter').value) : 0;

    const filteredShelters = shelters.filter(shelter => {
        const matchesSearch = shelter.name.toLowerCase().includes(searchTerm) || 
                            shelter.address.toLowerCase().includes(searchTerm) ||
                            shelter.description.toLowerCase().includes(searchTerm);
        
        const matchesCity = selectedCity === "" || shelter.city === selectedCity;
        
        const matchesAvailability = minBeds === 0 || shelter.beds >= minBeds;
        
        return matchesSearch && matchesCity && matchesAvailability;
    });

    renderShelters(filteredShelters);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render all shelters initially
    renderShelters(shelters);

    // Set up event listeners
    document.getElementById('searchBtn').addEventListener('click', filterShelters);
    document.getElementById('searchInput').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterShelters();
        }
    });
    document.getElementById('cityFilter').addEventListener('change', filterShelters);
    document.getElementById('availabilityFilter').addEventListener('change', filterShelters);
});