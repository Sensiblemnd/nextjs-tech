// Sample data - in a real app, this would come from an API or database
const condoListings = [
  {
    id: 1,
    title: "Skyline Penthouse",
    location: "Downtown, NY",
    price: "$1,250,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
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
