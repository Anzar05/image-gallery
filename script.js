// Gallery data
const galleryData = [
    {
        id: 1,
        category: "nature",
        title: "Alpine Dawn",
        description: "First light over the mountain range captured during golden hour. The subtle gradients in the sky create a serene atmosphere.",
        date: "May 15, 2025",
        imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        photographer: "Alex Morgan",
        photographerAvatar: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflM22K_phpa-dggnziPzKmR9aQkktSJf-ZQ&s "
    },
    {
        id: 2,
        category: "urban",
        title: "Metropolis Twilight",
        description: "Urban landscape transitioning from day to night. The city lights begin to illuminate as the sky darkens.",
        date: "Apr 22, 2025",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        photographer: "Sarah Chen",
        photographerAvatar: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrh5OPaaADQmG7HjU1o6tLXo0WCBMPwhDsQ&s "
    },
    {
        id: 3,
        category: "travel",
        title: "Coastal Horizon",
        description: "Aerial perspective of rugged coastline meeting turquoise waters. The natural patterns formed by erosion create visual texture.",
        date: "Jun 10, 2025",
        imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        photographer: "Marcus Rivera",
        photographerAvatar: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDvIMngnSEal17sHb0F9KhEs9XGwxpFCB7A&s "
    },
    {
        id: 4,
        category: "portrait",
        title: "Contemplation",
        description: "Studio portrait with natural lighting emphasizing subtle facial expressions and texture. Shot with medium format camera.",
        date: "Mar 18, 2025",
        imageUrl: "https://i.ytimg.com/vi/hUWQU897Buk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBAIVUgeooo--vaEGQKxtpq9EbFBA",
        photographer: "Jamie Wilson",
        photographerAvatar: " https://www.calliwickesphotography.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqdjqieaz%2Fimage%2Fupload%2Fv1720720873%2F2024_06_29_37_78712fcd8d.jpg&w=2048&q=75 "
    },
    {
        id: 5,
        category: "abstract",
        title: "Geometric Harmony",
        description: "Minimalist composition exploring form and color relationships. Created through multiple exposure techniques.",
        date: "Feb 28, 2025",
        imageUrl: "https://www.shutterstock.com/image-vector/modern-abstract-background-composition-yellows-600nw-2586844825.jpg",
        photographer: "Taylor Kim",
        photographerAvatar: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmH9hkC4MEmHkvPADOa3UaHZfUnHnWxaRe5w&s "
    },
    {
        id: 6,
        category: "nature",
        title: "Cascading Flow",
        description: "Long exposure capture of waterfall surrounded by lush vegetation. The motion blur effect creates a sense of movement.",
        date: "Jan 12, 2025",
        imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        photographer: "Jordan Lee",
        photographerAvatar: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEVxhiE9GluEnQzLOmj89VN8WaYP99Wo5cg&s "
    }
];

// Initialize gallery
function initGallery() {
    const galleryContainer = document.getElementById('imageGallery');
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        galleryItem.setAttribute('data-category', item.category);
        
        galleryItem.innerHTML = `
            <div class="image-container">
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="image-overlay">
                    <div class="overlay-content">
                        <button class="quick-view-btn" data-id="${item.id}">
                            <i class="fas fa-expand-alt"></i> Quick View
                        </button>
                    </div>
                </div>
            </div>
            <div class="image-info">
                <div class="image-meta">
                    <span class="image-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                    <span class="image-date">${item.date}</span>
                </div>
                <h3 class="image-title">${item.title}</h3>
                <p class="image-description">${item.description}</p>
                <div class="image-footer">
                    <div class="photographer">
                        <img src="${item.photographerAvatar}" alt="${item.photographer}">
                        <span>${item.photographer}</span>
                    </div>
                    <div class="image-actions">
                        <button class="action-btn" title="Like">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="action-btn" title="Download">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
    });
}

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const viewButtons = document.querySelectorAll('.view-btn');
const gallerySection = document.querySelector('.gallery-section');

// Initialize with all items visible
let currentFilter = 'all';
let currentView = 'grid';

// Filter function
function filterGallery(filter) {
    currentFilter = filter;
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || filter === category) {
            item.style.display = 'flex';
            // Add fade-in animation
            item.classList.remove('fade-in');
            void item.offsetWidth; // Trigger reflow
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
        }
    });
    
    // Update active button
    filterButtons.forEach(button => {
        if (button.getAttribute('data-filter') === filter) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// View toggle function
function toggleView(view) {
    currentView = view;
    
    if (view === 'grid') {
        gallerySection.classList.remove('list-view');
        gallerySection.classList.add('grid-view');
    } else {
        gallerySection.classList.remove('grid-view');
        gallerySection.classList.add('list-view');
    }
    
    // Update active view button
    viewButtons.forEach(button => {
        if (button.getAttribute('data-view') === view) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Like button functionality
function setupLikeButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('fa-heart') || e.target.closest('.fa-heart')) {
            const heartIcon = e.target.classList.contains('fa-heart') ? e.target : e.target.querySelector('.fa-heart');
            if (heartIcon) {
                e.stopPropagation();
                if (heartIcon.classList.contains('far')) {
                    heartIcon.classList.remove('far');
                    heartIcon.classList.add('fas');
                    heartIcon.style.color = '#ef4444';
                } else {
                    heartIcon.classList.remove('fas');
                    heartIcon.classList.add('far');
                    heartIcon.style.color = '';
                }
            }
        }
    });
}

// Quick view button functionality
function setupQuickViewButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quick-view-btn') || e.target.closest('.quick-view-btn')) {
            const quickViewBtn = e.target.classList.contains('quick-view-btn') ? e.target : e.target.closest('.quick-view-btn');
            if (quickViewBtn) {
                e.stopPropagation();
                const galleryItem = quickViewBtn.closest('.gallery-item');
                const imageTitle = galleryItem.querySelector('.image-title').textContent;
                
                // Create modal for quick view
                createQuickViewModal(imageTitle, quickViewBtn.getAttribute('data-id'));
            }
        }
    });
}

// Create quick view modal
function createQuickViewModal(title, id) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.quick-view-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Find the image data
    const imageData = galleryData.find(item => item.id == id);
    if (!imageData) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="
            background: white;
            border-radius: 12px;
            max-width: 900px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideUp 0.3s ease;
        ">
            <button class="close-modal" style="
                position: absolute;
                top: 20px;
                right: 20px;
                background: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            ">&times;</button>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
                <div style="padding: 0;">
                    <img src="${imageData.imageUrl}" alt="${imageData.title}" style="
                        width: 100%;
                        height: 500px;
                        object-fit: cover;
                        border-radius: 12px 0 0 12px;
                    ">
                </div>
                <div style="padding: 2rem;">
                    <div style="margin-bottom: 1.5rem;">
                        <span style="
                            font-size: 0.75rem;
                            font-weight: 600;
                            color: var(--primary-color);
                            text-transform: uppercase;
                            letter-spacing: 0.05em;
                            background: rgba(37, 99, 235, 0.1);
                            padding: 0.25rem 0.75rem;
                            border-radius: 50px;
                        ">${imageData.category}</span>
                        <span style="
                            font-size: 0.75rem;
                            color: var(--secondary-color);
                            margin-left: 1rem;
                        ">${imageData.date}</span>
                    </div>
                    <h2 style="
                        font-size: 1.75rem;
                        font-weight: 700;
                        margin-bottom: 1rem;
                        color: var(--text-dark);
                    ">${imageData.title}</h2>
                    <p style="
                        color: var(--text-light);
                        line-height: 1.6;
                        margin-bottom: 1.5rem;
                    ">${imageData.description}</p>
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        margin-bottom: 2rem;
                        padding-top: 1.5rem;
                        border-top: 1px solid var(--border-color);
                    ">
                        <img src="${imageData.photographerAvatar}" alt="${imageData.photographer}" style="
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                        ">
                        <div>
                            <div style="font-weight: 600;">${imageData.photographer}</div>
                            <div style="font-size: 0.875rem; color: var(--secondary-color);">Photographer</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button style="
                            padding: 0.75rem 1.5rem;
                            background: var(--primary-color);
                            color: white;
                            border: none;
                            border-radius: 8px;
                            font-weight: 600;
                            cursor: pointer;
                            flex: 1;
                        ">Download Image</button>
                        <button style="
                            padding: 0.75rem 1.5rem;
                            background: var(--accent-color);
                            color: var(--text-dark);
                            border: none;
                            border-radius: 8px;
                            font-weight: 600;
                            cursor: pointer;
                            flex: 1;
                        ">License Info</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .quick-view-modal .close-modal:hover {
            background: #f1f5f9;
        }
    `;
    document.head.appendChild(style);
    
    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        style.remove();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            style.remove();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function closeModalOnEscape(e) {
        if (e.key === 'Escape') {
            modal.remove();
            style.remove();
            document.removeEventListener('keydown', closeModalOnEscape);
        }
    });
}

// Responsive indicator
function updateResponsiveIndicator() {
    const width = window.innerWidth;
    let columns;
    
    if (width >= 1024) {
        columns = 3;
    } else if (width >= 640) {
        columns = 2;
    } else {
        columns = 1;
    }
    
    console.log(`Screen: ${width}px | Columns: ${columns} | Layout: ${currentView} view`);
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery
    initGallery();
    
    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
    
    // Add event listeners to view buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.getAttribute('data-view');
            toggleView(view);
        });
    });
    
    // Setup like buttons
    setupLikeButtons();
    
    // Setup quick view buttons
    setupQuickViewButtons();
    
    // Initialize filter and view
    filterGallery('all');
    toggleView('grid');
    
    // Setup responsive indicator
    window.addEventListener('resize', updateResponsiveIndicator);
    updateResponsiveIndicator();
});