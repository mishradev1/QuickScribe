import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const tools = [
  { name: "Split PDF", icon: "⬌" },
  { name: "Merge PDF", icon: "⊞" },
  { name: "Compress PDF", icon: "↘" },
  { name: "PDF to Word", icon: "📄" },
  { name: "PPT to PDF", icon: "📊" },
  { name: "JPG to PDF", icon: "🖼️" },
  { name: "Word to PDF", icon: "📝" },
  { name: "Unlock PDF", icon: "🔓" },
  { name: "Compress Image", icon: "🗜️" },
  { name: "Edit Image", icon: "✏️" },
  { name: "Resize Image", icon: "↔️" },
  { name: "Rotate Image", icon: "🔄" },
]

export default function Tools() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100 p-8" >
      <div className="w-full max-w-6xl mx-auto space-y-10 bg-white rounded-xl shadow-xl p-12">
        <div className="relative">
          <Input
            className="w-full pl-16 pr-6 py-8 text-xl border-2 rounded-lg"
            placeholder="Search by Category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={32} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTools.map((tool) => (
            <Button
              key={tool.name}
              variant="outline"
              className="flex flex-col items-center justify-center h-52 text-center p-6 hover:bg-gray-50 transition-colors border-2 rounded-[18px]"
            >
              <span className="text-6xl mb-4">{tool.icon}</span>
              <span className="text-xl font-medium">{tool.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}