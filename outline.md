# Indonesian Spice Export Website - Project Outline

## File Structure

```
/mnt/okcomputer/output/
├── index.html              # Landing page with hero and spice showcase
├── products.html           # Interactive spice catalog with filtering
├── about.html             # Company story and Indonesian heritage
├── contact.html           # Export inquiry forms and information
├── main.js               # Core JavaScript functionality
├── resources/            # Media assets directory
│   ├── hero-spices.jpg   # Main hero background image
│   ├── spice-*.jpg       # Individual spice product images (15+ varieties)
│   ├── indonesia-map.png # Interactive map background
│   ├── farmer-*.jpg      # Authentic farming/processing images
│   └── certification-*.png # Quality certificate images
├── interaction.md        # Interaction design documentation
├── design.md            # Visual design specifications
└── outline.md           # This project outline
```

## Page Organization & Content

### 1. index.html - Landing Page
**Purpose**: Create immediate impact and guide visitors to key actions

**Sections**:
- **Navigation Bar**: Fixed header with logo, menu items, search, and language selector
- **Hero Section**: 
  - Cinematic spice imagery with particle animation background
  - Compelling headline: "Indonesia's Finest Spices, Exported Worldwide"
  - Subtitle highlighting quality and heritage
  - Primary CTA: "Explore Our Products" / Secondary CTA: "Request Quote"
- **Featured Products Showcase**:
  - Infinite scroll carousel of premium spice varieties
  - Quick product cards with hover effects
  - "View Full Catalog" button
- **Trust Indicators**:
  - Export statistics counter animation
  - Certification badges (ISO, HACCP, Organic)
  - Client testimonials carousel
- **Company Overview**:
  - Brief introduction to Indonesian spice heritage
  - "Learn More About Us" link to about.html
- **Footer**: Contact info, social links, copyright

### 2. products.html - Spice Catalog
**Purpose**: Enable comprehensive product discovery and bulk ordering

**Sections**:
- **Navigation Bar**: Consistent with index
- **Page Header**: "Premium Indonesian Spices" with breadcrumb
- **Interactive Filter Panel** (Left Sidebar):
  - Spice type checkboxes (15+ varieties)
  - Origin region selection (Sumatra, Java, Sulawesi, Maluku)
  - Quality grade options (Premium, Standard, Organic)
  - Price range slider
  - Form selection (Whole, Ground, Powder)
- **Product Grid** (Main Content):
  - 20+ spice cards with images and details
  - Hover effects revealing quick info
  - "Add to Quote" functionality
  - Pagination or infinite scroll
- **Bulk Order Calculator**:
  - Selected items with quantity inputs
  - Real-time price calculation
  - Volume discount display
  - "Request Quote" button
- **Export Information**:
  - Minimum order quantities
  - Packaging options
  - Shipping information

### 3. about.html - Company Heritage
**Purpose**: Build trust through storytelling and showcase Indonesian spice legacy

**Sections**:
- **Navigation Bar**: Consistent design
- **Company Story Hero**:
  - Background image of Indonesian spice plantations
  - Company mission and values
- **Indonesian Spice Heritage**:
  - Historical significance of Spice Islands
  - Interactive timeline of spice trade
  - Cultural importance of spices
- **Interactive Indonesia Map**:
  - Clickable regions showing spice production
  - Hover effects displaying regional specialties
  - Production statistics visualization
- **Quality & Sustainability**:
  - Certification showcase with interactive elements
  - Sustainable farming practices
  - Farmer partnership programs
- **Global Reach**:
  - Export destination map
  - Trade statistics charts
  - Client success stories

### 4. contact.html - Export Inquiries
**Purpose**: Facilitate business connections and provide comprehensive export information

**Sections**:
- **Navigation Bar**: Consistent design
- **Contact Hero**: "Connect With Indonesia's Premier Spice Exporter"
- **Export Inquiry Form**:
  - Company information fields
  - Spice selection with quantities
  - Destination country and port
  - Preferred shipping terms (FOB, CIF, etc.)
  - Special requirements text area
  - File upload for specifications
- **Contact Information**:
  - Office addresses in Indonesia
  - International sales team contacts
  - WhatsApp integration for quick communication
- **Export Process Guide**:
  - Step-by-step ordering process
  - Payment terms and methods
  - Documentation requirements
  - Shipping and logistics information
- **FAQ Section**:
  - Common questions about ordering
  - Quality assurance processes
  - Minimum order requirements
  - Lead times and delivery

## Interactive Components Implementation

### 1. Spice Filter System
- **Technology**: Vanilla JavaScript with smooth animations
- **Features**: Real-time filtering, URL parameter updates, result counters
- **Data**: JSON array with spice details, origins, prices, specifications

### 2. Interactive Indonesia Map
- **Technology**: SVG map with click/hover handlers
- **Features**: Region highlighting, information popups, statistics display
- **Data**: Regional production data, spice varieties, export volumes

### 3. Bulk Order Calculator
- **Technology**: JavaScript with local storage persistence
- **Features**: Dynamic pricing, volume discounts, quote generation
- **Integration**: Form submission to contact page with pre-filled data

### 4. Product Image Gallery
- **Technology**: Splide.js carousel with zoom functionality
- **Features**: Infinite scroll, thumbnail navigation, full-screen view
- **Content**: High-quality spice photography, processing images

## Technical Implementation

### Core Libraries Integration
- **Anime.js**: Page transitions, element reveals, counter animations
- **ECharts.js**: Export statistics, regional production charts
- **Splide.js**: Product carousels, image galleries
- **p5.js**: Hero background particle effects
- **PIXI.js**: Advanced visual effects for premium feel
- **Matter.js**: Physics-based interactions for product displays
- **Shader-park**: Subtle background textures and lighting

### Responsive Design
- **Mobile-first approach**: Touch-friendly interactions
- **Breakpoints**: 320px, 768px, 1024px, 1440px
- **Navigation**: Collapsible menu for mobile
- **Forms**: Stacked layout with large touch targets

### Performance Optimization
- **Image optimization**: WebP format with fallbacks
- **Lazy loading**: Images and non-critical content
- **Minification**: CSS and JavaScript compression
- **CDN integration**: External library loading

This comprehensive outline ensures a professional, feature-rich website that effectively showcases Indonesian spices while providing all necessary functionality for international B2B commerce.