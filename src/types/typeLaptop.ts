export interface Laptop {
    id: number
    name: string
    description: string
    price: number
    currency: string
    category: string
    brand: string
    images: string[]
    specifications: ProductSpecifications
}

interface ProductSpecifications {
    general: GeneralSpecifications
    design: DesignSpecifications
    input: InputSpecifications
    display: DisplaySpecifications
    processor: ProcessorSpecifications
    memory: MemorySpecifications
    graphics: GraphicsSpecifications
    storage: StorageSpecifications
}

interface GeneralSpecifications {
    country: string
    model: string
}

interface DesignSpecifications {
    coverColor: string
    coverMaterial: string
    bodyMaterial: string
}

interface InputSpecifications {
    keyboardLayout: string
    numpad: boolean
}

interface DisplaySpecifications {
    type: string
    diagonal: number
    resolution: string
    refreshRate: number
}

interface ProcessorSpecifications {
    model: string
    totalCores: number
    performanceCores: number
    efficiencyCores: number
}

interface MemorySpecifications {
    type: string
    size: number
    slots: number
    frequency: number
    maxSize: number
}

interface GraphicsSpecifications {
    type: string
    integrated: string
    discrete: string
    manufacturer: string
    memoryType: string
}

interface StorageSpecifications {
    ssdSize: number
    ssdType: string
    freeSlots: string
}
