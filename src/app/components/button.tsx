//"use client";
export const ButtonClient = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      onClick={() => {
        console.log("Button clicked from client component");
      }}
    >
      This is a client Button
    </button>
  );
};
