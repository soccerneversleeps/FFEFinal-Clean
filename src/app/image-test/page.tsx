"use client"

export default function ImageTestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="grid gap-4">
        <div>
          <h2 className="text-xl mb-2">Resource Innovations</h2>
          <img 
            src="/images/partners/resource-innovations-logo.jpg" 
            alt="Resource Innovations" 
            width={300} 
            height={150} 
            style={{ border: '1px solid #ccc' }}
          />
        </div>
        
        <div>
          <h2 className="text-xl mb-2">RHA Inc.</h2>
          <img 
            src="/images/partners/rha-logo.jpg" 
            alt="RHA Inc." 
            width={300} 
            height={150} 
            style={{ border: '1px solid #ccc' }}
          />
        </div>
        
        <div>
          <h2 className="text-xl mb-2">Reliable Energy</h2>
          <img 
            src="/images/partners/reliable-energy-logo.avif" 
            alt="Reliable Energy" 
            width={300} 
            height={150} 
            style={{ border: '1px solid #ccc' }}
          />
        </div>
        
        <div>
          <h2 className="text-xl mb-2">Willdan Group</h2>
          <img 
            src="/images/partners/willdan-logo.jpg" 
            alt="Willdan Group" 
            width={300} 
            height={150} 
            style={{ border: '1px solid #ccc' }}
          />
        </div>
      </div>
    </div>
  )
} 