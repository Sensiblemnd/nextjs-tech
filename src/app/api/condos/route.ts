// Sample data - in a real app, this would come from an API or database
const condoListings = [
  {
    id: 1,
    title: "Skyline Penthouse -Local Image",
    location: "Downtown, NY",
    price: "$1,250,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    imageUrl: "/images/photo.webp",
  },
  {
    id: 2,
    title: "Harbor View Loft",
    location: "Waterfront, SF",
    price: "$985,000",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Urban Retreat",
    location: "Midtown, CHI",
    price: "$750,000",
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 950,
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "Luxury Condo",
    location: "Beverly Hills, LA",
    price: "$2,500,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2500,
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3",
  },
  {
    id: 5,
    title: "Cozy Condo",
    location: "Seattle, WA",
    price: "$600,000",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 700,
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3",
  },
  {
    id: 6,
    title: "Modern Apartment",
    location: "Austin, TX",
    price: "$850,000",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1100,
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3",
  },
  {
    id: 7,
    title: "Chic Studio",
    location: "Miami, FL",
    price: "$450,000",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3",
  },
  {
    id: 8,
    title: "Spacious Loft",
    location: "Boston, MA",
    price: "$1,100,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1600,
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3",
  },
];

export function GET() {
  return new Response(JSON.stringify(condoListings), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  // Handle POST request
  const data = await request.json();
  const { id } = data;
  const condo = condoListings.find((listing) => listing.id === +id);
  // Process the data
  return new Response(JSON.stringify(condo ?? null), {
    headers: { "Content-Type": "application/json" },
  });
}
